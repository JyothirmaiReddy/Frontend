import { FormBuilder,FormControl,Validators } from "@angular/forms";
export class Searchflight {
source:string;
destination:string;
isOneway:boolean;
isRoundtrip:boolean;
formsearchflightgroup:any;
constructor()
{
    var _builder = new FormBuilder();
    this.formsearchflightgroup = _builder.group({});
    this.formsearchflightgroup.addControl("sourceControl",new FormControl('',Validators.required));
    this.formsearchflightgroup.addControl("destinationControl",new FormControl('',Validators.required));
    this.formsearchflightgroup.addControl("isOnewayControl",new FormControl('',Validators.required));
    this.formsearchflightgroup.addControl("isRoundtripControl",new FormControl('',Validators.required));
}
}
