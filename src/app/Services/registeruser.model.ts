import { FormBuilder,FormControl,Validators } from "@angular/forms";
export class Registeruser {
    userName:string;
    password:string;
    emailId:string;
    formregistergroup:any;
    constructor()
    {
        var _builder = new FormBuilder();
        this.formregistergroup = _builder.group({});
        var validationcollection = [];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.email);
        this.formregistergroup.addControl("userNameControl",new FormControl('',Validators.required));
        this.formregistergroup.addControl("passwordControl",new FormControl('',Validators.required));
        this.formregistergroup.addControl("emailControl",new FormControl('',Validators.required));
    }
}
