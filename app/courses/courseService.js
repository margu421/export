angular.module('app').factory('courseService', function ($firebaseArray) {
    var CourseService = $firebaseArray.$extend({    
        //här kan man lägga extendad funktionalitet till CourseService, typ
        //om man vill summera totala scoren på en viss bana
        getNumberOfCourses: function () {
            var numberOfCourses = 0;
            angular.forEach(this.$list, function (elem) {
                numberOfCourses++;              
            });
            return numberOfCourses;
        }        
    });
    return function (ref) {
        return new CourseService(ref);
    }
});