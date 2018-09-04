/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {HomepageComponent} from './homepage/homepage.component';
import {TableComponent} from './table/table.component';
import {AdloginComponent} from './adlogin/adlogin.component';
import {BookingComponent} from './booking/booking.component';
import {BillComponent} from './bill/bill.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : HomepageComponent},
  {path : 'menu', component : MenuComponent},
  {path : 'home', component : HomepageComponent},
  {path : 'table', component : TableComponent},
  {path : 'adlogin', component : AdloginComponent},
  {path : 'booking', component :  BookingComponent},
  {path : 'bill', component :  BillComponent},
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
