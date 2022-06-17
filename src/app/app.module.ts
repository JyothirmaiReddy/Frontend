import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlineComponent } from './airline/airline.component';
import { AirlineOperationsComponent } from './airline/airline-operations/airline-operations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './Services/auth.guard';
import { AuthService } from './Services/auth.service';
import { AirlineServiceService } from './Services/airline-service.service';
import { TokeninterceptorService } from './Services/tokeninterceptor.service';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './Services/inventory.service';
import { BookingComponent } from './booking/booking.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { BookingService } from './Services/booking.service';
import { PNRComponent } from './pnr/pnr.component';


@NgModule({
  declarations: [
    AppComponent,
    AirlineComponent,
    AirlineOperationsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    InventoryComponent,
    BookingComponent,
    BookinghistoryComponent,
    PNRComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AirlineServiceService,InventoryService,BookingService,AuthGuard,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokeninterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
