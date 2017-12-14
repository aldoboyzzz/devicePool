import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DevicePoolSharedModule } from '../shared';

import { STREAM_ROUTE, StreamComponent } from './stream';

@NgModule({
    imports: [
        DevicePoolSharedModule,
        RouterModule.forRoot([ STREAM_ROUTE ], { useHash: true })
    ],
    declarations: [
        StreamComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DevicePoolStreamModule {}
