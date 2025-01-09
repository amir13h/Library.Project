import { Component, inject, OnInit } from '@angular/core';
import { CrudComponent } from '../base/crud-component';
import { AddDataReq } from './models/add-data-req';
import { FormsModule, NgModel } from '@angular/forms';
import { MemberReq } from '../members/models/memberReq';
import { AddDataService } from './service/add-data.service';
import { AddDataRes } from './models/add-data-res';
import { routes } from '../../../app.routes';
import { Router } from '@angular/router';
import { BookReq } from '../books/book/model/bookReq';

@Component({
  selector: 'app-add-data',
  imports: [FormsModule],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.scss'
})
export class AddDataComponent extends CrudComponent<AddDataReq, AddDataRes, AddDataService> implements OnInit {
  addSer = inject(AddDataService);
  isMember: boolean | undefined;
  constructor(service: AddDataService) {
    super(service);
  }
  ngOnInit(): void {
    this.isMember = this.addSer.isMember1();
  }
  override address: string = '/admin/members';
  onSubmitMember() {
    this.address = 'admin/members';
    this.service.apiName = 'members';
    this.add(this.data1);
    
  }
  onSubmitBook() {
    this.address = 'admin/books';
    this.service.apiName = 'books';
    this.add(this.data2);
  }
}
