import { Routes } from '@angular/router';
import { SignupComponent } from './+components/Authentication/signup/signup.component';
import { LoginComponent } from './+components/Authentication/login/login.component';
import { ForgotPasswordComponent } from './+components/Authentication/forgot-password/forgot-password.component';
import { AdminComponent } from './+components/page/admin/admin.component';
import { HomeComponent } from './+components/page/home/home.component';
import { adminGuard } from './+guard/admin.guard';
import { BooksComponent } from './+components/shared/books/ui/books.component';
import { MembersComponent } from './+components/shared/members/ui/members.component';
import { AddDataComponent } from './+components/shared/add-data/add-data.component';
import { EditComponent } from './+components/shared/edit/ui/edit.component';
import { RemoveComponent } from './+components/shared/remove/ui/remove.component';


export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    {path: 'admin', canActivate: [adminGuard], component: AdminComponent, children: [
            { path: 'books', component: BooksComponent },
            { path: 'members', component: MembersComponent },
            { path: 'add', component: AddDataComponent },
            { path: 'edit', component: EditComponent },
            { path: 'remove', component: RemoveComponent },
            { path: '**', redirectTo: 'books', pathMatch: 'prefix' }
        ]
    },
    { path: 'home', component: HomeComponent },
    { path: 'forgot', component: ForgotPasswordComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: SignupComponent }
];