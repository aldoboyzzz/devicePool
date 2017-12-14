"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Device = /** @class */ (function () {
    function Device(id, dsn, deviceType, buildVariant, pfm, isFree, ip, assignedToId, viewUrl) {
        this.id = id;
        this.dsn = dsn;
        this.deviceType = deviceType;
        this.buildVariant = buildVariant;
        this.pfm = pfm;
        this.isFree = isFree;
        this.ip = ip;
        this.assignedToId = assignedToId;
        this.viewUrl = viewUrl;
        this.isFree = false;
        this.viewUrl = 'http://' + ip + ':8080';
    }
    return Device;
}());
exports.Device = Device;
//# sourceMappingURL=device.model.js.map