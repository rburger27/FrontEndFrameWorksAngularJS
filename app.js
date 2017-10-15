let app = angular.module('myApp', []);

app.controller("todoCtrl", function($scope) {
  $scope.todoList = [
    {
      todoText: "Complete project in AngularJS",
      done: false}, {
      todoText: "Complete project in ReactJS",
      done: false}];
  $scope.todoAdd = function() {
    $scope.todoList.push({todoText: $scope.todoInput, done: false});
    $scope.todoInput = "";
  }
  $scope.remove = function() {
    var oldList = $scope.todoList;
    $scope.todoList = [];
    angular.forEach(oldList, function(x) {
      if (!x.done)
        $scope.todoList.push(x);
      }
    )
  }
});
