angular.module('modA',[])
       .controller('ControllerA',function($scope,$rootScope,$log){
           console.log("Inside controller A")
           $log.info("using $log service")
           $rootScope.company={
               name:'Aurionpro',
               strength:500
           }
           $scope.developer={
               name:'Deepak',
               role:'Junior Engineer'
           }
           $log.info($rootScope)
           $log.info($scope)
       })