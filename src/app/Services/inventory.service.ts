import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }

  private _addinventoryUrl='http://localhost:8000/addinventory';
  private _searchflightUrl='http://localhost:8000/searchflights';

  AddFlight(flightdata:any)
  {
    return this.http.post<any>(this._addinventoryUrl,flightdata,{responseType:'text' as 'json'});
  }

  SearchFlight(searchdata:any)
  {
    return this.http.get<any>(this._searchflightUrl+'?source='+searchdata.source+'&destination='+searchdata.destination+'&oneway='+searchdata.isOneway+'&roundtrip='+searchdata.isRoundtrip);
  }

}
