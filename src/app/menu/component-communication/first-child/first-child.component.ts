import { Component, OnInit, Input } from '@angular/core';
import { CustomService } from './../../../services/custom.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {
  serviceMsg: string ='';
  
  
  /*
  Input Decorator marks a field as an input property and supplies configuration metadata. 
  The input property is bound to a DOM property in the template. During change detection, 
  Angular automatically updates the data property with the DOM property's value.
  */
   @Input() childMessage: string;

  //Dependency Injection in order to use custom service    
  constructor(private customServ: CustomService) { }

  ngOnInit() {}
  
  sendMessage(){
    this.customServ.sendMessage(this.serviceMsg)
  }

}
