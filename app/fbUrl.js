angular.module('app').constant('FirebaseUrl', 'https://export.firebaseio.com')
    .service('rootRef', ['FirebaseUrl', Firebase]);