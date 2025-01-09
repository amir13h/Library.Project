import { Component, inject, Input } from '@angular/core';
import { GridColumn } from './model/grid-column';
import { Router, RouterLink } from '@angular/router';
import { EditService } from '../edit/service/edit.service';
import { AddDataService } from '../add-data/service/add-data.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  //دریافت سرویس اضافه کردن دیتا
  addSer = inject(AddDataService);
  //دریافت سرویس ویرایش
  editSer = inject(EditService);
  //دریافت روتر برای انتقال به صفحه ویرایش
  router = inject(Router);
  //دریافت دیتا و ستون ها از صفحه اصلی
  @Input() data: any[] | undefined;
  //دریافت ستون ها از صفحه اصلی
  @Input() columns: GridColumn[] | undefined;
  //تابع برای انتقال دیتا به صفحه ویرایش
  editClick(data: any) {
    if (this.addSer.isMember==true) {
      this.editSer.dataM = data;
    }
    if (this.addSer.isMember==false) {
      this.editSer.dataB = data;
    }
    this.router.navigateByUrl('admin/edit');
  }
  //تابع برای حذف دیتا
  remove(data: any) {
    if (this.addSer.isMember==true) {
      this.editSer.dataM = data;
    }
    if (this.addSer.isMember==false) {
      this.editSer.dataB = data;
    }
    this.router.navigateByUrl('/admin/remove');    
  }


}
