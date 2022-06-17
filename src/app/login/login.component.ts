import { Component, OnInit } from '@angular/core';
import { Userlogin } from '../Services/userlogin.model';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private route : Router) { }

  loginData : Userlogin = new Userlogin();

  register(){
    this.route.navigate(['/register']);
  }

  loginUser(){
    this.auth.loginUser(this.loginData).subscribe(res =>{
      localStorage.setItem('token',res.token)
      localStorage.setItem('usertype',this.loginData.userName)
      if(this.loginData.userName==='Admin')
      {
        localStorage.setItem('isAdmin','true')
        this.route.navigate(['/airline'])
      }
      else
      {
        localStorage.setItem('isAdmin','false')
        this.route.navigate(['/home'])
      }
    },
    err => alert(err.error.message)
    )
    }
    hasError(typeofvalidator:string,controlname:string):boolean{
      return this.loginData.formlogingroup.controls[controlname].hasError(typeofvalidator);
    }

  ngOnInit(): void {
  }

}
