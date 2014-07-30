 var app = angular.module('ExampleApp', ['BitNZ']);
app.controller('ExampleCtrl', ['$scope', '$log', 'BitNZ', function($scope, $log, bitnz){
  
  $log.log('bitNZ', bitnz);

  $scope.config = {
    username: '',
    key: '',
    secret: ''
  };

  $scope.results = [];

  $scope.Authorize = function(){
    bitnz.authorize($scope.config);
  };

  $scope.GetTicker = function(){
    if (!bitnz) {
      $log.log('Uh oh!');
      return;
    }
    bitnz.ticker().success(function(data, status){
      $log.log('ticker', data, status);
    });
  };

  $scope.GetChart = function() {
    $scope.imageUrl = bitnz.chart();
    return $scope.imageUrl;
  };

  $scope.OrderBook = function(){
    bitnz.orderbook().success(function(data) {
      $log.log('orderbook', data);
    });
  };

  $scope.Balance = function(){
    bitnz.balance().success(function(data) {
      $log.log('balance', data);
    }).error(function(){
      $log.log('error', arguments);
    });
  };

  

}]);