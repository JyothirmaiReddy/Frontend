import { Component, OnInit } from '@angular/core';
import { BookingService } from '../Services/booking.service';

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PNRComponent implements OnInit {

  constructor(private service:BookingService) { }
  isSearch:boolean=false;
  details:any=[];
  pnr:any;
  ngOnInit(): void {
  }

  getBookingByPNR(number:any)
  {
    this.service.getBookingByPNR(number).subscribe(res =>{
      this.isSearch=true
      this.details = res
      this.pnr = this.details[0].pnr
    }, err =>
    {
      alert(err.error)
    })
  }

  cancelBooking()
  {
    this.service.cancelBooking(this.pnr).subscribe(res =>
      {
        alert(res)
        console.log(res)
      },
      err =>
      {
        alert(err.error)
      }
      )
  }
}
