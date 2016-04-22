angular.module('app').component('listCourses', {
    templateUrl: '/courses/listCourses.html',
    bindings: {
        courses: "=courseData",
        selectCourse: "&"
    },
    controller: function (auth, $location) {
             
        this.edit = function (course) {
            console.log("edit: " + course.name);
            this.selectCourse({course: course})
            
            
        }
        
        this.remove = function(course) {
            this.courses.$remove(course)
        }
        
        this.addNewCourse = function () {
            
        }


    }
})