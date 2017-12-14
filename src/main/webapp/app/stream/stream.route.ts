import {Route, Routes} from '@angular/router';

import {DeviceDetailComponent} from '../entities/device/device-detail.component';
import {UserRouteAccessService} from '../shared';
import {DeviceComponent} from '../entities/device/device.component';
import {StreamComponent} from './stream.component';

export const STREAM_ROUTE: Route = {
    path: '',
    component: StreamComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    }
};

export const streamRoute: Routes = [
    {
        path: 'stream/:dsn',
        component: StreamComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'DSN'
        },
        canActivate: [UserRouteAccessService]
    }
];
