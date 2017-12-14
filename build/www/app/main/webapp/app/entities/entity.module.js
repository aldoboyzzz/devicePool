"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var device_module_1 = require("./device/device.module");
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var DevicePoolEntityModule = /** @class */ (function () {
    function DevicePoolEntityModule() {
    }
    DevicePoolEntityModule = __decorate([
        core_1.NgModule({
            imports: [
                device_module_1.DevicePoolDeviceModule,
            ],
            declarations: [],
            entryComponents: [],
            providers: [],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DevicePoolEntityModule);
    return DevicePoolEntityModule;
}());
exports.DevicePoolEntityModule = DevicePoolEntityModule;
//# sourceMappingURL=entity.module.js.map