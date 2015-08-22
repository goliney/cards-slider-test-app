angular.module('templates-app', ['home-page/home-page.tpl.html']);

angular.module("home-page/home-page.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/home-page.tpl.html",
    "<nav class=\"navbar\">\n" +
    "    <div class=\"container\">\n" +
    "        <ul class=\"navbar-list\">\n" +
    "            <li class=\"navbar-item\"><a class=\"navbar-link\" ui-sref=\"app.home\" ui-sref-active=\"active\">Home</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <button class=\"btn btn-lg btn-success\" ng-click=\"vm.showSlider()\">Show slider</button>\n" +
    "</div>");
}]);
