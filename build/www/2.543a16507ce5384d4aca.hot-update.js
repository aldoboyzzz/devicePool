webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/device/device.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <h2> <span>Devices</span> <button class=\\\"btn btn-primary float-right jh-create-entity create-device\\\" [routerLink]=\\\"['/', { outlets: { popup: ['device-new'] } }]\\\"> <span class=\\\"fa fa-plus\\\"></span> <span> Refresh Devices </span> </button> </h2> <jhi-alert></jhi-alert> <div class=\\\"row\\\"> </div> <br/> <div class=\\\"table-responsive\\\" *ngIf=\\\"devices\\\"> <table class=\\\"table table-striped\\\"> <thead> <tr jhiSort [(predicate)]=\\\"predicate\\\" [(ascending)]=\\\"reverse\\\" [callback]=\\\"reset.bind(this)\\\"> <th jhiSortBy=\\\"id\\\"><span>ID</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"dsn\\\"><span>Dsn</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"deviceType\\\"><span>Device Type</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"buildVariant\\\"><span>Build Variant</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"pfm\\\"><span>Pfm</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"isFree\\\"><span>Is Free</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"assignedToId\\\"><span>Assigned To</span> <span class=\\\"fa fa-sort\\\"></span></th> <th></th> </tr> </thead> <tbody infinite-scroll (scrolled)=\\\"loadPage(page + 1)\\\" [infiniteScrollDisabled]=\\\"page >= links['last']\\\" [infiniteScrollDistance]=\\\"0\\\"> <tr *ngFor=\\\"let device of devices ;trackBy: trackId\\\"> <td><a [routerLink]=\\\"['../device', device.id ]\\\">{{device.id}}</a></td> <td>{{device.dsn}}</td> <td>{{device.deviceType}}</td> <td>{{device.buildVariant}}</td> <td>{{device.pfm}}</td> <td>{{device.isFree}}</td> <td> {{device.assignedToId}} </td> <td class=\\\"text-right\\\"> <div class=\\\"btn-group flex-btn-group-container\\\"> <a class=\\\"d-none d-md-inline\\\" href=\\\"http://192.168.34.170:8080\\\" target=\\\"_blank\\\">View Device Screen</a> <button type=\\\"submit\\\" [routerLink]=\\\"['../device', device.id ]\\\" class=\\\"btn btn-info btn-sm\\\"> <span class=\\\"fa fa-eye\\\"></span> <span class=\\\"d-none d-md-inline\\\">View Device Details</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'device/'+ device.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary btn-sm\\\"> <span class=\\\"fa fa-pencil\\\"></span> <span class=\\\"d-none d-md-inline\\\">Edit</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'device/'+ device.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-danger btn-sm\\\"> <span class=\\\"fa fa-remove\\\"></span> <span class=\\\"d-none d-md-inline\\\">Delete</span> </button> </div> </td> </tr> </tbody> </table> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RldmljZS9kZXZpY2UuY29tcG9uZW50Lmh0bWw/NmY0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxSkFBcUosV0FBVyx3QkFBd0IsRUFBRSw4bkNBQThuQyx3RUFBd0UsV0FBVyxnQkFBZ0IsWUFBWSxZQUFZLG1CQUFtQixZQUFZLHFCQUFxQixZQUFZLFlBQVksWUFBWSxlQUFlLGFBQWEscUJBQXFCLDJiQUEyYixXQUFXLHVDQUF1QyxFQUFFLHNNQUFzTSxXQUFXLHlDQUF5QyxFQUFFIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9kZXZpY2UvZGV2aWNlLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxoMj4gPHNwYW4+RGV2aWNlczwvc3Bhbj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGpoLWNyZWF0ZS1lbnRpdHkgY3JlYXRlLWRldmljZVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6IFsnZGV2aWNlLW5ldyddIH0gfV1cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9zcGFuPiA8c3Bhbj4gUmVmcmVzaCBEZXZpY2VzIDwvc3Bhbj4gPC9idXR0b24+IDwvaDI+IDxqaGktYWxlcnQ+PC9qaGktYWxlcnQ+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDwvZGl2PiA8YnIvPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiZGV2aWNlc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyIGpoaVNvcnQgWyhwcmVkaWNhdGUpXT1cXFwicHJlZGljYXRlXFxcIiBbKGFzY2VuZGluZyldPVxcXCJyZXZlcnNlXFxcIiBbY2FsbGJhY2tdPVxcXCJyZXNldC5iaW5kKHRoaXMpXFxcIj4gPHRoIGpoaVNvcnRCeT1cXFwiaWRcXFwiPjxzcGFuPklEPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImRzblxcXCI+PHNwYW4+RHNuPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImRldmljZVR5cGVcXFwiPjxzcGFuPkRldmljZSBUeXBlPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImJ1aWxkVmFyaWFudFxcXCI+PHNwYW4+QnVpbGQgVmFyaWFudDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJwZm1cXFwiPjxzcGFuPlBmbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJpc0ZyZWVcXFwiPjxzcGFuPklzIEZyZWU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiYXNzaWduZWRUb0lkXFxcIj48c3Bhbj5Bc3NpZ25lZCBUbzwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGg+PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5IGluZmluaXRlLXNjcm9sbCAoc2Nyb2xsZWQpPVxcXCJsb2FkUGFnZShwYWdlICsgMSlcXFwiIFtpbmZpbml0ZVNjcm9sbERpc2FibGVkXT1cXFwicGFnZSA+PSBsaW5rc1snbGFzdCddXFxcIiBbaW5maW5pdGVTY3JvbGxEaXN0YW5jZV09XFxcIjBcXFwiPiA8dHIgKm5nRm9yPVxcXCJsZXQgZGV2aWNlIG9mIGRldmljZXMgO3RyYWNrQnk6IHRyYWNrSWRcXFwiPiA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uL2RldmljZScsIGRldmljZS5pZCBdXFxcIj57e2RldmljZS5pZH19PC9hPjwvdGQ+IDx0ZD57e2RldmljZS5kc259fTwvdGQ+IDx0ZD57e2RldmljZS5kZXZpY2VUeXBlfX08L3RkPiA8dGQ+e3tkZXZpY2UuYnVpbGRWYXJpYW50fX08L3RkPiA8dGQ+e3tkZXZpY2UucGZtfX08L3RkPiA8dGQ+e3tkZXZpY2UuaXNGcmVlfX08L3RkPiA8dGQ+IHt7ZGV2aWNlLmFzc2lnbmVkVG9JZH19IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBmbGV4LWJ0bi1ncm91cC1jb250YWluZXJcXFwiPiA8YSBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIiBocmVmPVxcXCJodHRwOi8vMTkyLjE2OC4zNC4xNzA6ODA4MFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlZpZXcgRGV2aWNlIFNjcmVlbjwvYT4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi9kZXZpY2UnLCBkZXZpY2UuaWQgXVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tc21cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJkLW5vbmUgZC1tZC1pbmxpbmVcXFwiPlZpZXcgRGV2aWNlIERldGFpbHM8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdkZXZpY2UvJysgZGV2aWNlLmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIj5FZGl0PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnZGV2aWNlLycrIGRldmljZS5pZCArICcvZGVsZXRlJ30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tc21cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcmVtb3ZlXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJkLW5vbmUgZC1tZC1pbmxpbmVcXFwiPkRlbGV0ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9kZXZpY2UvZGV2aWNlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGV2aWNlL2RldmljZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/device/device.component.html\n");

/***/ })

})