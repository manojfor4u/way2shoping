import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../shared/Models/Contact';
import { InputControls } from 'src/app/shared/validations/InputControls';
import { FieldsValidateService } from 'src/app/shared/services/fields-validate.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contactForm: FormGroup;
  public inputControls = InputControls;
  public contactPage: Contact = new Contact();
  constructor(
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  // initialize ContactForm 
  private initializeForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.contactForm.invalid) {
      return this.fieldsValidateService.validateAllFormFields(this.contactForm);
    } else{
      console.log("Manoj");
    }
  }
}
