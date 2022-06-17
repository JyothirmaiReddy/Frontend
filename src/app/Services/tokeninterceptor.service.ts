import { Injectable } from '@angular/core';
import { HttpEvent,HttpHandler,HttpInterceptor,HttpRequest } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    let authservice = this.injector.get(AuthService);
    var headers= new HttpHeaders({    
      'Content-Type': 'application/json',    
      'Authorization':'bearer '+ authservice.getToken(),
      'Access-Control-Allow-Origin': '*',                
      //'Access- Control - Allow - Methods': 'GET, POST, OPTIONS',    
      'Access-Control-Allow-Headers':'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    }) 
    let tokenizedReq=req.clone({
      headers:headers
  })
  return next.handle(tokenizedReq)

  }
}
