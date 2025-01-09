import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../Authentication/login/services/login.service';

@Component({
  selector: 'app-button-group',
  imports: [RouterLink],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.scss'
})
export class ButtonGroupComponent implements OnInit {
  loginSer=inject(LoginService)
  admin=false;
  ngOnInit(): void {
    if (this.loginSer.isLogin()) {
      this.admin=true
    }
  }
  
  
}
