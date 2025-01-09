using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Library.API.Backend.DTOs;
using Microsoft.AspNetCore.Authentication.BearerToken;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Library.API.Backend.Controllers
{
    [ApiController]
    [Route("api/security")]
    public class SecurityApiController : ControllerBase
    {
        private readonly IServiceProvider _sp;

        public SecurityApiController(IServiceProvider sp)
        {
            _sp = sp;
        }
        private static readonly EmailAddressAttribute _emailAddressAttribute = new();
        private static ValidationProblem CreateValidationProblem(IdentityResult result)
        {
            Debug.Assert(!result.Succeeded);
            var errorDictionary = new Dictionary<string, string[]>(1);

            foreach (var error in result.Errors)
            {
                string[] newDescriptions;

                if (errorDictionary.TryGetValue(error.Code, out var descriptions))
                {
                    newDescriptions = new string[descriptions.Length + 1];
                    Array.Copy(descriptions, newDescriptions, descriptions.Length);
                    newDescriptions[descriptions.Length] = error.Description;
                }
                else
                {
                    newDescriptions = [error.Description];
                }

                errorDictionary[error.Code] = newDescriptions;
            }

            return TypedResults.ValidationProblem(errorDictionary);
        }





        [HttpPost("login")]
        public async Task<Results<Ok<AccessTokenResponse>, EmptyHttpResult, ProblemHttpResult>> Login(LoginDto loginDto)
        {
            var signInManager = _sp.GetRequiredService<SignInManager<IdentityUser>>();

            signInManager.AuthenticationScheme = IdentityConstants.BearerScheme;

            var result = await signInManager.PasswordSignInAsync(loginDto.Email, loginDto.Password, false, false);

            if (!result.Succeeded)
            {
                return TypedResults.Problem(result.ToString(), statusCode: StatusCodes.Status200OK);
            }

            return TypedResults.Empty;
        }
        [HttpPost("signup")]
        public async Task<Results<Ok, ValidationProblem>> Signup(SignupDto signupDto)
        {
            var userManager = _sp.GetRequiredService<UserManager<IdentityUser>>();
            //اینم نمیدونستم چیه البته بقیه روهم نمیدونستم چین👇👇👇
            // if (!userManager.SupportsUserEmail)
            // {
            //     throw new NotSupportedException($"{nameof(MapIdentityApi)} requires a user store with email support.");
            // }

            var userStore = _sp.GetRequiredService<IUserStore<IdentityUser>>();
            var emailStore = (IUserEmailStore<IdentityUser>)userStore;
            var email = signupDto.Email;

            if (string.IsNullOrEmpty(email) || !_emailAddressAttribute.IsValid(email))
            {
                return CreateValidationProblem(IdentityResult.Failed(userManager.ErrorDescriber.InvalidEmail(email)));
            }

            var user = new IdentityUser();
            await userStore.SetUserNameAsync(user, email, CancellationToken.None);
            await emailStore.SetEmailAsync(user, email, CancellationToken.None);
            var result = await userManager.CreateAsync(user, signupDto.Password);

            if (!result.Succeeded)
            {
                return CreateValidationProblem(result);
            }
            return TypedResults.Ok();
        }


    }
}