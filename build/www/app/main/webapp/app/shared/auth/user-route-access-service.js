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
var _1 = require("../");
var login_modal_service_1 = require("../login/login-modal.service");
var state_storage_service_1 = require("./state-storage.service");
var UserRouteAccessService = /** @class */ (function () {
    function UserRouteAccessService(router, loginModalService, principal, stateStorageService) {
        this.router = router;
        this.loginModalService = loginModalService;
        this.principal = principal;
        this.stateStorageService = stateStorageService;
    }
    UserRouteAccessService.prototype.canActivate = function (route, state) {
        var authorities = route.data['authorities'];
        // We need to call the checkLogin / and so the principal.identity() function, to ensure,
        // that the client has a principal too, if they already logged in by the server.
        // This could happen on a page refresh.
        return this.checkLogin(authorities, state.url);
    };
    UserRouteAccessService.prototype.checkLogin = function (authorities, url) {
        var _this = this;
        var principal = this.principal;
        return Promise.resolve(principal.identity().then(function (account) {
            if (!authorities || authorities.length === 0) {
                return true;
            }
            if (account) {
                return principal.hasAnyAuthority(authorities).then(function (response) {
                    if (response) {
                        return true;
                    }
                    return false;
                });
            }
            _this.stateStorageService.storeUrl(url);
            _this.router.navigate(['accessdenied']).then(function () {
                // only show the login dialog, if the user hasn't logged in yet
                if (!account) {
                    _this.loginModalService.open();
                }
            });
            return false;
        }));
    };
    UserRouteAccessService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            login_modal_service_1.LoginModalService,
            _1.Principal,
            state_storage_service_1.StateStorageService])
    ], UserRouteAccessService);
    return UserRouteAccessService;
}());
exports.UserRouteAccessService = UserRouteAccessService;
//# sourceMappingURL=user-route-access-service.js.map