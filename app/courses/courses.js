angular.module('app').component('courses', {
    templateUrl: '/courses/courses.html',
    bindings: {
        courses: "=",
        selectCourse: "&"
    },
    controller: function (auth, $location) {


        //fortsätt här

        this.edit = function (course) {
            this.editedCourse = course;


        }

        this.createCourse = function (courseData) {
            this.courses.$add(courseData);

        }
        
        this.updateCourse = function () {
            this.courses.$save(this.editedCourse);

        }


    }
})