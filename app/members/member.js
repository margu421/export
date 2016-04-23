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
           Materialize.toast('Sparat!', 3000, 'rounded');
       }
       
       this.cancel = function () {
           $location.path('/');
       }
       
        this.logout = function () {
            auth.$unauth();
            Materialize.toast('Utloggad!', 3000, 'rounded');
            $location.path('/');
        }
        
        var authData = auth.$getAuth();
        this.memberId = authData.uid;
    }
})