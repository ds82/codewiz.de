window.jQuery = window.$ = require('thirdparty/jquery');
require('thirdparty/bootstrap');
require('thirdparty/angular/angular.js');

var app = angular.module('app', []);

app.controller('AppController', ['$scope', function($scope) {

}]);

app.controller('FooterCtrl', FooterCtrl);
function FooterCtrl() {
  var vm = this;
  vm.today = new Date();
}
