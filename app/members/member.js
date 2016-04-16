angular.module('app').component('member', {
    templateUrl: '/members/member.html',
    bindings: {
        currentAuth: '='
    },
    controller: function (fbRef, $firebaseObject, auth, $location) {
       this.loggedIn = !!this.currentAuth;
        
       this.member = $firebaseObject(fbRef.getMembersRef().child(auth.$getAuth().uid));
       
       this.save = function () {
           this.member.$save();
       }
       
       this.cancel = function () {
           $location.path('/home');
       }
       
        this.logout = function () {
            auth.$unauth();
            console.log("Utloggad");
            $location.path('/home');
        }
        
        var authData = auth.$getAuth();
        this.memberId = authData.uid;
    }
})