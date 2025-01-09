import { inject, Injectable } from '@angular/core';
import { BackendService } from '../../../+services/backend.service';
import { BookReq } from '../books/book/model/bookReq';
import { CrudAdmin } from './crud-admin';

export class CrudService<TReq,TRes> {
  backend = inject(BackendService);
  apiName='';
  list() {
    return this.backend.get(`api/${this.apiName}/list`)
  }
  add(data: TReq) {
    return this.backend.post(`api/${this.apiName}/add`, data)
  }
  update(data: TRes) {
    return this.backend.put(`api/${this.apiName}/update`, data);
  }
  delete(id: number) {
    return this.backend.delete(`api/${this.apiName}/delete/${id}`);
  }

}

