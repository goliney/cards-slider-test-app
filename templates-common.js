angular.module('templates-common', ['card/partials/card-slider.tpl.html', 'card/partials/card.tpl.html']);

angular.module("card/partials/card-slider.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("card/partials/card-slider.tpl.html",
    "<div class=\"cards-slider-wrapper\">\n" +
    "    <div class=\"close-slider ctrl glyphicon glyphicon-remove\" ng-click=\"vm.close()\"></div>\n" +
    "    <div class=\"controls\">\n" +
    "        <span ng-click=\"vm.prev()\"  ng-show=\"!vm.isPlaying\" class=\"ctrl glyphicon glyphicon-chevron-left\"></span>\n" +
    "        <span ng-click=\"vm.play()\"  ng-show=\"!vm.isPlaying\" class=\"ctrl glyphicon glyphicon-play\"></span>\n" +
    "        <span ng-click=\"vm.pause()\" ng-show=\"vm.isPlaying\"  class=\"ctrl glyphicon glyphicon-pause\"></span>\n" +
    "        <span ng-click=\"vm.next()\"  ng-show=\"!vm.isPlaying\" class=\"ctrl glyphicon glyphicon-chevron-right\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"thumbnail\">\n" +
    "        <img ng-src=\"{{vm.cards[0].url}}\">\n" +
    "        <div class=\"caption\">\n" +
    "            <h4>{{vm.cards[0].title}}</h4>\n" +
    "            <p>{{vm.cards[0].desc}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("card/partials/card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("card/partials/card.tpl.html",
    "");
}]);
