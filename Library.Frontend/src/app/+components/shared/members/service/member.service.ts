import { Injectable } from '@angular/core';
import { CrudService } from '../../base/crud-service';
import { MemberReq } from '../models/memberReq';

@Injectable({
  providedIn: 'root'
})
export class MemberService extends CrudService<MemberReq,any> {
  override apiName: string='members';
}
