

main.controller('customersCtrl',["$scope","$http",function($scope, $http) {
    $http.get("../../public/js/prodect.json")
    .then(function (result) {
       $scope.data=result.data;
       console.log(result.data)
    });
}]);



