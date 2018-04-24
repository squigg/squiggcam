import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ConfirmOptions} from './confirm-options.interface';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) private data: ConfirmOptions) {
    }

    ngOnInit() {

    }

}
