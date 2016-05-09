angular.module('app').component('courses', {
    templateUrl: '/courses/courses.html',
    bindings: {
        courses: "=",
        selectCourse: "&"
    },
    controller: function (auth, $location) {

        this.edit = function (course) {
            this.editedCourse = course;
        }

        this.createCourse = function (courseData) {
            Materialize.toast('Bana skapad!', 2000, 'rounded');
            this.courses.$add(courseData);
        }
        
        this.updateCourse = function () {
            Materialize.toast('Uppdaterad!', 2000, 'rounded');

            this.courses.$save(this.editedCourse);
        }

    }
})