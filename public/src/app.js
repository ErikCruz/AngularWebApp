angular.module('ContactsApp', [])
    .run(function($rootScope){
       $rootScope.message = 'hello angular'; 
    });