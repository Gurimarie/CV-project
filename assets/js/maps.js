function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 53.619261,
            lng: 3.134766
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [{
        lat: 53.619261,
        lng: -3.134766
    }, {
        lat: 40.619261,
        lng: 3.134766
    }, {
        lat: 40.619261,
        lng: 3.134766
    }, {
        lat: 66.619261,
        lng: 3.134766
    }];
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};