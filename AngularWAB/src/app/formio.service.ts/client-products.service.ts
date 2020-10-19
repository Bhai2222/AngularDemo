import { ClientProductsServiceService } from './../sevices/client-products-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientProductsService {
  data = {};
  constructor(
  private clientProductsServiceService: ClientProductsServiceService,
  
) {}
getForm(config?: any): any {
  return {
    components: [
      {
          label: 'Client Product Name',
          tableView: true,
          key: 'client_product_name',
          type: 'textfield',
          input: true,
          validate: {
            required: true
        },
      },
      {
        label: 'Client_Project_Name',
        tableView: true,
        key: 'client_project_name',
        type: 'textfield',
        input: true,
        validate: {
          required: true
      },
    },
      {
          label: 'Client Product Info',
          autoExpand: false,
          tableView: true,
          key: 'client_product_info',
          type: 'textarea',
          input: true,
          validate: {
            required: true
        },
      },
      // {
      //     type: 'button',
      //     label: 'Submit',
      //     key: 'submit',
      //     disableOnInvalid: true,
      //     input: true,
      //     tableView: false
      // }
  ]    }
}

validateForm(submission: any, callback: any): void {
  // tslint:disable-next-line:no-null-keyword
  callback(null, submission);
}

// submitForm(submission: any): void {
//   console.log(submission);
//   if (this.data && this.data['id']) {
//     this.clientProductsServiceService.editClientProducts(submission, this.data['id'])
//     .subscribe(result => {
//         console.log(result);
//     }, err => {
//         alert(err);
//     });
//   } else {
//     this.clientProductsServiceService.ClientProducts(submission)
//     .subscribe(result => {
//         console.log(result);
//     }, err => {
//         alert(err);
//     });
//   }
// }

cleanup(): void {
  throw new Error('Method not implemented.');
}

}
