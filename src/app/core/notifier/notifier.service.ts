import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar} from '@angular/material';

enum MessageType {
    Error,
    Success,
    Info
}

const typeClasses = ['mat-warn', 'mat-success', 'mat-accent'];

@Injectable()
export class NotifierService {

    snackBarRef: MatSnackBarRef<SimpleSnackBar>;

    constructor(private snackBar: MatSnackBar) {
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

        const config: MatSnackBarConfig = {
            panelClass: ['snackbar', typeClasses[type]],
            duration: 3000
        };

        this.snackBarRef = this.snackBar.open(message, null, config);

    }
}
