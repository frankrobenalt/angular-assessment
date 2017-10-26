angular.module('assessment').service('shopSrvc', function($http){

    this.getProducts = ()=>{
        return $http.get('https://practiceapi.devmountain.com/products');
    }

})