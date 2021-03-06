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
var ng_jhipster_1 = require("ng-jhipster");
var device_popup_service_1 = require("./device-popup.service");
var device_service_1 = require("./device.service");
var DeviceDeleteDialogComponent = /** @class */ (function () {
    function DeviceDeleteDialogComponent(deviceService, activeModal, eventManager) {
        this.deviceService = deviceService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    DeviceDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    DeviceDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.deviceService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'deviceListModification',
                content: 'Deleted an device'
            });
            _this.activeModal.dismiss(true);
        });
    };
    DeviceDeleteDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-device-delete-dialog',
            templateUrl: './device-delete-dialog.component.html'
        }),
        __metadata("design:paramtypes", [device_service_1.DeviceService,
            ng_bootstrap_1.NgbActiveModal,
            ng_jhipster_1.JhiEventManager])
    ], DeviceDeleteDialogComponent);
    return DeviceDeleteDialogComponent;
}());
exports.DeviceDeleteDialogComponent = DeviceDeleteDialogComponent;
var DeviceDeletePopupComponent = /** @class */ (function () {
    function DeviceDeletePopupComponent(route, devicePopupService) {
        this.route = route;
        this.devicePopupService = devicePopupService;
    }
    DeviceDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.devicePopupService
                .open(DeviceDeleteDialogComponent, params['id']);
        });
    };
    DeviceDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    DeviceDeletePopupComponent = __decorate([
        core_1.Component({
            selector: 'jhi-device-delete-popup',
            template: ''
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            device_popup_service_1.DevicePopupService])
    ], DeviceDeletePopupComponent);
    return DeviceDeletePopupComponent;
}());
exports.DeviceDeletePopupComponent = DeviceDeletePopupComponent;
//# sourceMappingURL=device-delete-dialog.component.js.map