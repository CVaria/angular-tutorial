import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';


export function LengthValidator(limit: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    let myString = control.value;
    if(myString === null || myString === undefined) return null;
    return (myString.length>limit) ? { invalidLength: {valid: false, value: control.value}} : null;
  };
}


@Directive({
  selector: '[appLengthValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: LengthValidatorDirective, multi: true}]
  /*
  In template-driven forms, we do NOT have direct access to the FormControl instance, so we can NOT pass the validator in like in reactive forms. Instead, we need to add a directive to the template. 
  The directive is the wrapper of our validator.
  
  Angular recognizes the directive's role in the validation process because the directive registers itself with the NG_VALIDATORS provider.
  
  NG_VALIDATORS is an InjectionToken for registering additional synchronous validators.
  An InjectionToken is used by providers whenever the type we are injecting is not reified (does not have a runtime representation) such as when injecting an interface, callable type (e.g validator), array or parameterized type.
  multi is used for providing new directives without overriding existing ones
  providers tell injector how to create dependency instances
  
  Reference: 
  https://angular.io/guide/form-validation
  https://stackoverflow.com/questions/49003757/using-angulars-useexitsing-with-custom-form-validations
  */
})
export class LengthValidatorDirective implements Validator {
  @Input('appLengthValidator') limit: number;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.limit ? LengthValidator(this.limit)(control) : null;
  }
}