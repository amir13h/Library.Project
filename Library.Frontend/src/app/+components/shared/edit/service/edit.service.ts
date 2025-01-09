import { Injectable } from '@angular/core';
import { CrudService } from '../../base/crud-service';
import { EditReq } from '../model/edit-req';
import { MemberRes } from '../../members/models/memberRes';
import { BookRes } from '../../books/book/model/bookRes';

@Injectable({
  providedIn: 'root'
})
export class EditService extends CrudService<EditReq,any> {
  dataM: MemberRes = {
    id: undefined,
    name: '',
    age: undefined,
    phone: ''
  };
  dataMember(){
    return this.dataM;
  }
  dataB: BookRes = {
    id: undefined,
    title: '',
    pages: undefined,
    price: undefined
  };
  dataBook(){
    return this.dataB;
  }
}
