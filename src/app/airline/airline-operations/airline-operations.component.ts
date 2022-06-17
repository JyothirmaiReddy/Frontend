import { Component, OnInit } from '@angular/core';
import { AirlineServiceService } from 'src/app/Services/airline-service.service';
import { AirlineData } from 'src/app/Services/airline-class.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airline-operations',
  templateUrl: './airline-operations.component.html',
  styles: [
  ]
})
export class AirlineOperationsComponent implements OnInit {

  constructor(public service :AirlineServiceService,private route:Router) { }

  addAirlineData : AirlineData = new AirlineData();

  ngOnInit(): void {
  }

  onSubmit(){
   this.service.addAirline(this.addAirlineData).subscribe(res =>
    {
      alert("added airline");
    });
    this.route.navigate(['/airline'])
  }

  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.AirlineForm = new AirlineData();
  }
  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.addAirlineData.formAirlineGroup.controls[controlname].hasError(typeofvalidator);
  }

}
