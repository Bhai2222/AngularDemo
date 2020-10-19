import { Injectable } from '@angular/core';
import { LoginService } from '../sevices/login.service';
import { WABServiceService } from '../sevices/wab-service.service';

@Injectable({
  providedIn: 'root'
})
export class WABServicesService {
  data = {};
  constructor(
    private wABServiceService: WABServiceService
  ) { }


  getForm(config?: any): any {
    return {
      components: [
        {
            label: 'Text Field',
            tableView: true,
            key: 'serviceName',
            type: 'textfield',
            input: true
        },
        {
            label: 'Text Area',
            autoExpand: false,
            tableView: true,
            key: 'serviceInfo',
            type: 'textarea',
            input: true
        },
        {
            type: 'button',
            label: 'Submit',
            key: 'submit',
            disableOnInvalid: true,
            input: true,
            tableView: false
        }
    ]    

  }
  }

  validateForm(submission: any, callback: any): void {
    // tslint:disable-next-line:no-null-keyword
    callback(null, submission);
  }

  submitForm(submission: any): void {
    console.log(submission);
    if (this.data && this.data['id']) {
      this.wABServiceService.edit_WAB_Services(submission, this.data['id'])
      .subscribe(result => {
          console.log(result);
      }, err => {
          alert(err);
      });
    } else {
      this.wABServiceService.WAB_Services(submission)
      .subscribe(result => {
          console.log(result);
      }, err => {
          alert(err);
      });
    }
  }

  
  cleanup(): void {
    throw new Error('Method not implemented.');
  }
}

 