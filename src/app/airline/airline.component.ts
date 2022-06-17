import { Component, OnInit } from '@angular/core';
import { AirlineData } from '../Services/airline-class.model';
import { AirlineServiceService } from '../Services/airline-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styles: [
  ]
})
export class AirlineComponent implements OnInit {

  data:AirlineData = new AirlineData();
  dataArray:Array<AirlineData> = new Array<AirlineData>();

  constructor(public service:AirlineServiceService,public route:Router) { }

  ngOnInit(): void {
    this.service.getAllAirlines().subscribe(res =>
      {
        this.dataArray =res
      })
  }
  deleteAirline(airlines:AirlineData)
  {
    this.service.deleteAirlines(airlines.airlineNo).subscribe(res =>
      {
        alert("Deleted Successfully");
      });
  }
  BlockAirline(airlines:AirlineData)
  {
    this.service.blockAirlines(airlines.airlineNo).subscribe(res =>
      {
        alert("Blocked Successfully");
      })
  }
  //AddAirline()
  //{
   // this.route.navigate(["\airline-operations"]);
  //}
  AddInventory(airline:AirlineData)
  {
    this.route.navigate(['/addinventory'],{state:{data:airline}});
  }
}
