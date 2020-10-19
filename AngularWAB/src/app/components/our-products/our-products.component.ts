
import * as _ from 'lodash';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { FormConfig } from 'src/interface/formio-config';
import { Student } from 'src/app/interface/student.interface';
import { OurProductsService } from 'src/app/formio.service.ts/our-products.service';
import { OurProductsServiceService } from 'src/app/sevices/our-products-service.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HelperService } from 'src/app/Helper/helper.service';

@Component({
    selector: 'app-our-products',
    templateUrl: './our-products.component.html',
    styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit {


    @Input('config') config;
    @ViewChild('template', { static: false }) _template;
    @ViewChild('ourProducts', { static: false }) _ourProducts;
    modalRef: BsModalRef;

    data = {};
    url: string = 'student';
    usersList: Array<Student>;
    productInfo = [];
    configData = {};
    formName = 'Create Plan';
    submissionData = {
        email: '',
        password: '',
        file: ''
    };
    selectedFiles: FileList;
    currentFile: File;
    progress = 0;
    message = '';
    path = '/assets/image/';
    fileInfos: Observable<any>;
    constructor(
        private ourProductsService: OurProductsService,
        private ourProductsServiceService: OurProductsServiceService,
        private modalService: BsModalService,
        private sanitizer: DomSanitizer,
        private helperService: HelperService
    ) { }

    formIoOptions = {
        submitMessage: '',
        disableAlerts: true,
        noAlerts: true
    };

    ngOnInit() {
        // this.getOurProducts();
 
    }

    getPath(plan): string {
        const path = this.path + `${plan.code}`;
        return path;
    }

    sanitizeImageUrl(imageName: string): SafeUrl {
        const imageUrl = this.path + imageName + '.jpg';
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }

    selectFile(event) {
        if (event.target.type === 'file') {
            this.submissionData[event.target.type] = event.target.files[0];
        } else {
            this.submissionData[event.target.type] = event.target.value;
        }
    }

    upload(): void {
        this.ourProductsServiceService.upload(this.submissionData)
            .subscribe(event => {

            },
            err => {
                this.progress = 0;
                this.message = 'Could not upload the file!';
                this.currentFile = undefined;
            });
    }



    // getOurProducts(): void {
    //     this.ourProductsServiceService.getOurProducts()
    //         .subscribe(result => {
    //             console.log(result);
    //             this.productInfo = result;
    //         }, err => {
    //             alert(err);
    //         })
    // }


    openModalWithClass(template: TemplateRef<any>, item?: any) {
        this.modalRef = this.modalService.show(
            template,
            Object.assign({}, { class: 'gray modal-lg' })
        );
    }

    deleteOurProducts1(item: any): void {
        this.configData = item;
        this.formName = `Delete Plan: ${item.planName}`;
    }

      deleteOurProducts(item: any): void {
        this.ourProductsServiceService.deleteOurProducts(item.id)
          .subscribe(result => {
            console.log(result);
          }, err => {
            alert(err);
          });
      }

    // editOurProducts(item: any): void {
    //     this.configData = {
    //         formName: this.formName,
    //         selectedItem: item
    //     };
    //     this.openModalWithClass(this._template, item);
    //     this.formName = `Edit Plan: ${item.planName}`;
    // }

    addOurProducts(): void {
        this.configData = {
            formName: this.formName
        };
        this.openModalWithClass(this._template);
    }

    submitForm(event: any): void {
        console.log(event);
        this.ourProductsService.submitForm(event.data);
    }
}
