import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flightmanagement';

  constructor(private service:AuthService){}

  loggedOut()
  {
    return this.service.logoutUser();
  }

  loggedIn(input : boolean)
  {
    if(input)
    return this.service.loggedIn();
    else
    return !this.service.loggedIn();
  }
}
