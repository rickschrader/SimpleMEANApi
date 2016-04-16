
angular.module('app',['ui.router','ngResource','app.controllers','app.services']);

angular.module('app').config(function($stateProvider,$httpProvider){
    //Album states
    $stateProvider.state('albums',{
        url:'/albums',
        templateUrl:'partials/albums/albums.html',
        controller:'AlbumListController'
    }).state('viewAlbum',{
       url:'/albums/:id/view',
       templateUrl:'partials/albums/album-view.html',
       controller:'AlbumViewController'
    }).state('newAlbum',{
        url:'/albums/new',
        templateUrl:'partials/albums/album-add.html',
        controller:'AlbumCreateController'
    }).state('editAlbum',{
        url:'/albums/:id/edit',
        templateUrl:'partials/albums/album-edit.html',
        controller:'AlbumEditController'
    });

}).run(function($state){
   $state.go('albums');
});