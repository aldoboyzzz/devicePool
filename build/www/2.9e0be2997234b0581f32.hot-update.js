webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/stream/stream.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar shared_1 = __webpack_require__(\"./src/main/webapp/app/shared/index.ts\");\r\nvar stream_component_1 = __webpack_require__(\"./src/main/webapp/app/stream/stream.component.ts\");\r\nexports.STREAM_ROUTE = {\r\n    path: '',\r\n    component: stream_component_1.StreamComponent,\r\n    data: {\r\n        authorities: [],\r\n        pageTitle: 'Welcome, Java Hipster!'\r\n    }\r\n};\r\nexports.streamRoute = [\r\n    {\r\n        path: 'stream/:dsn',\r\n        component: stream_component_1.StreamComponent,\r\n        data: {\r\n            authorities: ['ROLE_USER'],\r\n            pageTitle: 'Devices'\r\n        },\r\n        canActivate: [shared_1.UserRouteAccessService]\r\n    }\r\n];\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3N0cmVhbS9zdHJlYW0ucm91dGUudHM/MzYxMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDRFQUFpRDtBQUVqRCxpR0FBbUQ7QUFFdEMsb0JBQVksR0FBVTtJQUMvQixJQUFJLEVBQUUsRUFBRTtJQUNSLFNBQVMsRUFBRSxrQ0FBZTtJQUMxQixJQUFJLEVBQUU7UUFDRixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSx3QkFBd0I7S0FDdEM7Q0FDSixDQUFDO0FBRVcsbUJBQVcsR0FBVztJQUMvQjtRQUNJLElBQUksRUFBRSxhQUFhO1FBQ25CLFNBQVMsRUFBRSxrQ0FBZTtRQUMxQixJQUFJLEVBQUU7WUFDRixXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDMUIsU0FBUyxFQUFFLFNBQVM7U0FDdkI7UUFDRCxXQUFXLEVBQUUsQ0FBQywrQkFBc0IsQ0FBQztLQUN4QztDQUNKLENBQUMiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3N0cmVhbS9zdHJlYW0ucm91dGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlLCBSb3V0ZXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7RGV2aWNlRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuLi9lbnRpdGllcy9kZXZpY2UvZGV2aWNlLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHtEZXZpY2VDb21wb25lbnR9IGZyb20gJy4uL2VudGl0aWVzL2RldmljZS9kZXZpY2UuY29tcG9uZW50JztcbmltcG9ydCB7U3RyZWFtQ29tcG9uZW50fSBmcm9tICcuL3N0cmVhbS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgU1RSRUFNX1JPVVRFOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFN0cmVhbUNvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICAgICAgcGFnZVRpdGxlOiAnV2VsY29tZSwgSmF2YSBIaXBzdGVyISdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc3RyZWFtUm91dGU6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICdzdHJlYW0vOmRzbicsXG4gICAgICAgIGNvbXBvbmVudDogU3RyZWFtQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhdXRob3JpdGllczogWydST0xFX1VTRVInXSxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogJ0RldmljZXMnXG4gICAgICAgIH0sXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbiAgICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3N0cmVhbS9zdHJlYW0ucm91dGUudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/stream/stream.route.ts\n");

/***/ })

})