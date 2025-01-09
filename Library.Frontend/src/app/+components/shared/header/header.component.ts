import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../Authentication/login/services/login.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  loginSer=inject(LoginService)
  logout() {
    if (this.loginSer.isLogin()) {
      this.loginSer.isAdmin = false;
    }
  }
  homeClick() {
    if (this.loginSer.isLogin()) {
      this.loginSer.isAdmin = false;
    }
  }

}
