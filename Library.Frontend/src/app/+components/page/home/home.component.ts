import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { BookComponent } from "../../shared/books/book/book.component";
import { BooksComponent } from "../../shared/books/ui/books.component";
import { ButtonGroupComponent } from "../../shared/button-group/button-group.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { LoginService } from '../../Authentication/login/services/login.service';

@Component({
  selector: 'app-normal.user',
  imports: [HeaderComponent, BooksComponent, ButtonGroupComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  login=inject(LoginService)
  ngOnInit(): void {
    this.login.unsetToken();
    
  }

}
