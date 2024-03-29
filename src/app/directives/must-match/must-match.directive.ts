import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormGroup, ValidationErrors } from '@angular/forms';
import { MustMatch } from './must-match.validator';

@Directive({
  selector: '[appMustMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator {

  // tslint:disable-next-line: no-input-rename
  @Input('mustMatch') mustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
      return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }

}
