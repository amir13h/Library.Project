import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CrudAdmin } from '../../shared/base/crud-admin';
import { BooksComponent } from "../../shared/books/ui/books.component";
import { GridComponent } from "../../shared/grid/grid.component";
import { ButtonGroupComponent } from "../../shared/button-group/button-group.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../../Authentication/login/services/login.service';


@Component({
  selector: 'app-admin',
  imports: [RouterLink,HeaderComponent, ButtonGroupComponent,RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  loginSer=inject(LoginService)
  ngOnInit(): void {
    this.loginSer.isAdmin=true;
  }

}
