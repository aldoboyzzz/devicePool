webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/device/device.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <h2> <span>Devices</span> </h2> <jhi-alert></jhi-alert> <div class=\\\"row\\\"> </div> <br/> <div class=\\\"table-responsive\\\" *ngIf=\\\"devices\\\"> <table class=\\\"table table-striped\\\"> <thead> <tr jhiSort [(predicate)]=\\\"predicate\\\" [(ascending)]=\\\"reverse\\\" [callback]=\\\"reset.bind(this)\\\"> <th jhiSortBy=\\\"id\\\"><span>ID</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"dsn\\\"><span>Dsn</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"deviceType\\\"><span>Device Type</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"buildVariant\\\"><span>Build Variant</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"pfm\\\"><span>Pfm</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"isFree\\\"><span>Is Free</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"assignedToId\\\"><span>Assigned To</span> <span class=\\\"fa fa-sort\\\"></span></th> <th></th> </tr> </thead> <tbody infinite-scroll (scrolled)=\\\"loadPage(page + 1)\\\" [infiniteScrollDisabled]=\\\"page >= links['last']\\\" [infiniteScrollDistance]=\\\"0\\\"> <tr *ngFor=\\\"let device of devices ;trackBy: trackId\\\"> <td><a [routerLink]=\\\"['../device', device.id ]\\\">{{device.id}}</a></td> <td>{{device.dsn}}</td> <td>{{device.deviceType}}</td> <td>{{device.buildVariant}}</td> <td>{{device.pfm}}</td> <td>{{device.isFree}}</td> <td> {{device.assignedToId}} </td> <td class=\\\"text-right\\\"> <div class=\\\"btn-group flex-btn-group-container\\\"> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'device/'+ device.id + '/viewScreen'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary btn-sm\\\"> <span class=\\\"fa fa-pencil\\\"></span> <span class=\\\"d-none d-md-inline\\\">View Screen</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['../device', device.id ]\\\" class=\\\"btn btn-info btn-sm\\\"> <span class=\\\"fa fa-eye\\\"></span> <span class=\\\"d-none d-md-inline\\\">View Device Details</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'device/'+ device.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary btn-sm\\\"> <span class=\\\"fa fa-pencil\\\"></span> <span class=\\\"d-none d-md-inline\\\">Acquire Device</span> </button> </div> </td> </tr> </tbody> </table> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RldmljZS9kZXZpY2UuY29tcG9uZW50Lmh0bWw/NmY0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrbENBQStsQyx3RUFBd0UsV0FBVyxnQkFBZ0IsWUFBWSxZQUFZLG1CQUFtQixZQUFZLHFCQUFxQixZQUFZLFlBQVksWUFBWSxlQUFlLGFBQWEscUJBQXFCLGtJQUFrSSxXQUFXLDZDQUE2QyxFQUFFLHlaQUF5WixXQUFXLHVDQUF1QyxFQUFFIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9kZXZpY2UvZGV2aWNlLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxoMj4gPHNwYW4+RGV2aWNlczwvc3Bhbj4gPC9oMj4gPGpoaS1hbGVydD48L2poaS1hbGVydD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPC9kaXY+IDxici8+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJkZXZpY2VzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHIgamhpU29ydCBbKHByZWRpY2F0ZSldPVxcXCJwcmVkaWNhdGVcXFwiIFsoYXNjZW5kaW5nKV09XFxcInJldmVyc2VcXFwiIFtjYWxsYmFja109XFxcInJlc2V0LmJpbmQodGhpcylcXFwiPiA8dGggamhpU29ydEJ5PVxcXCJpZFxcXCI+PHNwYW4+SUQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiZHNuXFxcIj48c3Bhbj5Ec248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiZGV2aWNlVHlwZVxcXCI+PHNwYW4+RGV2aWNlIFR5cGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiYnVpbGRWYXJpYW50XFxcIj48c3Bhbj5CdWlsZCBWYXJpYW50PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcInBmbVxcXCI+PHNwYW4+UGZtPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImlzRnJlZVxcXCI+PHNwYW4+SXMgRnJlZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJhc3NpZ25lZFRvSWRcXFwiPjxzcGFuPkFzc2lnbmVkIFRvPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aD48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHkgaW5maW5pdGUtc2Nyb2xsIChzY3JvbGxlZCk9XFxcImxvYWRQYWdlKHBhZ2UgKyAxKVxcXCIgW2luZmluaXRlU2Nyb2xsRGlzYWJsZWRdPVxcXCJwYWdlID49IGxpbmtzWydsYXN0J11cXFwiIFtpbmZpbml0ZVNjcm9sbERpc3RhbmNlXT1cXFwiMFxcXCI+IDx0ciAqbmdGb3I9XFxcImxldCBkZXZpY2Ugb2YgZGV2aWNlcyA7dHJhY2tCeTogdHJhY2tJZFxcXCI+IDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnLi4vZGV2aWNlJywgZGV2aWNlLmlkIF1cXFwiPnt7ZGV2aWNlLmlkfX08L2E+PC90ZD4gPHRkPnt7ZGV2aWNlLmRzbn19PC90ZD4gPHRkPnt7ZGV2aWNlLmRldmljZVR5cGV9fTwvdGQ+IDx0ZD57e2RldmljZS5idWlsZFZhcmlhbnR9fTwvdGQ+IDx0ZD57e2RldmljZS5wZm19fTwvdGQ+IDx0ZD57e2RldmljZS5pc0ZyZWV9fTwvdGQ+IDx0ZD4ge3tkZXZpY2UuYXNzaWduZWRUb0lkfX0gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4gPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGZsZXgtYnRuLWdyb3VwLWNvbnRhaW5lclxcXCI+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ2RldmljZS8nKyBkZXZpY2UuaWQgKyAnL3ZpZXdTY3JlZW4nfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJkLW5vbmUgZC1tZC1pbmxpbmVcXFwiPlZpZXcgU2NyZWVuPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi9kZXZpY2UnLCBkZXZpY2UuaWQgXVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tc21cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJkLW5vbmUgZC1tZC1pbmxpbmVcXFwiPlZpZXcgRGV2aWNlIERldGFpbHM8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdkZXZpY2UvJysgZGV2aWNlLmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIj5BY3F1aXJlIERldmljZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9kZXZpY2UvZGV2aWNlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGV2aWNlL2RldmljZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/device/device.component.html\n");

/***/ })

})