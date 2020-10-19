import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertType } from 'src/app/Helper/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

  options: any;
  buttons: any = []
  constructor(
    // private translate: TranslateService
    private bsModalRef: BsModalRef
  ) {
  }

  ngOnInit(): void {
    console.log(this.options);

    switch (this.options.type) {

      case AlertType.Confirm:
        this.buttons = [
          {
            name: 'Yes',
            css: 'btn btn-primary',
            action: ActionType.Submit
          },
          {
            name: 'No',
            css: 'btn btn-warning',
            action: ActionType.Cancel
          }
        ];
        break;

      case AlertType.Error:
        this.buttons[0].css = 'btn btn-danger';
        break;

      case AlertType.Info:
        this.buttons = [
          {
            name: 'Ok',
            css: 'btn btn-primary',
            action: ActionType.Cancel
          },
        ];
        break;

      case AlertType.Warning:
        this.buttons = [
          {
            name: 'Ok',
            css: 'btn btn-primary',
            action: ActionType.Cancel
          },
        ];
    }


  }

  handleCommand(item?: any): void {
    if (this.options.command) {
      this.bsModalRef.hide();
      this.options.command(true);
      // if (item) {
      //   if (item.action === 'Submit') {
      //     this.options.command(true);
      //   } else {
      //     this.options.command(false);
      //   }
      // } else {
      //   this.options.command();
      // }
    }
    this.bsModalRef.hide();
  }



}

export enum ActionType {
  Submit,
  Cancel
}