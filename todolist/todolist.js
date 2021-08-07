var toDoApp= angular.module('toDo',[]);
toDoApp.controller('ToDoController',['$scope',function($scope){
    $scope.tasks=[];
    $scope.buttonClick=function(){
        if($scope.task!=""){
            $scope.addTask();
        }
    }
    $scope.addTask=function(){
        $scope.tasks.push({'taskInfo':$scope.task,'isDeleted':false});
        console.log($scope.tasks)
        $scope.task='';
    }
    $scope.deleteTask=function(task){
        task.isDeleted=true;
        var index=$scope.tasks.indexOf(task);
        $scope.tasks.splice(index,1)      
    }
}])