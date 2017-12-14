import { BaseEntity } from './../../shared';

export const enum DeviceType {
    'BUELLER',
    'MONTOYA',
    'SLOANE',
    'TANK',
    'NEEDLE',
    'STARK',
    'MARGO'
}

export const enum BuildVariant {
    'USER',
    'USERDEBUG'
}

export const enum Pfm {
    'US',
    'GB',
    'IN',
    'DE',
    'AT',
    'JP'
}

export class Device implements BaseEntity {
    constructor(
        public id?: number,
        public dsn?: string,
        public deviceType?: DeviceType,
        public buildVariant?: BuildVariant,
        public pfm?: Pfm,
        public isFree?: boolean,
        public ip?: string,
        public assignedToId?: number,
        public viewUrl?: string
    ) {
        this.isFree = false;
        this.viewUrl = 'http://' + ip + ':8080'
    }
}
