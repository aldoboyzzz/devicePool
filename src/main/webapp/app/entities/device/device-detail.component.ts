import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Device } from './device.model';
import { DeviceService } from './device.service';

@Component({
    selector: 'jhi-device-detail',
    templateUrl: './device-detail.component.html'
})
export class DeviceDetailComponent implements OnInit, OnDestroy {

    device: Device;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private deviceService: DeviceService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInDevices();
    }

    load(id) {
        this.deviceService.find(id).subscribe((device) => {
            this.device = device;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInDevices() {
        this.eventSubscriber = this.eventManager.subscribe(
            'deviceListModification',
            (response) => this.load(this.device.id)
        );
    }
}
