import { Injectable } from '@angular/core';
import { LoginService } from '../sevices/login.service';
import { HelperService } from '../Helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class WebInfoService {
  data = {};
  constructor(
    private loginService: LoginService,
    private helperService: HelperService
  ) { }


  getForm(config?: any): any {
    return {
      components: [
        {
          label: 'Plan Name:',
          tableView: true,
          key: 'planName',
          type: 'textfield',
          input: true,
          validate: {
            required: true
          },
        },
        {
          label: 'Website Type',
          tableView: true,
          key: 'websiteType',
          type: 'textfield',
          input: true,
          validate: {
            required: true
          },
        },
        {
          label: 'Info',
          reorder: false,
          addAnotherPosition: 'bottom',
          defaultOpen: false,
          layoutFixed: false,
          enableRowGroups: false,
          tableView: false,
          defaultValue: [
            {}
          ],
          key: 'info',
          type: 'datagrid',
          input: true,
          validate: {
            required: true
          },
          components: [
            {
              autoExpand: false,
              tableView: true,
              key: 'info',
              type: 'textarea',
              input: true
            }
          ]
        },
        {
          label: 'Note',
          tableView: true,
          key: 'note',
          type: 'textfield',
          input: true
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
    }
  }

  validateForm(submission: any, callback: any): void {
    // tslint:disable-next-line:no-null-keyword
    callback(null, submission);
  }

  submitForm(submission: any, callback: Function): void {
    console.log(submission);
    if (this.data && this.data['id']) {
      this.loginService.editPlan(submission, this.data['id'])
        .subscribe(result => {
          console.log(result);
          callback();
        }, err => {
          alert(err);
        });
    } else {
      this.loginService.webInfo(submission)
        .subscribe(result => {
          console.log(result);
          callback();
        }, err => {
          alert(err);
        });
    }
  }

  deletePlan(id: any): void {
    this.loginService.deletePlan(this.data['id'])
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

