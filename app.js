angular.module('assessment', ['ui.router']);
angular.module('assessment').config(($urlRouterProvider, $stateProvider) => {    

    $urlRouterProvider.otherwise('/');

    // in the resolve, request the user, if no user, catcth the error (401, 404, etc.);
    // the user method gives access to a user prop in the homeCtrl
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: './views/about.html'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: './views/blog.html'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: './views/shop.html',
            controller: 'shopCtrl'
        })
        .state('product-details', {
            url: '/product-details/:id',
            templateUrl: './views/product-details.html',
            controller: 'productDetailsCtrl'
        })
});