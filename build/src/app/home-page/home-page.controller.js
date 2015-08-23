(function() {
  'use strict';

  angular
    .module('app.home-page')
    .controller('HomePageController', HomePage);

  HomePage.$inject = ['cardsSlider'];

  function HomePage(cardsSlider) {
    var vm = this;
    vm.showSlider = showSlider;

    activate();

    function activate() {
      console.log('HomePageController activated');
    }

    function showSlider() {
      cardsSlider.open();
    }
  }
})();