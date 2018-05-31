import * as angular from 'angular';

class MainComponentController {
    constructor() {
        this.markers = [
            {
                latitude:-27.4591736,
                longitude:153.0359869,
                name: "RCL"
            },
            {
                latitude: -27.4636424,
                longitude: 153.0433826,
                name: "Powerhouse"
            }
        ];
    }

}

angular.module('demo')
    .component('mainComponent',
    {
        template: `<ng-map center="0,0" zoom="3"></ng-map>`,
        controller: MainComponentController
    })