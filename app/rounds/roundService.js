angular.module('app').factory('roundService', function ($firebaseArray) {
    var RoundService = $firebaseArray.$extend({
        //här kan man lägga extendad functionalitet till CourseService, typ
        //om man vill summera totala scoren på en viss bana
        getNumberOfRounds: function () {
            var numberOfRounds = 0;
            angular.forEach(this.$list, function (elem) {
                numberOfRounds++;
            })
            return numberOfRounds;
        },
        getOngoingRound: function () {
            var ongoingRound = null;
            angular.forEach(this.$list, function (elem) {
              if(elem.ongoing) {
                  ongoingRound = elem;
              }
            })
            return ongoingRound;
        },
        getRoundById: function (id) {
            angular.forEach(this.$list, function (elem) {
              if(elem.$id) {
                  ongoingRound = elem;
              }
            })
            return ongoingRound;
        }        
    });
    return function (ref) {
        return new RoundService(ref);
    }
});

