main.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state("home",{
        url:"/home",
        templateUrl:"../view/templates/main.html"
    })
    .state("home.tab1",{
        url:"/tab1",
        templateUrl:"../view/templates/tab1.html"
    })
    .state("home.tab2",{
        url:"/tab2",
        templateUrl:"../view/templates/tab2.html"
    })
    $urlRouterProvider.otherwise("home")
}])