(function() {
  'use strict';

  angular.module('app.core', [
    /* Angular modules */
    'ngAnimate',
    'ngSanitize',
    'ngResource',

    /* Our reusable cross app code modules */
    'card',

    /* 3rd Party modules */
    'ui.router'
  ]);
})();