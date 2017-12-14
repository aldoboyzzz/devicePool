"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../../shared");
var device_component_1 = require("./device.component");
var device_detail_component_1 = require("./device-detail.component");
var device_dialog_component_1 = require("./device-dialog.component");
var device_delete_dialog_component_1 = require("./device-delete-dialog.component");
var stream_component_1 = require("../../stream/stream.component");
exports.deviceRoute = [
    {
        path: 'device',
        component: device_component_1.DeviceComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Devices'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }, {
        path: 'device/:id',
        component: device_detail_component_1.DeviceDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Devices'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }
];
exports.devicePopupRoute = [
    {
        path: 'device-new',
        component: device_dialog_component_1.DevicePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Devices'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'device/:id/edit',
        component: device_dialog_component_1.DevicePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Devices'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'device/:id/viewScreen',
        component: stream_component_1.StreamComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'DSN'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'device/:id/delete',
        component: device_delete_dialog_component_1.DeviceDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Devices'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    }
];
//# sourceMappingURL=device.route.js.map