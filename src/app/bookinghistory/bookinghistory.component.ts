import { Component, OnInit } from '@angular/core';
import { BookingService } from '../Services/booking.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  constructor(private service:BookingService) { }

  bookingDetails :any =[];

  ngOnInit(): void {
    var email = localStorage.getItem('usertype') +'@gmail.com';
    this.service.getHistory(email).subscribe(res =>{
      this.bookingDetails = res
      console.log(this.bookingDetails)
    },err =>
    {
      alert(err.error)
    }
      )
  }

}
