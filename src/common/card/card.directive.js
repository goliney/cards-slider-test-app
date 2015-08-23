(function () {
  'use strict';

  angular
    .module('card')
    .directive('cardsSlider', CardsSlider);

  CardsSlider.$inject = ['cardsSlider', 'CardsDataService', '$document', '$interval'];

  function CardsSlider(cardsSlider, CardsDataService, $document, $interval) {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'card/partials/card-slider.tpl.html',
      controllerAs: 'vm',
      bindToController: true,
      controller: CardsSliderCtrl,
      link: CardsSliderLink
    };

    return directive;

    function CardsSliderCtrl() {
      var vm = this;

      var cardsQuantity = 10;   // amount of cards in a slider
      var playHandler;
      var frequency = 5000;     // ms

      vm.index = 0;             // index of card being shown
      vm.prev = prev;
      vm.play = play;
      vm.pause = pause;
      vm.next = next;
      vm.isPlaying = false;
      vm.cards = [];
      vm.isReverse = false;

      activate();

      function activate() {
        CardsDataService.list(0, cardsQuantity).then(function (cards) {
          vm.cards = cards;
        });
      }

      function prev() {
        vm.isReverse = true;
        vm.index = vm.index === 0 ? cardsQuantity - 1 : vm.index - 1;
      }

      function next() {
        vm.isReverse = false;
        vm.index = vm.index === cardsQuantity - 1 ? 0 : vm.index + 1;
      }

      function play() {
        vm.isPlaying = true;
        playHandler = $interval(function() {
          vm.next();
        }, frequency);
      }

      function pause() {
        vm.isPlaying = false;
        $interval.cancel(playHandler);
      }
    }

    function CardsSliderLink(scope, element, attrs, vm) {
      vm.close = close;
      cardsSlider._isOpened = true;

      $document.bind('keydown', keyBind);

      function keyBind(event) {
        switch (event.keyCode) {
          case 27:        // esc
            vm.close();
            break;
          case 39:        // right
            vm.next();
            break;
          case 37:        // left
            vm.prev();
            break;
          case 32:        // space
            var fn = vm.isPlaying ? vm.pause : vm.play;
            fn();
            break;
        }

        scope.$apply();
      }

      // close cards slider
      function close() {
        cardsSlider._isOpened = false;
        scope.$destroy();
        element.remove();
      }

      scope.$on('$destroy', function () {
        $document.unbind('keydown', keyBind);
      });
    }
  }
})();