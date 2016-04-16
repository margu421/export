angular.module('app').component('rules', {
    templateUrl: '/play/rules.html',
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