angular.module('app').component('listTrips', {
    templateUrl: '/trips/listTrips.html',
    bindings: {
        trips: '=',
        selectTrip: "&"
    },
    controller: function (fbRef, tripService) {

        this.trips = tripService(fbRef.gettripsRef());
        
        this.ongoingTrip = this.trips.getOngoingtrip();
        
        this.showLeaderBoard = function (trip) {
            this.selectTrip({trip: trip}); 
        }
               
        this.endTrip = function ($id) {
            var endTime = new Date();
            var trip = fbRef.getTripsRef().child($id);
            trip.update({
                "ongoing": false,
                "endTime": endTime.toLocaleTimeString()
            });
        }
        
    }
}
)