import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../+components/Authentication/login/services/login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const loginSer = inject(LoginService);
  const router = inject(Router)
  if (!loginSer.isLogin()) {
    router.navigateByUrl('/login')
    return false;
  }
  return true;
};
