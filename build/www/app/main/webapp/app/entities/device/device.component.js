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
var ng_jhipster_1 = require("ng-jhipster");
var device_service_1 = require("./device.service");
var shared_1 = require("../../shared");
var DeviceComponent = /** @class */ (function () {
    function DeviceComponent(deviceService, jhiAlertService, eventManager, parseLinks, principal) {
        this.deviceService = deviceService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principal = principal;
        this.devices = [];
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = true;
    }
    DeviceComponent.prototype.loadAll = function () {
        var _this = this;
        this.deviceService.query({
            page: this.page,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json, res.headers); }, function (res) { return _this.onError(res.json); });
    };
    DeviceComponent.prototype.reset = function () {
        this.page = 0;
        this.devices = [];
        this.loadAll();
    };
    DeviceComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.loadAll();
    };
    DeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInDevices();
    };
    DeviceComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    DeviceComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    DeviceComponent.prototype.registerChangeInDevices = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('deviceListModification', function (response) { return _this.reset(); });
    };
    DeviceComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    DeviceComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        for (var i = 0; i < data.length; i++) {
            this.devices.push(data[i]);
        }
    };
    DeviceComponent.prototype.onError = function (error) {
        this.jhiAlertService.error(error.message, null, null);
    };
    DeviceComponent.prototype.viewStream = function (viewUrl) {
        window.location.href = viewUrl;
    };
    DeviceComponent = __decorate([
        core_1.Component({
            selector: 'jhi-device',
            templateUrl: './device.component.html'
        }),
        __metadata("design:paramtypes", [device_service_1.DeviceService,
            ng_jhipster_1.JhiAlertService,
            ng_jhipster_1.JhiEventManager,
            ng_jhipster_1.JhiParseLinks,
            shared_1.Principal])
    ], DeviceComponent);
    return DeviceComponent;
}());
exports.DeviceComponent = DeviceComponent;
//# sourceMappingURL=device.component.js.map