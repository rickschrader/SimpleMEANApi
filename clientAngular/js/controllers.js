
//Movies
angular.module('app.controllers',[]).controller('AlbumListController',function($scope,$state,popupService,$window,Album){

    $scope.albums=Album.query();

    $scope.deleteAlbum=function(album){
        if(popupService.showPopup('Really delete this?')){
            album.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('AlbumViewController',function($scope,$stateParams,Album){

    $scope.album=Album.get({id:$stateParams.id});

}).controller('AlbumCreateController',function($scope,$state,$stateParams,Album){

    $scope.album=new Album();

    $scope.addAlbum=function(){
        $scope.album.$save(function(){
            $state.go('albums');
        });
    }

}).controller('AlbumEditController',function($scope,$state,$stateParams,Album){

    $scope.updateAlbum=function(){
        $scope.album.$update(function(){
            $state.go('albums');
        });
    };

    $scope.loadAlbum=function(){
        $scope.album=Album.get({id:$stateParams.id});
    };

    $scope.loadAlbum();
})

