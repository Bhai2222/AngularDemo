import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import * as _ from 'lodash';
import { FormConfig } from 'src/interface/formio-config';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { WebInfoService } from 'src/app/formio.service.ts/web-info.service';
import { WebService } from 'src/app/sevices/web.service';
 
@Component({
  selector: 'app-web-info',
  templateUrl: './web-info.component.html',
  styleUrls: ['./web-info.component.css']
})
export class WebInfoComponent implements OnInit {
  @Input('config') config;
  modalRef: BsModalRef;
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
    private webInfoService: WebInfoService,
    private modalService: BsModalService,
    private webService: WebService,

  ) { }

  ngOnInit() {
    this.showLoginForm();
  }

  onSignUpFormChange(): void {

  }

  onFormLoad(): void {

  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  showLoginForm(): void {
    console.log(this.config);
    if (!_.isEmpty(this.config)) {
      this.webInfoService.data = this.config;
      this.formIo.submission.data = this.config;
    }
    this.formIo.form = this.webInfoService.getForm();
  }

  submitForm(event: any): void {
    console.log(event);
    this.webInfoService.submitForm(event.data, undefined);
  }
}
