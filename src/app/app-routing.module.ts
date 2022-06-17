import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './airline/airline.component';
import { AirlineOperationsComponent } from './airline/airline-operations/airline-operations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { HeaderComponent } from './header/header.component';
import { PNRComponent } from './pnr/pnr.component';

const routes: Routes = [
  {
    path:'airline',component:AirlineComponent
  },
  {
    path:'airline-operations',component:AirlineOperationsComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'addinventory',component:InventoryComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'booking',component:BookingComponent
  },
  {
    path:'history',component:BookinghistoryComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'pnr',component:PNRComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
