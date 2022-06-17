import { FormBuilder,FormControl,Validators } from "@angular/forms";
import { Passengerdetails } from "./passengerdetails.model";
export class Bookflight {
    flightNo:number;
    name:string;
    email:string;
    stime:Date;
    etime:Date;
    source:string;
    destination:string;
    passengers:Array<Passengerdetails>
}
