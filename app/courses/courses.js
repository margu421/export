angular.module('app').component('courses', {
    templateUrl: '/courses/courses.html',
    bindings: {
        courses: "=",
        selectCourse: "&"
    },
    controller: function (auth, $location) {
        
        this.showEditForm = false;
        
        //fortsätt här
        
        this.editCourse = function (course) {
            this.selectCourse({course: course})
            
            
        }
        
        this.createCourse = function () {
            
        }


    }
})