(function() {
  'use strict';

  angular
    .module('app.home-page')
    .controller('HomePageController', HomePage);

  HomePage.$inject = [];

  function HomePage() {
    var vm = this;
    vm.showSlider = showSlider;

    activate();

    function activate() {
      console.log('HomePageController activated');
    }

    function showSlider() {
      console.log('show slider');
    }
  }
})();