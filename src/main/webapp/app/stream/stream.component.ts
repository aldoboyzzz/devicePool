import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Account, LoginModalService, Principal } from '../shared';

/*@Component({
    selector: 'jhi-stream',
    templateUrl: './stream.component.html',
    styleUrls: [
        'stream.scss'
    ]

})*/
@Component({
    selector: 'jhi-stream',
    template: `
  <a target="_blank" [href]="'file://' + viewUrl + '/index.html'">View Device Screen</a>
`
})
export class StreamComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    viewUrl: string;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private url: string
    ) {
        this.viewUrl = url;
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
