"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var ng_jhipster_1 = require("ng-jhipster");
var test_module_1 = require("../../../test.module");
var mock_route_service_1 = require("../../../helpers/mock-route.service");
var device_detail_component_1 = require("../../../../../../main/webapp/app/entities/device/device-detail.component");
var device_service_1 = require("../../../../../../main/webapp/app/entities/device/device.service");
var device_model_1 = require("../../../../../../main/webapp/app/entities/device/device.model");
describe('Component Tests', function () {
    describe('Device Management Detail Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.DevicePoolTestModule],
                declarations: [device_detail_component_1.DeviceDetailComponent],
                providers: [
                    ng_jhipster_1.JhiDateUtils,
                    ng_jhipster_1.JhiDataUtils,
                    common_1.DatePipe,
                    {
                        provide: router_1.ActivatedRoute,
                        useValue: new mock_route_service_1.MockActivatedRoute({ id: 123 })
                    },
                    device_service_1.DeviceService,
                    ng_jhipster_1.JhiEventManager
                ]
            }).overrideTemplate(device_detail_component_1.DeviceDetailComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(device_detail_component_1.DeviceDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(device_service_1.DeviceService);
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                spyOn(service, 'find').and.returnValue(Rx_1.Observable.of(new device_model_1.Device(10)));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.device).toEqual(jasmine.objectContaining({ id: 10 }));
            });
        });
    });
});
//# sourceMappingURL=device-detail.component.spec.js.map