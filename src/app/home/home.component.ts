import { Component, OnInit } from '@angular/core';
import { Searchflight } from '../Services/searchflight.model';
import { InventoryService } from '../Services/inventory.service';
import { Flightres } from '../Services/flightres.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:InventoryService,private route:Router) { }

  searchflightData:Searchflight=new Searchflight();
  flightresData:Flightres = new Flightres();
  listOfFlights:Array<Flightres> = new Array<Flightres>();
  IsSearch:boolean=false;

  ngOnInit(): void {
  }

  SearchFlight()
  {
    if(this.searchflightData.isOneway===true)
    var roundtrip=false
    else
    roundtrip=true
    var data ={
      source:this.searchflightData.source,
      destination:this.searchflightData.destination,
      isOneway:this.searchflightData.isOneway,
      isRoundtrip:roundtrip
    }
    
    this.service.SearchFlight(data).subscribe(res =>
      {
        this.IsSearch=true;
        this.listOfFlights=res;

      },err =>
      {
        alert(err.error)
        
      })

  }

  Book(flightData:Flightres)
  {
    this.route.navigate(['/booking'],{state:{data:flightData}})
  }

}
