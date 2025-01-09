
import { inject, signal } from "@angular/core";
import { CrudAdmin } from "./crud-admin";
import { CrudService } from "./crud-service";
import { routes } from "../../../app.routes";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { MemberReq } from "../members/models/memberReq";
import { BookReq } from "../books/book/model/bookReq";
import { BookRes } from "../books/book/model/bookRes";
import { MemberRes } from "../members/models/memberRes";

export class CrudComponent<TReq, TRes, TSer extends CrudService<TReq, TRes>> {
  router = inject(Router);
  constructor(public service: TSer) {
  }
  //آدرس صفحه ای که بعد از اضافه کردن یا ویرایش اطلاعات به آن منتقل می شویم
  address = '';
  //آیا در حال انجام عملیات هستیم
  busy = false;
  //لیست اطلاعات
  data: TRes[] | undefined;
  //داده هایی که باید اضافه  شوند اعضا
  data1: MemberReq = {
    name: '',
    age: undefined,
    phone: ''
  };
  //داده هایی که باید اضافه   شوند کتاب ها
  data2: BookReq = {
    title: '',
    pages: undefined,
    price: undefined
  };
  data3: MemberRes = {
    id: undefined,
    name: '',
    age: undefined,
    phone: ''
  };
  //داده هایی که باید   ویرایش شوند اعضا
  data4: BookRes = {
    id: undefined,
    title: '',
    pages: undefined,
    price: undefined
  };
  //تماس با بک برای لیست کردن اطلاعات
  list() {
    this.busy = true;
    this.service.list().subscribe({
      next: (r: any) => {
        this.data = r as TRes[];
        this.busy = false;
      }
    })
  }
  //تماس با بک برای اضافه کردن اطلاعات
  add(data: TReq) {
    this.busy = true;
    this.service.add(data).subscribe({
      next: (r: any) => {
        this.list();
        this.busy = false;
        this.navigateByUrl();
      }
    })
  }
  //تماس با بک برای ویرایش کردن اطلاعات
  edit(data: TRes) {
    this.busy = true;
    this.service.update(data).subscribe({
      next: () => {
        this.list();
        this.busy = false;
        this.navigateByUrl();
      }
    })
  }
  //تماس با بک برای حذف کردن اطلاعات
  remove(id: number) {
    this.busy = true;
    this.service.delete(id).subscribe({
      next: () => {
        this.list();
        this.busy = false;
        this.navigateByUrl();
      }
    })
  }
  //تابع برای روت کردن به صفحه ای که بعد از اضافه یا ویرایش اطلاعات به آن منتقل می شویم
  navigateByUrl() {
    this.router.navigateByUrl(`${this.address}`);
  }
  //برگشت به صفحه اصلی اعضا
  goBackMember() {
    this.address = 'admin/members';
    this.navigateByUrl();

  }
  //برگشت به صفحه اصلی کتاب ها
  goBackBook() {
    this.address = 'admin/books';
    this.navigateByUrl();
  }

}

