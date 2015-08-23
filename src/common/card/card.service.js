(function () {
  'use strict';

  angular
    .module('card')
    .factory('cardsSlider', CardsSlider);

  CardsSlider.$inject = ['$document', '$compile', '$rootScope'];

  function CardsSlider($document, $compile, $rootScope) {
    var service = {
      _isOpened: false,
      open: open
    };

    return service;

    function open() {
      if (service._isOpened) {
        // prevent opening slider twice
        return;
      }
      var body = $document.find('body');
      var sliderScope = $rootScope.$new();
      var sliderElement = $compile('<cards-slider />')(sliderScope);
      body.append(sliderElement);
    }
  }
})();