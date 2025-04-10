import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
  });
  submitted = false;

  constructor(private mailService: MailService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }

  sendEmail(templateParam) {
    let template = {
      from_name: templateParam.firstName + ' ' + templateParam.lastName,
      to_name: 'Enquiry team',
      message: templateParam.message,
      reply_to: templateParam.email
    }
    this.mailService.send(template);
  }

  createForm() {
    this.contactForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        message: ['', Validators.required]
      });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.sendEmail(this.contactForm.value);
    // console.log(JSON.stringify(this.contactForm.value, null, 2));
  }
}
