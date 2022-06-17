import { FormBuilder,FormControl,Validators } from "@angular/forms";
export class Userlogin {
    userName :string='';
    password:string;
    formlogingroup:any;
    constructor()
    {
        var _builder = new FormBuilder();
        this.formlogingroup = _builder.group({});
        var validationcollection = [];
        validationcollection.push(Validators.required);
        this.formlogingroup.addControl("userNameControl",new FormControl('',Validators.required));
        this.formlogingroup.addControl("passwordControl",new FormControl('',Validators.required));
    }

}
