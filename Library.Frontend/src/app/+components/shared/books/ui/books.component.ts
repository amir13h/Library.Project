import { Component, inject, Input, OnInit, Output } from '@angular/core';

import { BookComponent } from "../book/book.component";
import { BookService } from '../book/service/book.service';
import { BookRes } from '../book/model/bookRes';
import { CrudComponent } from '../../base/crud-component';
import { BookReq } from '../book/model/bookReq';
import { CrudAdmin } from '../../base/crud-admin';
import { LoginService } from '../../../Authentication/login/services/login.service';
import { GridComponent } from "../../grid/grid.component";
import { GridColumn } from '../../grid/model/grid-column';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddDataService } from '../../add-data/service/add-data.service';



@Component({
  selector: 'app-books',
  imports: [RouterLink, BookComponent, GridComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent extends CrudComponent<BookReq, BookRes, BookService> implements OnInit {
  loginSer = inject(LoginService)
  addSer = inject(AddDataService);

  admin = false;
  constructor(service: BookService) {
    super(service);
  }
  ngOnInit(): void {
    if (this.loginSer.isLogin()) {
      this.admin = true
      this.addSer.isMember = false;
    }
    this.list();
  }
  columns: GridColumn[] = [
    { field: 'id', titel: 'id' },
    { field: 'title', titel: 'نام کتاب' },
    { field: 'pages', titel: 'تعداد صفحات' },
    { field: 'price', titel: 'قیمت' },
  ]
}
