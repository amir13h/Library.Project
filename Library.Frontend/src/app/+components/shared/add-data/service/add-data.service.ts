import { Injectable } from '@angular/core';
import { CrudService } from '../../base/crud-service';
import { MemberReq } from '../../members/models/memberReq';

@Injectable({
  providedIn: 'root'
})
export class AddDataService extends CrudService<MemberReq, any> {
  //تعریف متغیر برای نگهداری نوع دیتا
  isMember : boolean|undefined;
  //تابع برای تعیین نوع دیتا
  isMember1() {
    return this.isMember;
  }
}
