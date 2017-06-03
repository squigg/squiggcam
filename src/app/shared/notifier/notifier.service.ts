import {Injectable} from '@angular/core';
import {MdSnackBar, MdSnackBarConfig, MdSnackBarRef, SimpleSnackBar} from '@angular/material';

enum MessageType {
    Error,
    Success,
    Info
}

@Injectable()
export class NotifierService {

    snackBarRef: MdSnackBarRef<SimpleSnackBar>;

    constructor(private snackBar: MdSnackBar) {
    }

    error(message: string) {
        this.showNotification(MessageType.Error, message);
    }

    success(message: string) {
        this.showNotification(MessageType.Success, message);
    }

    info(message: string) {
        this.showNotification(MessageType.Info, message);
    }

    showNotification(type: MessageType, message: string) {

        const config: MdSnackBarConfig = {};
        config.extraClasses = [];

        this.snackBarRef = this.snackBar.open(message, null, config);

    }
}