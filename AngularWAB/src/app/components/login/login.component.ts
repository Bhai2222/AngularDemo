import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormConfig } from 'src/interface/formio-config';
import { WebService } from 'src/app/sevices/web.service';
import { LoginFormService } from 'src/app/formio.service.ts/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    private webService: WebService,
    private formBuilder: FormBuilder,
    private loginFormService: LoginFormService
  ) { }

  ngOnInit() {
    this.showLoginForm();
  }

  onLoginFormChange(): void {

  }

  onFormLoad(): void {

  }

  showLoginForm(): void {
    this.formIo.form = this.loginFormService.getForm();
  }

  submitForm(event: any): void {
    console.log(event);
    this.loginFormService.submitForm(event.data);
  }

}
