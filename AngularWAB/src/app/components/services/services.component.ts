import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Student } from 'src/app/interface/student.interface';
import { LoginService } from 'src/app/sevices/login.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @ViewChild('template', { static: false }) _template;
  modalRef: BsModalRef;

  url: string = 'student';
  usersList: Array<Student>;
  serviceInfo = [];
  configData = {};
  formName = 'Create Plan';
  constructor(
    private modalService: BsModalService,
    private loginService: LoginService
  ) { }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  ngOnInit() {
    this.getWabServiceInfo();
  }

  getWabServiceInfo(): void {
    this.loginService.getWebPlanInfo()
      .subscribe(result => {
        console.log(result);
        this.serviceInfo = result;
      }, err => {
        alert(err);
      })
  }

  deleteWabServiceInfo(item: any): void {
    this.configData = item;
    this.formName = `Delete Plan: ${item.planName}`;
  }

  editWabServiceInfo(item: any): void {
    this.configData = item;
    this.openModalWithClass(this._template);
    this.formName = `Edit Plan: ${item.planName}`;
  }

  addWabServiceInfo(): void {
    this.configData = {};
    this.openModalWithClass(this._template);
  }
}
