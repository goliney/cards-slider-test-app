angular.module('templates-common', ['card/partials/card-slider.tpl.html']);

angular.module("card/partials/card-slider.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("card/partials/card-slider.tpl.html",
    "<div class=\"cards-slider-wrapper\" ng-class=\"{'reverse': vm.isReverse}\">\n" +
    "    <div class=\"close-slider ctrl glyphicon glyphicon-remove\" ng-click=\"vm.close()\"></div>\n" +
    "    <div class=\"controls\">\n" +
    "        <span ng-click=\"vm.prev()\"  ng-show=\"!vm.isPlaying\" class=\"ctrl glyphicon glyphicon-chevron-left\"></span>\n" +
    "        <span ng-click=\"vm.play()\"  ng-show=\"!vm.isPlaying\" class=\"ctrl glyphicon glyphicon-play\"></span>\n" +
    "        <span ng-click=\"vm.pause()\" ng-show=\"vm.isPlaying\"  class=\"ctrl glyphicon glyphicon-pause\"></span>\n" +
    "        <span ng-click=\"vm.next()\"  ng-show=\"!vm.isPlaying\" class=\"ctrl glyphicon glyphicon-chevron-right\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"thumbnail\" ng-repeat=\"card in vm.cards\" ng-show=\"vm.index === $index\">\n" +
    "        <img ng-src=\"{{card.url}}\" alt=\"{{card.title}}\">\n" +
    "        <div class=\"caption\">\n" +
    "            <h4>{{card.title}}</h4>\n" +
    "            <p>{{card.short_desc}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
