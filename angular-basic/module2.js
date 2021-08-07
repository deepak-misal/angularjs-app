angular.module('modB',[])
       .controller('ControllerB',['$scope','$rootScope',function($scope,$rootScope){
           $scope.message="Hello says Controller B"
           console.log($rootScope.developer)
       }])
angular.module('modA',['modB'])
       .controller('ControllerA',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
        $scope.message="Hello says Controller A"
        $rootScope.developer={
            name:'Deepak',
            role:'Junior Engineer',
            department:'A',
            address:['abc','prq']
        }
        $timeout(function () {
            $rootScope.developer.name="abcd"
        }, 2000);
    }])