angular.module('app').component('promille', {
    templateUrl: '/leaderboard/promille.html',
    bindings: {
        },
    controller: function () {
        console.log("controller laddad");
        
        this.types = ["Öl", "Vin", "Sprit"] ;
        
    }       
})