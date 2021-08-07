angular.module('spa',['ngRoute'])
       .config(['$routeProvider',function($routeProvider){
           $routeProvider
                    .when('/',{
                        templateUrl: 'fragments/home.html',
                        controller: 'HomeController'
                    })
                    .when('/home',{
                        templateUrl: 'fragments/home.html',
			            controller: 'HomeController'
                    })
                    .when('/about',{
                        templateUrl: 'fragments/about.html',
			            controller: 'AboutController'
                    })
                    .when('/career',{
                        templateUrl: 'fragments/career.html',
			            controller: 'CareerController'
                    })
       }])