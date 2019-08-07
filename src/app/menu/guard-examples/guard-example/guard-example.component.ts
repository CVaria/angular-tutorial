import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from '../../../services/custom.service';

@Component({
  selector: 'app-guard-example',
  templateUrl: './guard-example.component.html',
  styleUrls: ['./guard-example.component.css']
})
export class GuardExampleComponent implements OnInit {
  password: string='';

  //Contains the information about a route associated with a component loaded in an outlet. 
  //An ActivatedRoute can also be used to traverse the router state tree.
  
  constructor(
  private router: Router, 
  private customServ: CustomService) { }

  ngOnInit() {
  }
  
  checkPassword(){
    this.customServ.setPassword(this.password);
    this.router.navigate(['/menu/secret']);
  }

}
