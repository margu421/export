angular.module('app').component('login', {
    templateUrl: '/security/login.html',
    //components har bara isolated scope. Här säger vi till komponenten att data kommer in (från app.js login-route resolve för inloggade användaren)
    bindings: {
        currentAuth: '='
    },
    controller: function (auth, $location) {
        this.loggedIn = !!this.currentAuth;

        this.login = function (email, pass) {
            auth.$authWithPassword({
                email: email,
                password: pass
            }).then(function (authData) {
                console.log("Inloggad som:", authData.uid);
                $location.path('/home');
            }).catch(function (error) {
                this.errorMessage = error.code;
                console.error("Gick inte att logga in:", error);
            });

        }

        this.logout = function () {
            auth.$unauth();
            console.log("Utloggad");
            $location.path('/home');
        }
    }
})
