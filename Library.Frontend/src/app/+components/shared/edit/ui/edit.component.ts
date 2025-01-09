import { Component, inject, OnInit } from '@angular/core';
import { CrudComponent } from '../../base/crud-component';
import { EditReq } from '../model/edit-req';
import { EditRes } from '../model/edit-res';
import { EditService } from '../service/edit.service';
import { FormsModule } from '@angular/forms';
import { MemberRes } from '../../members/models/memberRes';
import { BookRes } from '../../books/book/model/bookRes';
import { AddDataService } from '../../add-data/service/add-data.service';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent extends CrudComponent<EditReq, EditRes, EditService> implements OnInit {
  addSer = inject(AddDataService);
  isMember: boolean | undefined;
  constructor(service: EditService) {
    super(service);
  }

  ngOnInit(): void {
    this.isMember = this.addSer.isMember1();
    if (this.isMember==true){
      this.data3=this.service.dataMember();
    }
    if (this.isMember==false){
      this.data4=this.service.dataBook();
    }
  }
  onSubmitMember() {
    this.address = 'admin/members';
    this.service.apiName = 'members';
    this.edit(this.data3);
  }                
  onSubmitBook() {
    this.address = 'admin/books';
    this.service.apiName = 'books';
    this.edit(this.data4);
  }

}
