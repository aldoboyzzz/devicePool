"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var DevicePoolTestModule = /** @class */ (function () {
    function DevicePoolTestModule() {
    }
    DevicePoolTestModule = __decorate([
        core_1.NgModule({
            providers: [
                testing_1.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http,
                    useFactory: function (backendInstance, defaultOptions) {
                        return new http_1.Http(backendInstance, defaultOptions);
                    },
                    deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
                }
            ]
        })
    ], DevicePoolTestModule);
    return DevicePoolTestModule;
}());
exports.DevicePoolTestModule = DevicePoolTestModule;
//# sourceMappingURL=test.module.js.map