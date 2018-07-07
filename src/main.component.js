import * as angular from 'angular';

class MainComponentController {
    constructor($uibModal, $log, LocationService) {
        this.markers = LocationService.locations;
        this.center = "21 Campbell St, Toowong QLD";
        this.zoom = 3;
        
        this.openModal = this.openModal.bind(this);

        this._uibModal = $uibModal;
        this._log = $log;
    }

    zoomLocation(index) {
        var center = this.markers[index];
        this.zoom = 15;
        this.center = `${center.latitude}, ${center.longitude}`;
    }

    clearLocation(){
        this.center = "21 Campbell St, Toowong QLD";
        this.zoom = 3;
    }

    openModal(event, index) {
        const modalInstance = this._uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            backdrop: true,
            templateUrl: 'views/modal.html',
            controller: function() {
                    this.titleMessage = `Location ${index + 1}`;
                    this.bodyMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."                
                },
            controllerAs: 'modalctrl',
            size: 'sm',
            resolve: {
            }
        });

        modalInstance.result.catch(() => {
            this._log.info('modal-component dismissed at:' + new Date())
        });
    }
}

angular.module('demo')
    .component('mainComponent',
    {
        templateUrl:"views/map.html",
        controller: MainComponentController,
        controllerAs: 'locationctrl'
    })