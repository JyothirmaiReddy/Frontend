import { Component, OnInit } from '@angular/core';
import { Passengerdetails } from '../Services/passengerdetails.model';
import { BookingService } from '../Services/booking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private service:BookingService,private route:Router) {}


  passengerData:Passengerdetails=new Passengerdetails();
  //passengerArray:Array<Passengerdetails> = new Array<Passengerdetails>();
  detailsArray:any=[];
  
  ngOnInit(): void {
  }

  Addrow()
  {  
    //this.passengerData = new Passengerdetails();
    var details ={
      name : this.passengerData.name,
      gender : this.passengerData.gender,
      age : this.passengerData.age,
      ticketClass : this.passengerData.ticketClass
    }  
    this.detailsArray.push(details);
    this.passengerData.formpassengergroup.reset();
  }

  Submit()
  {
    var bookingdata ={
      flightNo : history.state.data.flightNo,
      name : localStorage.getItem('usertype'),
      email : localStorage.getItem('usertype') +'@gmail.com',
      stime : history.state.data.startTime,
      etime : history.state.data.endTime,
      source : history.state.data.fromPlace,
      destination : history.state.data.toPlace,
      passengers:this.detailsArray
    }
    console.log(this.detailsArray);
    console.log(bookingdata.source);
    this.service.addBooking(bookingdata).subscribe(res =>
      {
        alert("Booking Done")
      })
    this.route.navigate(['/home'])
  }
}
