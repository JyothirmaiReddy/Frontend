import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registeruser } from '../Services/registeruser.model';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service:AuthService,private route:Router) { }

  registerUserData : Registeruser = new Registeruser();

  registerUser()
  {
    this.service.registerUser(this.registerUserData).subscribe(res =>{
      alert('User Registered Successfully'),
      this.route.navigate(['/login'])
    },
    err => alert(err.error.message));
  }
 hasError(typeofvalidator:string,controlname:string):boolean{
    return this.registerUserData.formregistergroup.controls[controlname].hasError(typeofvalidator);
 }
  }
