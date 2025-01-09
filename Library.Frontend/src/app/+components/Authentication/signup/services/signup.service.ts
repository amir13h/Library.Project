import { inject, Injectable } from '@angular/core';

import { Signup } from '../models/signup';
import { BackendService } from '../../../../+services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  backend=inject(BackendService);
  signup(data:Signup){
    return this.backend.post('api/security/signup',data)
  };
}
