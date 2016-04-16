angular.module('app').factory('fbRef', function(rootRef, auth) {
    return {
        getMemberRef: function () {
            return rootRef.child('members').child(auth.$getAuth().uid);
        }
    }
});