import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { LoginService } from "./services/login.service";
import { Login } from "./models/login";
import { CrudAuthentication } from "../../shared/base/crud-authentication";

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends CrudAuthentication {
  login: Login = {
    email: '',
    password: '',
  };
  check() {
    this.not= false
    if (this.login.password.length > 6) {
    this.not= false
      this.loginSer.login(this.login).subscribe({
          next: (r:any) => {
            if (r['detail']) {
              this.not= true
              return
            }
            this.loginSer.setToken(r.accessToken,r.refreshToken);
            this.router.navigateByUrl('/admin')
          },
          error: (e:any) => {
            this.not= true
          }
      })
    }
    else {
      this.not= true
    }
  }
}
