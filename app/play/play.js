angular.module('app').component('play', {
    templateUrl: '/play/play.html',
    bindings: {
        courses: '=',
        members: '='        },
    controller: function (auth, fbRef, $firebaseArray, $firebaseObject, $location) {
       this.players = [];
       this.roundStartTime = new Date();
       this.roundTypes = ["Tävling", "Träning"];
       this.roundFinishTime = undefined;     
       this.startingFieldCreated = false;
       this.startNumbersAssigned = false;

       this.rounds = $firebaseArray(fbRef.getRoundsRef());  

       this.assignStartNumbers = function () {
           for (var i=0; i<this.players.length; i++) {
               this.players[i].startNumber = Math.round(Math.random()*100);
           }
           this.startNumbersAssigned = true;
       }
       
       this.createStartingField = function () {
           this.players = [];
           for (var i=0; i<this.members.length; i++) {
               if (this.members[i].playsThisRound) {
               this.players.push({name: this.members[i].name, id: this.members[i].$id});    
               }
               
           }
           this.startingFieldCreated = true;
       }     
                     
       this.saveRound = function () {
        
         this.rounds.$add({
                startTime: this.roundStartTime.toString(),
                type: this.round.type, 
                course: this.round.course, 
                players: this.players,
                createdBy: auth.$getAuth().uid});
         $location.path('/scorecard');

         
         }
       
       this.cancel = function () {
           $location.path('/home');
       }
      
    }
})