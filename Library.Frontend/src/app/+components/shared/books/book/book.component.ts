import { Component, inject, Input, input, OnInit } from '@angular/core';
import { BookService } from './service/book.service';
import { BookRes } from './model/bookRes';
import { DecimalPipe } from '@angular/common';



@Component({
  selector: 'app-book',
  imports: [DecimalPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input() books:BookRes={
    title:'',
    pages:undefined,
    id:undefined,
    price:undefined
  }

}
