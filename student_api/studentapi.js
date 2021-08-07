var studentApp=angular.module('modStudent',[]);
studentApp.controller('Controller',['$scope','$http',function($scope,$http){
    $scope.id;
    $http.get("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students")
         .then(function(response){
             $scope.totalStudents=response.data.length;
             $scope.studentData=response.data;
         })
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
                 } 
             })
    }
    $scope.deleteData=function(id){
        console.log(id)
        $http.delete('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/'+id)
             .then(function(response){
                 alert("Data Deleted")
                 window.location.reload();
             })  
    }
    $scope.loadData=function(id,rollNo,name,age,email){
        $scope.rollNo=rollNo;
        $scope.name=name;
        $scope.age=age;
        $scope.email=email;
        $scope.id=id;
        
    }
    $scope.putData=function(id,rollNo,name,age,email,date,isMale){
        var data={
            rollNo:rollNo,
            name:name,
            age:age,
            email:email,
            date:date,
            isMale:isMale
        }
        console.log(id)
        $http.put("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/"+id,data)
             .then(function(response){
                 aler("Data Updated")
             })
    }
}])
