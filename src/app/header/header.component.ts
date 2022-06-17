import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:AuthService,private route:Router) { }

  admin : any='false';

  LogOut(){
    return this.service.logoutUser();
    
  }

  isAdmin()
  {
    this.admin = this.service.adminDetail();
    if(this.admin==='true' && this.admin!=null)
    return true;
    else
    return false;
  }

  LoggedIn(input:boolean)
  {
    if(input)
    return this.service.loggedIn();
    else
    return !this.service.loggedIn();
  }

  ngOnInit(): void {
  }

}
