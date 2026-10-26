// Get the paragraph element used to display the result
let x = document.getElementById("geolocation");

// Called when the button is clicked: start getting the geolocation
function getGeolocation() {
    if (navigator.geolocation) {
        // The Geolocation API is supported: get the current position
        // and pass it to the callback function
        navigator.geolocation.getCurrentPosition(showGeolocation);
    } else {
        // Show a message if the browser does not support the API
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Callback function executed when the position data is available.
// The position object contains coords.latitude and coords.longitude
function showGeolocation(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}
