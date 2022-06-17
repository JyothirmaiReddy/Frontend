import { Injectable } from '@angular/core';
import {AirlineData} from './airline-class.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AirlineServiceService {

  AirlineForm : AirlineData = new AirlineData();
  readonly registerAirlineUrl = 'http://localhost:8000/addairline';
  readonly searchAirlineUrl = 'http://localhost:8000/searchairline';
  readonly deleteAirlineUrl = 'http://localhost:8000/delete';
  readonly blockAirlineUrl = 'http://localhost:8000/block';


  constructor(private http:HttpClient) { }

  addAirline(formdata:any){
    debugger;
    var data =  {
      airlineNo : formdata.airlineNo,
      airlineLogo : formdata.airlineLogo,
      contactNumber : formdata.contactNumber,
      contactAddress : formdata.contactAddress,
    }
    return this.http.post<any>(this.registerAirlineUrl,data);
  }

  getAllAirlines(){
    return this.http.get<any>(this.searchAirlineUrl);
  }

  deleteAirlines(id:any)
  {
    return this.http.delete(this.deleteAirlineUrl+'?airlinenumber=' +id);
  }

  blockAirlines(id:any)
  {
    return this.http.put(this.blockAirlineUrl+'?airlineno='+id,'');
  }
}
