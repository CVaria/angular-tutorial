import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function RegexValidator(regString: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const validExp = regString.test(control.value);

    return (!validExp) ? { invalidRegEx: {valid: false, value: control.value}} : null;
  };
}

@Directive({
  selector: '[appRegexValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: RegexValidatorDirective, multi: true}]
  //multi for providing new directives without overriding existing ones
  //providers tell injector how to create dependency instances
})
export class RegexValidatorDirective implements Validator{

  @Input('appRegexValidator') validExp: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    //console.log("exp: " , this.validExp);
    //console.log(new RegExp(this.validExp));
    return this.validExp ? RegexValidator(new RegExp(this.validExp))(control): null;
  }

}