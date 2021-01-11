import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FieldsValidateService {

  constructor() { }
  /**
  * It Validate all the fields validations one by one and will display the validation message.
  */
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        if (control.invalid) {
          control.markAsDirty({ onlySelf: true });
        }
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        Object.keys(control.controls).forEach((subFields) => {
          const subcontrol = control.controls[subFields];
          if (subcontrol instanceof FormGroup) {
            this.validateAllFormFields(subcontrol);
          }
        });
      }
    });
  }
}
