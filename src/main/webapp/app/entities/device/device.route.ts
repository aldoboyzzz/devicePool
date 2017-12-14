import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { DeviceComponent } from './device.component';
import { DeviceDetailComponent } from './device-detail.component';
import { DevicePopupComponent } from './device-dialog.component';
import { DeviceDeletePopupComponent } from './device-delete-dialog.component';
import {StreamComponent} from '../../stream/stream.component';

export const deviceRoute: Routes = [
    {
        path: 'device',
        component: DeviceComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Devices'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'device/:id',
        component: DeviceDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Devices'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const devicePopupRoute: Routes = [
    {
        path: 'device-new',
        component: DevicePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Devices'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'device/:id/edit',
        component: DevicePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Devices'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'device/:id/viewScreen',
        component: StreamComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'DSN'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'device/:id/delete',
        component: DeviceDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Devices'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
