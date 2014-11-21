var app = angular.module('menu', ['ui.bootstrap']);

app.controller('MainCtrl', [function($scope) {
  $scope.name = 'Nacho craver';
 
}]);

app.controller('DropdownCtrl', [function($scope){
  $scope.items = [
    "Chooose Chips",
    "Choose Beans",
    "Choose Nachos"
  ];
}]);