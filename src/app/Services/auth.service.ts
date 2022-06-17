import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private route:Router) { }

  private _loginUrl = 'http://localhost:8000/Login';
  private _registerUrl = 'http://localhost:8000/Register';

  loginUser(user : any)
  {
    var data={
      userName : user.userName,
      password : user.password
    }
    return this.http.post<any>(this._loginUrl,data);
  }

  registerUser(user:any)
  {
    var data = {
      userName : user.userName,
      password : user.password,
      emailId : user.emailId
    }
    return this.http.post<any>(this._registerUrl,data);
  }

  logoutUser()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('usertype');
    //this.route.navigate(['/home']).then(() => {window.location.reload()});
    this.route.navigate(['/header']);
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  adminDetail()
  {
    return localStorage.getItem('isAdmin');
  }

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
}
