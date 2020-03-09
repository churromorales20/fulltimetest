import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersMainComponent } from './components/users-main/users-main.component';
import { AddUserComponent } from './components/add-user/add-user.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: UsersMainComponent },
  { path: 'adduser', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
