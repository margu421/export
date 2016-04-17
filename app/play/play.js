angular.module('app').component('play', {
    templateUrl: '/play/play.html',
    bindings: {
        courses: '=',
        members: '='        },
    controller: function (fbRef, $firebaseArray, $firebaseObject, $location) {
       this.players = [];
            
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
           console.log(this.players)
       }     
              
       this.roundTypes = ["Tävling", "Träning"];
       this.roundStartTime = new Date(); 
       this.roundFinishTime = undefined;    
              
       this.saveRound = function () {
         //Fortsätt här för att lägga till spelare i runda
         console.log(this.round);

         this.rounds.$add({
                startTime: new Date (),
                type: this.round.type, 
                course: this.round.course, 
                players: this.players});
         $location.path('/scorecard');

         
         }
       
       this.cancel = function () {
           $location.path('/home');
       }
      
    }
})