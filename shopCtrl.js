angular.module('assessment').controller('shopCtrl', function($scope, shopSrvc){

    shopSrvc.getProducts().then((response)=>{
        $scope.products = response.data;
        console.log($scope.products);
    })


})