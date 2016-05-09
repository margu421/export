(function (angular) {
    'use strict';
    angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/admin/courses', {
                template: '<courses current-auth="$resolve.currentAuth" courses="$resolve.courses"></courses>',
                resolve: {
                    currentAuth: function (auth) {
                        return auth.$requireAuth();
                    },
                    courses: function (fbRef, courseService) {
                        var query = fbRef.getCoursesRef().orderByChild('clubName');
                        return courseService(query).$loaded();
                    }
                }
            });
    });

})(angular);
