import { FormBuilder,FormControl,Validators} from "@angular/forms";
export class AirlineData {
    airlineNo : number;
    airlineLogo : string='';
    contactNumber : number;
    contactAddress : string='';
    formAirlineGroup:any;
    constructor()
    {
        var _builder=new FormBuilder();
        this.formAirlineGroup = _builder.group({});
        this.formAirlineGroup.addControl("airlineNoControl",new FormControl('',Validators.required));
        this.formAirlineGroup.addControl("airlineLogoControl",new FormControl('',Validators.required));
        this.formAirlineGroup.addControl("contactNumberControl",new FormControl('',Validators.required));
        this.formAirlineGroup.addControl("contactAddressControl",new FormControl('',Validators.required));

    }

}
