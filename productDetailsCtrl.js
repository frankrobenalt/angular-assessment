angular.module('assessment').controller('productDetailsCtrl', function($scope, $stateParams, shopSrvc){
shopSrvc.getProducts().then(res=>{
    $scope.product = res.data.filter(cur=>cur.id === $stateParams.id)[0];
    console.log($scope.product)
})

})