angular.module('app').factory('fbRef', function (rootRef, auth) {
    return {
        getMembersRef: function () {
            return rootRef.child('members');
        },
        getRoundsRef: function () {
            return rootRef.child('rounds');
        },
        getCoursesRef: function () {
            return rootRef.child('courses')
        }
    }
});