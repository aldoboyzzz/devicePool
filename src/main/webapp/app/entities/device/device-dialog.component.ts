import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Device } from './device.model';
import { DevicePopupService } from './device-popup.service';
import { DeviceService } from './device.service';
import { User, UserService } from '../../shared';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-device-dialog',
    templateUrl: './device-dialog.component.html'
})
export class DeviceDialogComponent implements OnInit {

    device: Device;
    isSaving: boolean;

    users: User[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private deviceService: DeviceService,
        private userService: UserService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.userService.query()
            .subscribe((res: ResponseWrapper) => { this.users = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.device.id !== undefined) {
            this.subscribeToSaveResponse(
                this.deviceService.update(this.device));
        } else {
            this.subscribeToSaveResponse(
                this.deviceService.create(this.device));
        }
    }

    private subscribeToSaveResponse(result: Observable<Device>) {
        result.subscribe((res: Device) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Device) {
        this.eventManager.broadcast({ name: 'deviceListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackUserById(index: number, item: User) {
        return item.id;
    }

    trackUserByLogin(index: number, item: User) {
        return item.login;
    }
}

@Component({
    selector: 'jhi-device-popup',
    template: ''
})
export class DevicePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private devicePopupService: DevicePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.devicePopupService
                    .open(DeviceDialogComponent as Component, params['id']);
            } else {
                this.devicePopupService
                    .open(DeviceDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
