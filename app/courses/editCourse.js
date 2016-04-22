angular.module('app').component('editCourse', {
    templateUrl: '/courses/editCourse.html',
    bindings: {
        // courses: "=",
        updateCourse: '&',
        createNewCourse: "&",
        selectCourse: "&",
        editedCourse: "="
    },
    controller: function ($scope) {

        $scope.$watch('$ctrl.editedCourse', (function (newData) {
            if (!!newData) {
                this.editing = true;
                this.clubName = newData.clubName;
                this.name = newData.name;
                this.link = newData.link;
                this.desc = newData.desc;
                this.scoreCard = newData.scoreCard;
            }
        }).bind(this));

        function generateScoreCardHoles() {
            var scoreCard = [];
            for (var i = 1; i <= 18; i++) {
                scoreCard.push({ holeNumber: i, par: null, hcp: null, length: null });
            }
            return scoreCard;
        }

        this.setDefaults = function () {
            this.clubName = "",
                this.name = "",
                this.link = "http://",
                this.desc = ""
            this.scoreCard = {
                holes: generateScoreCardHoles(),
                totalPar: 0,
                totalLength: 0
            }
        }

        this.setDefaults();

        this.create = function () {
            this.courseData = {
                clubName: this.clubName
                , name: this.name
                , link: this.link
                , desc: this.desc
                , scoreCard: this.scoreCard
            }
            this.setDefaults();
            //save data
            this.createNewCourse({ courseData: this.courseData });

        }
        this.cancel = function () {
            this.setDefaults();
            this.editing = false;
        }

        this.save = function (course) {
            this.editedCourse.clubName = this.clubName;
            this.editedCourse.name = this.name;
            this.editedCourse.link = this.link;
            this.editedCourse.desc = this.desc;
            this.editedCourse.scoreCard = this.scoreCard;
            //Skapar ett event till föräldracomponenten "course"
            this.updateCourse();

            this.setDefaults();
            this.editing = false;
            this.editedCourse = null;

        }

    }
});