// Set up a config object
const config = {
    googleApiKey: "AIzaSyB7xT16UiXsYTLS5_LaGLswFCPmA5tNVK8",
    layouts: {
        colors: {
            L: "#660066",
            S: "rgb(86,101,138)",
            H: "#ccaa39"
        }
    }
};

// Set up needed variables
let map;
// initLocation will get the users geolocation
let initLocation;
let memberMarkers = [];
let locationMarkers = [];
let members = [];
let locations = [];



function initMap() {
    // Set the styles for the map
    let mapStyles =
        [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }
        ];

    // Set options for google map, center = Vancouver
    let options = {
        zoom: 9,
        center: { lat: 45.633331, lng: -122.599998 },
        styles: mapStyles
    };

    // Create the map
    map = new google.maps.Map(document.getElementById("map"), options);
}

// Attach the new element to the head section and set up URL
function newMapElement() {
    let mapElement = document.createElement("script");
    mapElement.async = true;
    mapElement.defer = true;
    mapElement.src =
        "https://maps.googleapis.com/maps/api/js?key=" +
        config.googleApiKey +
        "&callback=initMap";

    document.head.appendChild(mapElement);
}

// Create the new element (map)
newMapElement();