"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("../../shared");
var admin_module_1 = require("../../admin/admin.module");
var _1 = require("./");
var ENTITY_STATES = _1.deviceRoute.concat(_1.devicePopupRoute);
var DevicePoolDeviceModule = /** @class */ (function () {
    function DevicePoolDeviceModule() {
    }
    DevicePoolDeviceModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.DevicePoolSharedModule,
                admin_module_1.DevicePoolAdminModule,
                router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
            ],
            declarations: [
                _1.DeviceComponent,
                _1.DeviceDetailComponent,
                _1.DeviceDialogComponent,
                _1.DeviceDeleteDialogComponent,
                _1.DevicePopupComponent,
                _1.DeviceDeletePopupComponent,
            ],
            entryComponents: [
                _1.DeviceComponent,
                _1.DeviceDialogComponent,
                _1.DevicePopupComponent,
                _1.DeviceDeleteDialogComponent,
                _1.DeviceDeletePopupComponent,
            ],
            providers: [
                _1.DeviceService,
                _1.DevicePopupService,
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DevicePoolDeviceModule);
    return DevicePoolDeviceModule;
}());
exports.DevicePoolDeviceModule = DevicePoolDeviceModule;
//# sourceMappingURL=device.module.js.map