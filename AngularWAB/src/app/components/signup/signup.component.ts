
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormConfig } from 'src/interface/formio-config';
import { SignupService } from 'src/app/formio.service.ts/signup.service';
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

})
export class SignupComponent implements OnInit {
  
  formIo: FormConfig = {
    form: {},
    submission: { data: {} },
    onSubmit: data => {
    },
    beforeSubmit: (event, callback) => {
    }
  };

  formIoOptions = {
    submitMessage: '',
    disableAlerts: true,
    noAlerts: true
};

  constructor(
    private signupService: SignupService
  ) { }

  ngOnInit() {
    this.showLoginForm();
  }

  onSignUpFormChange(): void {

  }

  onFormLoad(): void {

  }

  showLoginForm(): void {
    this.formIo.form = this.signupService.getForm();
  }

  submitForm(event: any): void {
    console.log(event);
    this.signupService.submitForm(event.data);
  }  
}

