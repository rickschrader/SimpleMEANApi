
angular.module('app.services',[]).factory('Album',function($resource){
    return $resource('http://localhost:8000/api/albums/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
