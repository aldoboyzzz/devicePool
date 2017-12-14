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
var shared_1 = require("../../shared");
var DeviceDialogComponent = /** @class */ (function () {
    function DeviceDialogComponent(activeModal, jhiAlertService, deviceService, userService, eventManager) {
        this.activeModal = activeModal;
        this.jhiAlertService = jhiAlertService;
        this.deviceService = deviceService;
        this.userService = userService;
        this.eventManager = eventManager;
    }
    DeviceDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.userService.query()
            .subscribe(function (res) { _this.users = res.json; }, function (res) { return _this.onError(res.json); });
    };
    DeviceDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    DeviceDialogComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.device.id !== undefined) {
            this.subscribeToSaveResponse(this.deviceService.update(this.device));
        }
        else {
            this.subscribeToSaveResponse(this.deviceService.create(this.device));
        }
    };
    DeviceDialogComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) {
            return _this.onSaveSuccess(res);
        }, function (res) { return _this.onSaveError(); });
    };
    DeviceDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'deviceListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    DeviceDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    DeviceDialogComponent.prototype.onError = function (error) {
        this.jhiAlertService.error(error.message, null, null);
    };
    DeviceDialogComponent.prototype.trackUserById = function (index, item) {
        return item.id;
    };
    DeviceDialogComponent.prototype.trackUserByLogin = function (index, item) {
        return item.login;
    };
    DeviceDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-device-dialog',
            templateUrl: './device-dialog.component.html'
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
            ng_jhipster_1.JhiAlertService,
            device_service_1.DeviceService,
            shared_1.UserService,
            ng_jhipster_1.JhiEventManager])
    ], DeviceDialogComponent);
    return DeviceDialogComponent;
}());
exports.DeviceDialogComponent = DeviceDialogComponent;
var DevicePopupComponent = /** @class */ (function () {
    function DevicePopupComponent(route, devicePopupService) {
        this.route = route;
        this.devicePopupService = devicePopupService;
    }
    DevicePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.devicePopupService
                    .open(DeviceDialogComponent, params['id']);
            }
            else {
                _this.devicePopupService
                    .open(DeviceDialogComponent);
            }
        });
    };
    DevicePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    DevicePopupComponent = __decorate([
        core_1.Component({
            selector: 'jhi-device-popup',
            template: ''
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            device_popup_service_1.DevicePopupService])
    ], DevicePopupComponent);
    return DevicePopupComponent;
}());
exports.DevicePopupComponent = DevicePopupComponent;
//# sourceMappingURL=device-dialog.component.js.map