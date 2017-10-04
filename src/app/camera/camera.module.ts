import {NgModule} from '@angular/core';
import {CameraComponent} from './camera.component';
import {CameraService} from './camera.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    providers: [CameraService],
    declarations: [CameraComponent],
    exports: [CameraComponent]
})
export class CameraModule {
}
