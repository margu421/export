angular.module('app').component('play', {
    templateUrl: '/play/play.html',
    bindings: {
        currentAuth: '='
    },
    controller: function (auth, $location) {
        this.loggedIn = !!this.currentAuth;

        this.logout = function () {
            auth.$unauth();
            console.log("Utloggad");
            $location.path('/home');
        }
        
        var authData = auth.$getAuth();
        this.user = authData.uid;
    }
})