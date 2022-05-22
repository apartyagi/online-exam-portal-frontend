import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if (this.login.isloggedIn() && this.login.check_role()=="Admin") {
        return true;
      }
      this.router.navigate(['login']);
      return false;
  }
  
}
