"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var device_model_1 = require("./device.model");
var device_service_1 = require("./device.service");
var DevicePopupService = /** @class */ (function () {
    function DevicePopupService(modalService, router, deviceService) {
        this.modalService = modalService;
        this.router = router;
        this.deviceService = deviceService;
        this.ngbModalRef = null;
    }
    DevicePopupService.prototype.open = function (component, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isOpen = _this.ngbModalRef !== null;
            if (isOpen) {
                resolve(_this.ngbModalRef);
            }
            if (id) {
                _this.deviceService.find(id).subscribe(function (device) {
                    _this.ngbModalRef = _this.deviceModalRef(component, device);
                    resolve(_this.ngbModalRef);
                });
            }
            else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(function () {
                    _this.ngbModalRef = _this.deviceModalRef(component, new device_model_1.Device());
                    resolve(_this.ngbModalRef);
                }, 0);
            }
        });
    };
    DevicePopupService.prototype.deviceModalRef = function (component, device) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.device = device;
        modalRef.result.then(function (result) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.ngbModalRef = null;
        }, function (reason) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.ngbModalRef = null;
        });
        return modalRef;
    };
    DevicePopupService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            router_1.Router,
            device_service_1.DeviceService])
    ], DevicePopupService);
    return DevicePopupService;
}());
exports.DevicePopupService = DevicePopupService;
//# sourceMappingURL=device-popup.service.js.map