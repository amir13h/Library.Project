import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Signup } from './models/signup';
import { SignupService } from './services/signup.service';
import { CrudAuthentication } from '../../shared/base/crud-authentication';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent extends CrudAuthentication{
  not1=signal('');
  password2=signal('');
  signup: Signup = {
    email: '',
    password: ''
  };
  check() {
    this.not=false;
    if (this.signup.password == this.password2()) {
      this.signupSer.signup(this.signup).subscribe({
        next: (r) => {
          this.router.navigateByUrl('/admin')          
        },
        error: (e) => {
          this.not=true;
        }
      });
    }
    else{
      this.not=false;
      this.not1.set('رمزهای وارد شده یکسان نیستند')
    };

  };
}
