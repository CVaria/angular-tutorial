import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LengthValidator } from '../../../validators-directives/length-validator.directive';
import { RegexValidator } from '../../../validators-directives/regex-validator.directive';
import { CustomService } from '../../../services/custom.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  //create an instance for form
  myReactiveForm : FormGroup; 


  constructor(private customServ: CustomService) {
	this.myReactiveForm = this.createForm();
  }

  ngOnInit() {}

  //When we create the form model, we set the validators we want for each input field.
  // Angular has built-in validators such us 'required' or email validator
  // but we can create custom validators as well (synch or async)
  createForm(){
    var namesPattern = /^[a-zA-Z\u0386-\u03CE\.\, ]{1,100}$/;
    return new FormGroup({
    		firstName: new FormControl('', [Validators.required, LengthValidator(10), RegexValidator(namesPattern)]), //add custom validators
    		lastName: new FormControl('',[Validators.required, LengthValidator(10), RegexValidator(namesPattern)] ),
    		address: new FormGroup({
      			street: new FormControl(''),
      			city: new FormControl(''),
      			state: new FormControl('')
    		})
  	});
  }
  
  /*
  patchValue(): replace any properties defined in the object that have changed in the form model.
  setValue(): set a new value for an individual control.
  
  */
  
  updateForm(){
    this.myReactiveForm.patchValue({
      address: {
        street: 'No Street',
        city: 'No City',
        state: 'No State'
      }
    });
  }
  
  onSubmit(){
    this.customServ.addPerson(this.myReactiveForm.value);
  }
  
  //In reactive forms you cannot access inputs without getters
  //You will either use a getter or create a reference of the form eg. "myReactiveForm" and
  //refer to input field as myReactiveForm.get(myInputField)
  get firstName() { return this.myReactiveForm.get('firstName'); }
  get lastName() { return this.myReactiveForm.get('lastName'); }
  //for nested groups it will be like
  //get street(){ return this.myReactiveForm.get(['address','street']);}

}
