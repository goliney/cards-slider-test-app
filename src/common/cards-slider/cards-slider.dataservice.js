(function () {
  'use strict';

  angular
    .module('common.cards-slider')
    .factory('CardsDataService', CardsDataService);

  CardsDataService.$inject = ['$http', 'API', '$q'];

  function CardsDataService($http, API, $q) {
    var service = {
      get: get,
      list: list
    };

    return service;

    function get(id) {
      if (id < 0 || id > 499) {
        throw new Error('Card id must be from 0 to 499');
      }
      return $http.get(API.card + id);
    }

    function list(startId, quantity) {
      var promises = [];
      for (var id = startId; id < quantity; id++) {
        promises.push(get(id));
      }
      return $q.all(promises);
    }
  }
})();