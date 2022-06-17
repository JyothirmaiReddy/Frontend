import { FormBuilder,FormControl, Validators} from "@angular/forms";
export class Inventory {
flightNumber:number;
fK_AirlineNo:number;
fromPlace:string;
toPlace:string;
startDatetime:Date;
endDatetime:Date;
businessSeats:number;
nonBusinessSeats:number;
ticketCost:number;
numberOfRows:number;

forminventorygroup:any;

constructor()
{
    var _builder = new FormBuilder();
    this.forminventorygroup = _builder.group({});;
    this.forminventorygroup.addControl("flightNumberControl", new FormControl('',Validators.required));
    this.forminventorygroup.addControl("fromPlaceControl", new FormControl('',Validators.required));
    this.forminventorygroup.addControl("toPlaceControl", new FormControl('',Validators.required));
    this.forminventorygroup.addControl("startDatetimeControl", new FormControl('',Validators.required));
    this.forminventorygroup.addControl("endDatetimeControl", new FormControl('',Validators.required));
    this.forminventorygroup.addControl("businessSeatsControl", new FormControl('',Validators.required));
    this.forminventorygroup.addControl("nonBusinessSeatsControl", new FormControl('',Validators.required));
    this.forminventorygroup.addControl("ticketCostControl", new FormControl('',Validators.required));
    this.forminventorygroup.addControl("numberOfRowsControl", new FormControl('',Validators.required));
}
}
