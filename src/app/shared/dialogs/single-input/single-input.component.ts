import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {SingleInputOptions} from './single-input-options.interface';

@Component({
    selector: 'app-single-input',
    templateUrl: './single-input.component.html',
    styleUrls: ['./single-input.component.scss']
})
export class SingleInputComponent implements OnInit {

    private input: string;

    constructor(@Inject(MAT_DIALOG_DATA) private data: SingleInputOptions) {
    }

    ngOnInit() {
        this.input = this.data.inputValue;
    }

}
