(function() {
  'use strict';

  angular.module('app.core', [
    /* Angular modules */
    'ngAnimate',
    'ngSanitize',
    'ngResource',

    /* Our reusable cross app code modules */
    'common.cards-slider',

    /* 3rd Party modules */
    'ui.router'
  ]);
})();