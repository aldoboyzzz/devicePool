webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/device/device-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" id=\\\"myDeviceLabel\\\">Create or edit a Device</h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!device.id\\\"> <label for=\\\"id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" [(ngModel)]=\\\"device.id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_dsn\\\">Dsn</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"dsn\\\" id=\\\"field_dsn\\\" [(ngModel)]=\\\"device.dsn\\\" required/> <div [hidden]=\\\"!(editForm.controls.dsn?.dirty && editForm.controls.dsn?.invalid)\\\"> <small class=\\\"form-text text-danger\\\" [hidden]=\\\"!editForm.controls.dsn?.errors?.required\\\"> This field is required. </small> </div> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_deviceType\\\">Device Type</label> <select class=\\\"form-control\\\" name=\\\"deviceType\\\" [(ngModel)]=\\\"device.deviceType\\\" id=\\\"field_deviceType\\\" required> <option value=\\\"BUELLER\\\">BUELLER</option> <option value=\\\"MONTOYA\\\">MONTOYA</option> <option value=\\\"SLOANE\\\">SLOANE</option> <option value=\\\"TANK\\\">TANK</option> <option value=\\\"NEEDLE\\\">NEEDLE</option> <option value=\\\"STARK\\\">STARK</option> <option value=\\\"MARGO\\\">MARGO</option> </select> <div [hidden]=\\\"!(editForm.controls.deviceType?.dirty && editForm.controls.deviceType?.invalid)\\\"> <small class=\\\"form-text text-danger\\\" [hidden]=\\\"!editForm.controls.deviceType?.errors?.required\\\"> This field is required. </small> </div> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_buildVariant\\\">Build Variant</label> <select class=\\\"form-control\\\" name=\\\"buildVariant\\\" [(ngModel)]=\\\"device.buildVariant\\\" id=\\\"field_buildVariant\\\" required> <option value=\\\"USER\\\">USER</option> <option value=\\\"USERDEBUG\\\">USERDEBUG</option> </select> <div [hidden]=\\\"!(editForm.controls.buildVariant?.dirty && editForm.controls.buildVariant?.invalid)\\\"> <small class=\\\"form-text text-danger\\\" [hidden]=\\\"!editForm.controls.buildVariant?.errors?.required\\\"> This field is required. </small> </div> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_pfm\\\">Pfm</label> <select class=\\\"form-control\\\" name=\\\"pfm\\\" [(ngModel)]=\\\"device.pfm\\\" id=\\\"field_pfm\\\" required> <option value=\\\"US\\\">US</option> <option value=\\\"GB\\\">GB</option> <option value=\\\"IN\\\">IN</option> <option value=\\\"DE\\\">DE</option> <option value=\\\"AT\\\">AT</option> <option value=\\\"JP\\\">JP</option> </select> <div [hidden]=\\\"!(editForm.controls.pfm?.dirty && editForm.controls.pfm?.invalid)\\\"> <small class=\\\"form-text text-danger\\\" [hidden]=\\\"!editForm.controls.pfm?.errors?.required\\\"> This field is required. </small> </div> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_isFree\\\">Is Free</label> <input type=\\\"checkbox\\\" class=\\\"form-control\\\" name=\\\"isFree\\\" id=\\\"field_isFree\\\" [(ngModel)]=\\\"device.isFree\\\"/> <div [hidden]=\\\"!(editForm.controls.isFree?.dirty && editForm.controls.isFree?.invalid)\\\"> <small class=\\\"form-text text-danger\\\" [hidden]=\\\"!editForm.controls.isFree?.errors?.required\\\"> This field is required. </small> </div> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_ip\\\">Ip</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"ip\\\" id=\\\"field_ip\\\" [(ngModel)]=\\\"device.ip\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_assignedTo\\\">Assigned To</label> <select class=\\\"form-control\\\" id=\\\"field_assignedTo\\\" name=\\\"assignedTo\\\" [(ngModel)]=\\\"device.assignedToId\\\"> <option [ngValue]=\\\"null\\\"></option> <option [ngValue]=\\\"userOption.id\\\" *ngFor=\\\"let userOption of users; trackBy: trackUserById\\\">{{userOption.login}}</option> </select> </div> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span>Cancel</span> </button> <button type=\\\"submit\\\" [disabled]=\\\"editForm.form.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-save\\\"></span>&nbsp;<span>Save</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RldmljZS9kZXZpY2UtZGlhbG9nLmNvbXBvbmVudC5odG1sPzYyZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdVVBQXVVLGlsSEFBaWxILDRCQUE0QixrQkFBa0Isc01BQXNNLDBLQUEwSyIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGV2aWNlL2RldmljZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjZWRpdEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGlkPVxcXCJteURldmljZUxhYmVsXFxcIj5DcmVhdGUgb3IgZWRpdCBhIERldmljZTwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW2hpZGRlbl09XFxcIiFkZXZpY2UuaWRcXFwiPiA8bGFiZWwgZm9yPVxcXCJpZFxcXCI+SUQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImlkXFxcIiBuYW1lPVxcXCJpZFxcXCIgWyhuZ01vZGVsKV09XFxcImRldmljZS5pZFxcXCIgcmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfZHNuXFxcIj5Ec248L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZHNuXFxcIiBpZD1cXFwiZmllbGRfZHNuXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGV2aWNlLmRzblxcXCIgcmVxdWlyZWQvPiA8ZGl2IFtoaWRkZW5dPVxcXCIhKGVkaXRGb3JtLmNvbnRyb2xzLmRzbj8uZGlydHkgJiYgZWRpdEZvcm0uY29udHJvbHMuZHNuPy5pbnZhbGlkKVxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiBbaGlkZGVuXT1cXFwiIWVkaXRGb3JtLmNvbnRyb2xzLmRzbj8uZXJyb3JzPy5yZXF1aXJlZFxcXCI+IFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX2RldmljZVR5cGVcXFwiPkRldmljZSBUeXBlPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJkZXZpY2VUeXBlXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGV2aWNlLmRldmljZVR5cGVcXFwiIGlkPVxcXCJmaWVsZF9kZXZpY2VUeXBlXFxcIiByZXF1aXJlZD4gPG9wdGlvbiB2YWx1ZT1cXFwiQlVFTExFUlxcXCI+QlVFTExFUjwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJNT05UT1lBXFxcIj5NT05UT1lBPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIlNMT0FORVxcXCI+U0xPQU5FPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIlRBTktcXFwiPlRBTks8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiTkVFRExFXFxcIj5ORUVETEU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiU1RBUktcXFwiPlNUQVJLPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIk1BUkdPXFxcIj5NQVJHTzwvb3B0aW9uPiA8L3NlbGVjdD4gPGRpdiBbaGlkZGVuXT1cXFwiIShlZGl0Rm9ybS5jb250cm9scy5kZXZpY2VUeXBlPy5kaXJ0eSAmJiBlZGl0Rm9ybS5jb250cm9scy5kZXZpY2VUeXBlPy5pbnZhbGlkKVxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiBbaGlkZGVuXT1cXFwiIWVkaXRGb3JtLmNvbnRyb2xzLmRldmljZVR5cGU/LmVycm9ycz8ucmVxdWlyZWRcXFwiPiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9idWlsZFZhcmlhbnRcXFwiPkJ1aWxkIFZhcmlhbnQ8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImJ1aWxkVmFyaWFudFxcXCIgWyhuZ01vZGVsKV09XFxcImRldmljZS5idWlsZFZhcmlhbnRcXFwiIGlkPVxcXCJmaWVsZF9idWlsZFZhcmlhbnRcXFwiIHJlcXVpcmVkPiA8b3B0aW9uIHZhbHVlPVxcXCJVU0VSXFxcIj5VU0VSPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIlVTRVJERUJVR1xcXCI+VVNFUkRFQlVHPC9vcHRpb24+IDwvc2VsZWN0PiA8ZGl2IFtoaWRkZW5dPVxcXCIhKGVkaXRGb3JtLmNvbnRyb2xzLmJ1aWxkVmFyaWFudD8uZGlydHkgJiYgZWRpdEZvcm0uY29udHJvbHMuYnVpbGRWYXJpYW50Py5pbnZhbGlkKVxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiBbaGlkZGVuXT1cXFwiIWVkaXRGb3JtLmNvbnRyb2xzLmJ1aWxkVmFyaWFudD8uZXJyb3JzPy5yZXF1aXJlZFxcXCI+IFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX3BmbVxcXCI+UGZtPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwZm1cXFwiIFsobmdNb2RlbCldPVxcXCJkZXZpY2UucGZtXFxcIiBpZD1cXFwiZmllbGRfcGZtXFxcIiByZXF1aXJlZD4gPG9wdGlvbiB2YWx1ZT1cXFwiVVNcXFwiPlVTPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIkdCXFxcIj5HQjwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJJTlxcXCI+SU48L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiREVcXFwiPkRFPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIkFUXFxcIj5BVDwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJKUFxcXCI+SlA8L29wdGlvbj4gPC9zZWxlY3Q+IDxkaXYgW2hpZGRlbl09XFxcIiEoZWRpdEZvcm0uY29udHJvbHMucGZtPy5kaXJ0eSAmJiBlZGl0Rm9ybS5jb250cm9scy5wZm0/LmludmFsaWQpXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiIFtoaWRkZW5dPVxcXCIhZWRpdEZvcm0uY29udHJvbHMucGZtPy5lcnJvcnM/LnJlcXVpcmVkXFxcIj4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfaXNGcmVlXFxcIj5JcyBGcmVlPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJpc0ZyZWVcXFwiIGlkPVxcXCJmaWVsZF9pc0ZyZWVcXFwiIFsobmdNb2RlbCldPVxcXCJkZXZpY2UuaXNGcmVlXFxcIi8+IDxkaXYgW2hpZGRlbl09XFxcIiEoZWRpdEZvcm0uY29udHJvbHMuaXNGcmVlPy5kaXJ0eSAmJiBlZGl0Rm9ybS5jb250cm9scy5pc0ZyZWU/LmludmFsaWQpXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiIFtoaWRkZW5dPVxcXCIhZWRpdEZvcm0uY29udHJvbHMuaXNGcmVlPy5lcnJvcnM/LnJlcXVpcmVkXFxcIj4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfaXBcXFwiPklwPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImlwXFxcIiBpZD1cXFwiZmllbGRfaXBcXFwiIFsobmdNb2RlbCldPVxcXCJkZXZpY2UuaXBcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9hc3NpZ25lZFRvXFxcIj5Bc3NpZ25lZCBUbzwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImZpZWxkX2Fzc2lnbmVkVG9cXFwiIG5hbWU9XFxcImFzc2lnbmVkVG9cXFwiIFsobmdNb2RlbCldPVxcXCJkZXZpY2UuYXNzaWduZWRUb0lkXFxcIj4gPG9wdGlvbiBbbmdWYWx1ZV09XFxcIm51bGxcXFwiPjwvb3B0aW9uPiA8b3B0aW9uIFtuZ1ZhbHVlXT1cXFwidXNlck9wdGlvbi5pZFxcXCIgKm5nRm9yPVxcXCJsZXQgdXNlck9wdGlvbiBvZiB1c2VyczsgdHJhY2tCeTogdHJhY2tVc2VyQnlJZFxcXCI+e3t1c2VyT3B0aW9uLmxvZ2lufX08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1iYW5cXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj5DYW5jZWw8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiZWRpdEZvcm0uZm9ybS5pbnZhbGlkIHx8IGlzU2F2aW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNhdmVcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj5TYXZlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RldmljZS9kZXZpY2UtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGV2aWNlL2RldmljZS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/device/device-dialog.component.html\n");

/***/ })

})