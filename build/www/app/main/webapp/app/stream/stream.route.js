"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../shared");
var stream_component_1 = require("./stream.component");
exports.STREAM_ROUTE = {
    path: '',
    component: stream_component_1.StreamComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    }
};
exports.streamRoute = [
    {
        path: 'stream/:dsn',
        component: stream_component_1.StreamComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'DSN'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }
];
//# sourceMappingURL=stream.route.js.map