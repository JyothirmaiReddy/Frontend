import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  private _bookingUrl = 'http://localhost:8000/addbooking';
  private _historyUrl = 'http://localhost:8000/GetBookingByEmail';
  private _cancelUrl = 'http://localhost:8000/cancelbooking';
  private _pnrUrl = 'http://localhost:8000/GetBookingByPNR';

  addBooking(data:any)
  {
    return this.http.post(this._bookingUrl,data);
  }

  getHistory(data:any)
  {
    return this.http.get<any>(this._historyUrl+'?email='+data);
  }

  getBookingByPNR(data:any)
  {
    return this.http.get<any>(this._pnrUrl+'?PNR='+data);
  }

  cancelBooking(data:any)
  {
    return this.http.delete<any>(this._cancelUrl+'?Email='+data,{responseType:'text' as 'json'});
  }

}
