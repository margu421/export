angular.module('app').component('editCourse', {
    templateUrl: '/courses/editCourse.html',
    bindings: {
        courses: "=",
        selectCourse: "&"
    },
    controller: function (auth, $location) {
        
        
        this.createCourse = function () {
        }
        
        this.editCourse = function (course) {
            this.selectCourse({course: course})
            
            
        }

    }
})