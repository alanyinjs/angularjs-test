import * as angular from 'angular';

class LocationService {
  constructor(){
    this.locations = [
      {
        latitude: -27.4591736,
        longitude:153.0359869,
        name: "RCL"
      },
      {
        latitude: -27.4636424,
        longitude: 153.0433826,
        name: "Powerhouse"
      },
      {
        latitude: -27.468775,
        longitude: 152.942519,
        name: "Mount Coot-Tha"
      },
      {
        latitude: -27.494883,
        longitude: 153.013135,
        name: "University of Queensland"
      },
      {
        latitude: -27.465009,
        longitude: 153.009331,
        name: "Suncorp Stadium"
      },
      {
        latitude: -27.468344,
        longitude: 153.024647,
        name: "King George Square"
      },
      {
        latitude: -27.396060,
        longitude: 153.123128,
        name: "Brisbane Airport"
      },
      {
        latitude: -26.6500,
        longitude: 153.0667,
        name: "Sunshine Coast"
      },
      {
        latitude: -28.0167,
        longitude: 153.4000,
        name: "Gold Coast"
      }
    ];
  }
}

angular.module('demo')
  .service('LocationService', LocationService);