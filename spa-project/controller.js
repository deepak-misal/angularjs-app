angular.module('spa')
       .controller('HomeController',[function(){
              console.log("home")
       }])
        
       .controller('ProductListController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
              $scope.productImages=true;
              $http.get('products.json')
              .then(function(response){
                     //console.log(response.data)
                     $scope.products=response.data;
              })
              $scope.displayImage=function(){
                     $scope.productImages=false;
              }
              $scope.getDetals=function(product){
                     $rootScope.product=product; 
                     console.log(product);
              }
       
       }])
       // .directive('ratings', function () {
       //        return {
       //            restrict: 'E',
       //            scope: false,
       //            template: '<div ><span class="glyphicon glyphicon-star-empty" ng-repeat="i in [1, 2, 3, 4, 5]"></span></div>',
       //        };
       // })