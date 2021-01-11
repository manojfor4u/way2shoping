import { ErrorMessage } from './ErrorMessage';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { CustomRegex } from './CustomRegex';
import { Constants } from '../utils/Constants';


export class ValidationService {
  /**
   * This function returns dynamic messages according input fields.
   * @param {string} validatorName
   * @param validatorValue
   * @param controlError
   * @param inputElmControl
   * @returns {any}
   */
  public static getValidatorErrorMessage(
    validatorName: string,
    validatorValue?: any,
    controlError?: any,
    inputElmControl?: any
  ) {
    const message = controlError.message;
    const value = controlError.value;
    const config = {
      required: inputElmControl.value + ' is ' + ErrorMessage.required,
      invalidEmailAddress: ErrorMessage.invalidEmail,
      invalidPhoneNumber: ErrorMessage.invalidPhoneNumber,
      postcode: ErrorMessage.postcode,
      notSame: inputElmControl.value + ErrorMessage.notSame,
      leadingZeros: ErrorMessage.leadingZeros,
      invalidAlphabet: ErrorMessage.invalidAlphabet,
      confirmationPassword: ErrorMessage.confirmationPassword,
      spaceValidation: ErrorMessage.spaceValidation,
      isNotValidPostiveNumber: ErrorMessage.isNotValidPositiveNumber,
      isGreaterThenZero: ErrorMessage.isGreaterThenZero,
      ageValidation: ErrorMessage.ageValidation,
      alphaNumeric:ErrorMessage.alphaNumeric
    };
    return config[validatorName];
  }

  /**
   * This function is uses for validate blank or empty input value.
   * @param control
   * @returns {any}
   */
  public static required(control) {
    // RFC 2822 compliant regex
    if (!control || !control.value || !control.value || control.value.toString().trim() === '') {
      return {
        required: true,
        message: ErrorMessage.required,
        value: control.value,
      };
    } else {
      return null;
    }
  }
  /**
  * This function is useed to check number values in input field. 
  * @param control
  */
  public static allowNumberOnly(control) {
    let mobileNumber;
    mobileNumber = control.value;
    if (mobileNumber === undefined || mobileNumber === '' || (mobileNumber && mobileNumber.match(CustomRegex.allowNumberOnly))) {
      return null;
    } else {
      const controlName = ValidationService.getControlName(control);
      let errorString = null;
      if (controlName === Constants.CONTACT_NUMBER) {
        errorString = 'invalidPhoneNumber';
      } else {
        errorString = 'invalidNumber';
      }
      return { [errorString]: true };
    }
  }
  /**
    * get control name
    * @param control: AbstractControl
    */

  public static getControlName(control: AbstractControl): string | null {
    if (control) {
      const formGroup = control.parent.controls;
      return Object.keys(formGroup).find((name) => control === formGroup[name]) || null;
    }
  }

  /**
   * email validation
   * @param control
   * @returns {any}
   */
  public static emailValidator(control, isEmailRecipient = false) {
    // RFC 2822 compliant regex
    let emailValue;
    if (isEmailRecipient) {
      emailValue = control;
    } else {
      emailValue = control.value;
    }
    if (emailValue != null && emailValue !== undefined && emailValue.match(CustomRegex.email)) {
      return null;
    } else {
      return {
        invalidEmailAddress: true,
      };
    }
  }

  static checkEmail(group: FormGroup) {
    // here we have the 'Email' group
    const email = group.controls.email.value;
    const confirmEmail = group.controls.confirmEmail.value;
    if (email !== confirmEmail) {
      return (group.controls.confirmEmail.setErrors({ notSame: true }));
    } else {
      return null;
    }
  }
  /**
* This function is useed to check number values in input field.
* @param control
*/
  public static postcode(control) {
    if (control.value === undefined || control.value === '' || (control.value && control.value.match(CustomRegex.postcode))) {
      return null;
    } else {
      return { postcode: true };
    }
  }

  public static spaceRestriction(control) {
    if (control.value === undefined || control.value === '' || control.value.match(CustomRegex.space)) {
      return null;
    } else {
      return { spaceValidation: true };
    }
  }

  public static allowAlphaSpace(control) {
    if (control.value != null && control.value.match(CustomRegex.allowAlphaNumericSpace)) {
      return null;
    } else {
      return { invalidAlphabet: true };
    }
  }
  /*
 * This function is used to check positive number values upto 2 decimal place.
 * @param control
 */
  public static OnlyPositiveNumber(control) {
    if (control.value != null &&
      control.value !== undefined &&
      control.value.toString().match(CustomRegex.positiveNumberUptoTwoDecimal)) {
      return null;
    } else {
      if (control.value == 0) {
        return {
          isGreaterThenZero: true,
        };
      }
      else {
        return {
          isNotValidPostiveNumber: true,
        };
      }

    }
  }

  public static ageValidation(control) {
    if (control.value === undefined || control.value === '' || (control.value >= 1 && control.value <= 200)) {
      return null;
    } else {
      return { ageValidation: true };
    }
  }

  public static matchValues(
    matchTo: string // name of the control to match to
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { notSame: false };
    };
  }
  public static alphaNumericPassword(control) {
    if (control.value != null && control.value.match(CustomRegex.alphaNumericPassword)) {
      return null;
    } else {
      return { alphaNumeric: true };
    }
  }
}

