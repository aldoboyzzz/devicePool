"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StreamComponent = /** @class */ (function () {
    function StreamComponent(principal, loginModalService, eventManager) {
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
    }
    StreamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
    };
    StreamComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    StreamComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    StreamComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    StreamComponent = __decorate([
        core_1.Component({
            selector: 'jhi-home',
            templateUrl: './stream.component.html',
            styleUrls: [
                'stream.scss'
            ]
        })
    ], StreamComponent);
    return StreamComponent;
}());
exports.StreamComponent = StreamComponent;
