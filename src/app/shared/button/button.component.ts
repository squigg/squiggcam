import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmComponent} from '../dialogs/confirm/confirm.component';
import {ConfirmOptions} from '../dialogs/confirm/confirm-options.interface';
import {SingleInputOptions} from '../dialogs/single-input/single-input-options.interface';
import {SingleInputComponent} from '../dialogs/single-input/single-input.component';
import * as _ from 'lodash';

const defaultConfirmOptions: ConfirmOptions = {
    title: 'Confirm Action',
    message: 'Are you sure?',
    cancelButton: 'Cancel',
    confirmButton: 'OK',
};

const defaultSingleInputOptions: SingleInputOptions = {
    cancelButton: 'Cancel',
    okButton: 'OK',
    title: 'Input Required',
};

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() color: string;
    @Input() confirm: boolean;
    @Input() confirmOptions: ConfirmOptions;
    @Input() singleInput: boolean;
    @Input() singleInputOptions: SingleInputOptions;

    @Output() onClick = new EventEmitter<string>();

    private confirmDialogRef: MatDialogRef<ConfirmComponent, string>;
    private singleInputDialogRef: MatDialogRef<SingleInputComponent, string>;

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {

    }

    click(): void {
        if (this.confirm) {
            this.showConfirmDialog();
        } else if (this.singleInput) {
            this.showSingleInputDialog();
        } else {
            this.onClick.emit();
        }
    }

    showConfirmDialog() {
        this.confirmDialogRef = this.dialog.open(ConfirmComponent, {
            data: _.assign(defaultConfirmOptions, this.confirmOptions)
        });
        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result === 'true') {
                this.onClick.emit();
            }
        });
    }

    showSingleInputDialog() {
        this.singleInputDialogRef = this.dialog.open(SingleInputComponent, {
            data: _.assign(defaultSingleInputOptions, this.singleInputOptions)
        });
        this.singleInputDialogRef.afterClosed().subscribe(result => {
            if (result !== 'false') {
                this.onClick.emit(result);
            }
        });
    }

}
