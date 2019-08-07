import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomService } from '../../../services/custom.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
    //templateDriven: FormGroup;
    model ={
        firstName : '',
        lastName : '',
        address : {
            street : '',
            city : '',
            state : ''
        }
    }

  /*
    We declare a dependency injection (DI) in component's constructor.
    Angular's injector holds a container of dependency instances. 
    When injector spots a (DI) it creates a new instance of the dependency, if there isn't
    one already. Otherwise, component reuses an already existing instance.
  */
  constructor(private customServ: CustomService) { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.model)
    this.customServ.addPerson(this.model);
  }

}
