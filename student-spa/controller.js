angular.module('spa')
       .controller('HomeController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
            $http.get("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students")
            .then(function(response){
                $scope.totalStudents=response.data.length;
                $scope.studentData=response.data;
            })
            $scope.deleteData=function(id){
                console.log(id)
                $http.delete('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/'+id)
                     .then(function(response){
                         alert("Data Deleted")
                         window.location.reload();
                     })  
            }
            $scope.loadData=function(student){
                window.location="#/edit"
                $rootScope.student=student;
            }
       }])
       .controller('AddController',['$scope','$http',function($scope,$http){
        $scope.postData=function(rollNo,name,age,email,date,isMale){
            var data={
                rollNo:rollNo,
                name:name,
                age:age,
                email:email,
                date:date,
                isMale:isMale
            }
            console.log(data)
            $http.post('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students',JSON.stringify(data))
                 .then(function(response){
                     if(response.data){
                         console.log(response.data.id)
                         alert("submitted")
                         window.location="#/home";
                     } 
                 })
        }
       }])
       .controller('EditController',['$scope','$http',function($scope,$http){
        $scope.rollNo=$scope.student.rollNo;
        $scope.name=$scope.student.name;
        $scope.age=$scope.student.age;
        $scope.email=$scope.student.email;
        
        $scope.putData=function(rollNo,name,age,email,date,isMale){
            var data={
                rollNo:rollNo,
                name:name,
                age:age,
                email:email,
                date:date,
                isMale:isMale
            }
            $http.put("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/"+$scope.student.id,data)
                 .then(function(response){
                     alert("Data Updated")
                     window.location="#/home";
                })
        }

       }])