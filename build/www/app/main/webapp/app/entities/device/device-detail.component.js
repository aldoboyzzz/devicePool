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
var ng_jhipster_1 = require("ng-jhipster");
var device_service_1 = require("./device.service");
var DeviceDetailComponent = /** @class */ (function () {
    function DeviceDetailComponent(eventManager, deviceService, route) {
        this.eventManager = eventManager;
        this.deviceService = deviceService;
        this.route = route;
    }
    DeviceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
        this.registerChangeInDevices();
    };
    DeviceDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.deviceService.find(id).subscribe(function (device) {
            _this.device = device;
        });
    };
    DeviceDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    DeviceDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    };
    DeviceDetailComponent.prototype.registerChangeInDevices = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('deviceListModification', function (response) { return _this.load(_this.device.id); });
    };
    DeviceDetailComponent = __decorate([
        core_1.Component({
            selector: 'jhi-device-detail',
            templateUrl: './device-detail.component.html'
        }),
        __metadata("design:paramtypes", [ng_jhipster_1.JhiEventManager,
            device_service_1.DeviceService,
            router_1.ActivatedRoute])
    ], DeviceDetailComponent);
    return DeviceDetailComponent;
}());
exports.DeviceDetailComponent = DeviceDetailComponent;
//# sourceMappingURL=device-detail.component.js.map