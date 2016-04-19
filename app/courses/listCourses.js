angular.module('app').component('listCourses', {
    templateUrl: '/courses/listCourses.html',
    bindings: {
        courses: "=courseData",
        selectCourse: "&"
    },
    controller: function (auth, $location) {
        
        
        this.editCourse = function (course) {
            this.selectCourse({course: course})
            
            
        }
        
        this.removeCourse = function(course) {
            this.courses.$remove(course)
        }
        
        this.addNewCourse = function () {
            
        }


    }
})