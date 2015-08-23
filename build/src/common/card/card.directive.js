(function() {
  'use strict';

  angular
    .module('card')
    .directive('cardsSlider', CardsSlider);

  CardsSlider.$inject = ['cardsSlider','CardsDataService', '$document'];

  function CardsSlider(cardsSlider, CardsDataService, $document) {
    var directive = {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'card/partials/card-slider.tpl.html',
      controllerAs: 'vm',
      bindToController: true,
      controller: CardsSliderCtrl,
      link: CardsSliderLink
    };

    return directive;

    function CardsSliderCtrl() {
      var vm = this;
      vm.prev = prev;
      vm.play = play;
      vm.pause = pause;
      vm.next = next;
      vm.isPlaying = false;
      vm.cards = [];

      activate();

      function activate() {
        CardsDataService.list(0, 10).then(function(cards) {
          vm.cards = cards;
        });
      }

      function prev() {
        console.log('prev');
      }

      function next() {
        console.log('next');
      }

      function play() {
        console.log('play');
        vm.isPlaying = true;
      }

      function pause() {
        console.log('pause');
        vm.isPlaying = false;
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
      }

      // close cards slider
      function close() {
        cardsSlider._isOpened = false;
        scope.$destroy();
        element.remove();
      }

      scope.$on('$destroy', function() {
        $document.unbind('keydown', keyBind);
      });
    }
  }
})();