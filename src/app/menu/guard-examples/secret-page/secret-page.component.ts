import { Component, OnInit } from '@angular/core';
import { CustomService } from '../../../services/custom.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secret-page',
  templateUrl: './secret-page.component.html',
  styleUrls: ['./secret-page.component.css']
})
export class SecretPageComponent implements OnInit {

  constructor(private customServ: CustomService, private router: Router) { }

  ngOnInit() {
    
  }

    goBack(){
        this.customServ.setPassword('');
        this.router.navigate(['/menu/guards'])
    }
    
    /*
    Component implements canDeactivate() function of DialogGuard. This way each component that uses
    DialogGuard has its own canDeactivate custom function.
    We could have just implemented the canDeactivate() inside the guard and use it on every component we wanted.
    */
      canDeactivate(): Observable<boolean> | boolean {
        // Ask the user with the dialog service and return its
        // observable which resolves to true or false when the user decides
        return window.confirm("Are you sure you want to exit the secret page?");
    }
  
}
