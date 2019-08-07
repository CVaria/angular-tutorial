import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs';
 
export interface CanComponentDeactivate {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
 
//in order to make the guard reusable, we check if a component implements canDeactivate method
//every component that needs this guard will have a canDeactivate method implemented 
@Injectable({
  providedIn: 'root',
})
export class DialogGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
