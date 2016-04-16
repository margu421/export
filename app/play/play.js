angular.module('app').component('play', {
    templateUrl: '/play/play.html',
    bindings: {
        courses: '=',
        members: '='
        },
    controller: function (fbRef, $firebaseArray, $firebaseObject, $location) {
       
       this.rounds = $firebaseArray(fbRef.getRoundsRef());
       console.log(this.rounds);
       
       
       this.roundTypes = ["Tävling", "Träning"];
       this.roundStartTime = new Date(); 
       this.roundFinishTime = undefined;
       
       this.round.players = [];
       
              
       this.saveRound = function () {
         //Fortsätt här för att lägga till spelare i runda
         this.isPlayer
         this.rounds.$add(this.round.type);
         console.log(this.round);
         }
       
       this.cancel = function () {
           $location.path('/home');
       }
      
    }
})