import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, 
  CanActivateChild, Router, NavigationExtras} from '@angular/router';
import { Observable } from 'rxjs';
import { CustomService } from '../services/custom.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

constructor(
    private customServ: CustomService,
    private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      //we check if user set password as "secret" in order to let him pass
      let pass = this.customServ.getPassword();
      return (pass === 'secret');
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(next, state);
  }

}
