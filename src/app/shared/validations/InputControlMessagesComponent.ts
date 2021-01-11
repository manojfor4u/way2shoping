import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './ValidationService';


/**
 * This component is using for common display messages for invalid inputType.
 */
@Component({
  selector: 'control-messages',
  template: `
    <div class="error">
      <div *ngIf="errorMessage !== null">{{ errorMessage }}</div>
    </div>
  `,
  styleUrls: ['./InputControlMessagesComponent.css'],
})
export class InputControlMessagesComponent {
  @Input() control: FormControl;
  @Input() inputElmControl;
  @Input() errors = [];

  constructor() { }

  /**
   * This function is returning error message.
   * @returns {any}
   */
  get errorMessage() {
    if (!this.isUndefined(this.control)) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.dirty) {
          return ValidationService.getValidatorErrorMessage(
            propertyName,
            this.control.errors[propertyName],
            this.control.errors,
            this.inputElmControl
          );
        }
      }
      return null;
    } else if (this.errors) {
      for (const propertyName in this.errors) {
        return ValidationService.getValidatorErrorMessage(
          propertyName,
          this.errors[propertyName],
          this.errors,
          this.inputElmControl
        );
      }
    }
  }
  /**
 * This function is used to check 'undefined' condition
 * @param value
 * @return boolean
 */
  public isUndefined(value) {
    if (value === void 0) {
      return true;
    } else {
      return false;
    }
  }
}
