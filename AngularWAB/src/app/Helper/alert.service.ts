import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable()
export class AlertService {

    alertPopup: BsModalRef = null;

    constructor(
        private modalService: BsModalService
    ) {

    }


    showInfo(title: string, message: string, command?: Function, subMessage?: string, args?: string): void {
        const config: AlertConfig = {
            type: AlertType.Info,
            title,
            message
        };
        config.command = data => {
            this.alertPopup = null;
            if (command) {
                command(data);
            }
        };
        if (this.alertPopup === null) {
        this.alertPopup = this.modalService.show(AlertComponent, { initialState: { options: config }, class: 'modal-md' });
        }
    }
}

export interface AlertConfig {
    type: AlertType;
    title: string;
    message: string;
    details?: string;
    command?: Function;
    data?: any;
}

export enum AlertType {
    Confirm,
    Error,
    Info,
    Warning
}
