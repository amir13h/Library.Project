import { Component, inject } from '@angular/core';
import { CrudComponent } from '../../base/crud-component';
import { RemoveService } from '../service/remove.service';
import { EditService } from '../../edit/service/edit.service';
import { Router } from '@angular/router';
import { AddDataService } from '../../add-data/service/add-data.service';

@Component({
  selector: 'app-remove',
  imports: [],
  templateUrl: './remove.component.html',
  styleUrl: './remove.component.scss'
})
export class RemoveComponent extends CrudComponent<any, any, RemoveService> {
  //دریافت سرویس 
  constructor(service: RemoveService) {
    super(service);
  }
  //دریافت سرویس 
  editSer = inject(EditService);
  //دریافت سرویس ادد دیتا
  addSer = inject(AddDataService);
  //تایید حذف دیتا
  okRemove() {
    if (this.addSer.isMember == true) {
      this.service.apiName = 'members';
      if (this.editSer.dataM['id'] !== undefined) {
        this.remove(this.editSer.dataM['id']);
      }
      this.address = 'admin/members';
    }
    if (this.addSer.isMember == false) {
      this.service.apiName = 'books';
      if (this.editSer.dataB['id'] !== undefined) {
        this.remove(this.editSer.dataB['id']);
      }
      this.address = 'admin/books';
    }

  }
  //لغو حذف دیتا
  cancel() {
    if (this.addSer.isMember == true) {
      this.router.navigateByUrl('admin/members');
    }
    if (this.addSer.isMember == false) {
      this.router.navigateByUrl('admin/books');
    }
  }

}
