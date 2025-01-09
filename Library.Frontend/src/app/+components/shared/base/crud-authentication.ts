import { inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { SignupService } from "../../Authentication/signup/services/signup.service";
import { LoginService } from "../../Authentication/login/services/login.service";

export class CrudAuthentication {
    signupSer = inject(SignupService);
    loginSer = inject(LoginService);
    router = inject(Router)
    not = false
}