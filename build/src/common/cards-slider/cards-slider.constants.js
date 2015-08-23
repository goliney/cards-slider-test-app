(function() {
  'use strict';

  angular
    .module('common.cards-slider')
    .constant('API', {
      root: 'http://ec2-52-25-151-129.us-west-2.compute.amazonaws.com:8888/',
      /*
      Unfortunately, demo server doesn't support CORS, so I use mock data instead
       */
      //card: 'http://ec2-52-25-151-129.us-west-2.compute.amazonaws.com:8888/card/'
      card: 'assets/mock/card/'
    });

})();