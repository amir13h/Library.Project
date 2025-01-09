import { Component, inject, OnInit, signal } from '@angular/core';
import { GridComponent } from "../../grid/grid.component";
import { CrudComponent } from '../../base/crud-component';
import { MemberReq } from '../models/memberReq';
import { MemberRes } from '../models/memberRes';
import { MemberService } from '../service/member.service';
import { GridColumn } from '../../grid/model/grid-column';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddDataService } from '../../add-data/service/add-data.service';

@Component({
  selector: 'app-members',
  imports: [ RouterLink,GridComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent extends CrudComponent<MemberReq,MemberRes,MemberService> implements OnInit {
  addSer=inject(AddDataService);
  constructor(service:MemberService){
    super(service);
  }
  columns:GridColumn[]=[
    {field:'id',titel:'id'},
    {field:'name',titel:'نام'},
    {field:'age',titel:'سن'},
    {field:'phone',titel:'شماره تماس'}
  ]
  ngOnInit(): void {
    this.list();
    this.addSer.isMember = true;
  }

}
