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
var http_1 = require("@angular/http");
var app_constants_1 = require("../../app.constants");
var device_model_1 = require("./device.model");
var shared_1 = require("../../shared");
var DeviceService = /** @class */ (function () {
    function DeviceService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/devices';
    }
    DeviceService.prototype.create = function (device) {
        var _this = this;
        var copy = this.convert(device);
        return this.http.post(this.resourceUrl, copy).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    DeviceService.prototype.update = function (device) {
        var _this = this;
        var copy = this.convert(device);
        return this.http.put(this.resourceUrl, copy).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    DeviceService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    DeviceService.prototype.query = function (req) {
        var _this = this;
        var options = shared_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map(function (res) { return _this.convertResponse(res); });
    };
    DeviceService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id);
    };
    DeviceService.prototype.convertResponse = function (res) {
        var jsonResponse = res.json();
        var result = [];
        for (var i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new shared_1.ResponseWrapper(res.headers, result, res.status);
    };
    /**
     * Convert a returned JSON object to Device.
     */
    DeviceService.prototype.convertItemFromServer = function (json) {
        var entity = Object.assign(new device_model_1.Device(), json);
        return entity;
    };
    /**
     * Convert a Device to a JSON which can be sent to the server.
     */
    DeviceService.prototype.convert = function (device) {
        var copy = Object.assign({}, device);
        return copy;
    };
    DeviceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DeviceService);
    return DeviceService;
}());
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map