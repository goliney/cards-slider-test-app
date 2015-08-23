(function() {
  'use strict';

  angular
    .module('app.home-page')
    .controller('HomePageController', HomePage);

  HomePage.$inject = ['CardsDataService'];

  function HomePage(CardsDataService) {
    var vm = this;
    vm.showSlider = showSlider;

    activate();

    function activate() {
      console.log('HomePageController activated');
      CardsDataService.list(0, 10).then(function(response){console.log(response);});
    }

    function showSlider() {
      console.log('show slider');
    }
  }
})();