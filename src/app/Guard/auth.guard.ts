import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';
import {  NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router, private toast: NgToastService){}

  canActivate(): boolean  {
    if(this.authService.isLoginedIn()){
      return true;
    }
    else{
      this.toast.error({detail:"Error",summary:"Please Login First!",duration:5000});
      this.router.navigate(['login']);
      return false;
    }
  }
  
}


// import { inject } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../Service/auth.service';


// export const AuthGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ):
//   Observable<boolean | UrlTree> 
//   | Promise<boolean | UrlTree> 
//   | boolean 
//   | UrlTree=> {

//   return inject(AuthService).IsLoginedIn()
//     ? true
//     : inject(Router).navigate(['login']);

// };



