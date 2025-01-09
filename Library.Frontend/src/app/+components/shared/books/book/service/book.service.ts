import { inject, Injectable } from '@angular/core';
import { CrudService } from '../../../base/crud-service';
import { BookReq } from '../model/bookReq';


@Injectable({
  providedIn: 'root'
})
export class BookService extends CrudService<BookReq,any> {
  override apiName: string='books';
}

