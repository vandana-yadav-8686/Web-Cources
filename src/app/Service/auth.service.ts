import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { TokenApiModel } from '../models/token-api.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private baseUrl: string ="https://localhost:7107/api/User/";
   private userPayload :any;
  constructor( private http :HttpClient, private route:Router) { 
    // this.userPayload = this.decodedToken();
  }
  signUp(userObj :any){
   return this.http.post<any>(`${this.baseUrl}register`,userObj)  
  }

login(loginObj :any){
  return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  }
  logout() {
    localStorage.removeItem('token'); 
    this.route.navigate(['/login']);
    
 }

  setToken(tokenValue :string){
     localStorage.setItem('token',tokenValue)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  isLoginedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  // decodedToken(){
  //   const jwtHelper =new JwtHelperService();
  //   const token = this.getToken()!;
  //   console.log(jwtHelper.decodeToken(token));
  //   return jwtHelper.decodeToken(token);
  // }

  
 
  
}

