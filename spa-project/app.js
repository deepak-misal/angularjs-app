angular.module('spa',['ngRoute'])
       .config(['$routeProvider',function($routeProvider){
           $routeProvider
                    .when('/',{
                        templateUrl: 'templates/home.html',
                        controller: 'HomeController'
                    })
                    .when('/home',{
                        templateUrl: 'templates/home.html',
			            controller: 'HomeController'
                    })
                    .when('/productlist',{
                        templateUrl: 'templates/productlist.html',
			            controller: 'ProductListController'
                    })
                    .when('/productdetail',{
                        templateUrl:'templates/productdetail.html',
                        controller:'ProductListController'
                    })
       }])