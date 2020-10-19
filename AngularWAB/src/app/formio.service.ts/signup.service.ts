import { LoginService } from '../sevices/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( 
    private loginService: LoginService 
    ) { }

  getForm(config?: any): any {
    return {
        components: [
            {
                title: 'SignUp',
                collapsible: false,
                tableView: false,
                key: 'loginPanel',
                type: 'panel',
                label: 'Panel',
                input: false,
                components: [
                    {
                        label: 'Name',
                        placeholder: 'Enter Name',
                        spellcheck: true,
                        tableView: true,
                        calculateServer: false,
                        validate: {
                            required: true
                        },
                        key: 'firstName',
                        type: 'textfield',
                        input: true
                    },
                    {
                        label: 'LastName',
                        placeholder: 'Enter LastName',
                        spellcheck: true,
                        tableView: false,
                        calculateServer: false,
                        validate: {
                            required: true
                        },
                        key: 'lastName',
                        type: 'textfield',
                        input: true,
                        protected: true
                    },
                    {
                      label: 'Email',
                      placeholder: 'Enter Email',
                      spellcheck: true,
                      tableView: false,
                      calculateServer: false,
                      validate: {
                          required: true
                      },
                      key: 'email',
                      type: 'email',
                      input: true,
                      protected: true
                  },
                  {
                    label: 'Contact',
                    placeholder: 'Enter Contact',
                    spellcheck: true,
                    tableView: false,
                    calculateServer: false,
                    validate: {
                        required: true
                    },
                    key: 'contactNumber',
                    type: 'textfield',
                    input: true,
                    protected: true
                },
                {
                  label: 'Password',
                  placeholder: 'Enter Password',
                  spellcheck: true,
                  tableView: false,
                  calculateServer: false,
                  validate: {
                      required: true
                  },
                  key: 'password',
                  type: 'textfield',
                  input: true,
                  protected: true
              },
              {
                label: 'ConfirmPassword',
                placeholder: 'Enter Password',
                spellcheck: true,
                tableView: false,
                calculateServer: false,
                validate: {
                    required: true
                },
                key: 'confirmPassword',
                type: 'textfield',
                input: true,
                protected: true
            },
            {
              label: 'Select',
              widget: 'choicesjs',
              disabled: true,
              tableView: true,
              data: {
                  values: [
                      {
                          label: 'USER',
                          value: 'USER'
                      }
                  ]
              },
              selectThreshold: 0.3,
              key: 'role',
              type: 'select',
              indexeddb: {
                  filter: {}
              },
              input: true,
              defaultValue: 'USER'
          },
                    {
                        input: true,
                        label: 'Save',
                        tableView: false,
                        action: 'submit',
                        disableOnInvalid: true,
                        theme: 'primary',
                        type: 'button',
                        cssClass: 'btn btn-warning',
                        customClass: 'mb-0'
                    }
                ]
            },
        ]
    }
  }

  validateForm(submission: any, callback: any): void {
    // tslint:disable-next-line:no-null-keyword
    callback(null, submission);
  }

  submitForm(submission: any): void {
    console.log(submission);
    this.loginService.signUpUser(submission)
        .subscribe(result => {
            console.log(result);
        }, err => {
            alert(err);
        });
  }

  cleanup(): void {
    throw new Error('Method not implemented.');
  }
}
