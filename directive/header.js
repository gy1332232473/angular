main.directive("myHeader",function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"../view/templates/header.html"
    }
})