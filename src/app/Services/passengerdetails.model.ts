import { FormBuilder,FormControl,Validators } from "@angular/forms";
export class Passengerdetails {
    name:string;
    gender:string;
    age:number;
    ticketClass:string;
    formpassengergroup:any;
    constructor()
    {
        var _builder = new FormBuilder();
        this.formpassengergroup = _builder.group({});
        this.formpassengergroup.addControl("nameControl", new FormControl('',Validators.required));
        this.formpassengergroup.addControl("genderControl", new FormControl('',Validators.required));
        this.formpassengergroup.addControl("ageControl", new FormControl('',Validators.required));
        this.formpassengergroup.addControl("ticketClassControl", new FormControl('',Validators.required));
    }
}
