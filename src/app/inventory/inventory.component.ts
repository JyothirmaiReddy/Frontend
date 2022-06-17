import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Inventory } from '../Services/inventory.model';
import { InventoryService } from '../Services/inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private service:InventoryService,private route:Router) { }

  inventoryData:Inventory =  new Inventory();

  ngOnInit(): void {
    console.log(history.state);
    console.log(history.state.data);
  }

  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.inventoryData.forminventorygroup.controls[controlname].hasError(typeofvalidator);
  }

  RegisterAirline()
  {
    var data ={
      flightNumber:this.inventoryData.flightNumber,
      fK_AirlineNo:history.state.data.airlineNo,
      fromPlace:this.inventoryData.fromPlace,
      toPlace:this.inventoryData.toPlace,
      startDatetime:this.inventoryData.startDatetime,
      endDatetime:this.inventoryData.endDatetime,
      businessSeats:this.inventoryData.businessSeats,
      nonBusinessSeats:this.inventoryData.nonBusinessSeats,
      ticketCost:this.inventoryData.ticketCost,
      numberOfRows:this.inventoryData.numberOfRows
    }
    this.service.AddFlight(data).subscribe((res:any) =>
      {
        alert(res)
      })

    this.route.navigate(['/airline'])

  }



}
