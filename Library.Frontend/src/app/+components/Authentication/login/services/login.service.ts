import { inject, Injectable } from '@angular/core';

import { Login } from '../models/login';
import { BackendService } from '../../../../+services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  backend = inject(BackendService);
  isAdmin=false;
  login(data: Login) {
    return this.backend.post('api/security/login', data)
  };
  setToken(accessToken:string,refreshToken:string){
    sessionStorage.setItem('accessToken',accessToken)
    sessionStorage.setItem('refreshToken',refreshToken)
  }
  unsetToken(){
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')
  }
  isLogin(){
    return sessionStorage.getItem('accessToken')!=undefined;
  }
}
