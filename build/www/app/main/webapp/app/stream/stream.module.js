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
var shared_1 = require("../shared");
var stream_1 = require("./stream");
var DevicePoolStreamModule = /** @class */ (function () {
    function DevicePoolStreamModule() {
    }
    DevicePoolStreamModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.DevicePoolSharedModule,
                router_1.RouterModule.forRoot([stream_1.STREAM_ROUTE], { useHash: true })
            ],
            declarations: [
                stream_1.StreamComponent,
            ],
            entryComponents: [],
            providers: [],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DevicePoolStreamModule);
    return DevicePoolStreamModule;
}());
exports.DevicePoolStreamModule = DevicePoolStreamModule;
//# sourceMappingURL=stream.module.js.map