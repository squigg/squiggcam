import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {SingleInputOptions} from './single-input-options.interface';

@Component({
    selector: 'app-single-input',
    templateUrl: './single-input.component.html',
    styleUrls: ['./single-input.component.scss']
})
export class SingleInputComponent implements OnInit {

    private input: string;

    constructor(@Inject(MD_DIALOG_DATA) private data: SingleInputOptions) {
    }

    ngOnInit() {
        this.input = this.data.inputValue;
    }

}
