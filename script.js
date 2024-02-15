// GeoLocation API

// Map Position

const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 13);

  marker.bindPopup("<strong>Hello World</strong> <br> This is my location");
});

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup("A pretty CSS popup.<br> Easily customizable.")
//   .openPopup();

// ! Get Current Position
// function curSuccess(pos) {
//   const coords = pos.coords;
//   console.log(`Latitude: ${coords.latitude}`);
//   console.log(`Longitude: ${coords.longitude}`);
//   console.log(`Within: ${coords.accuracy} meters`);
// }

// function curError(error) {
//   console.log(`Error: ${error.code} - ${error.message}`);
// }

// const curOptions = {
//   enableHighAccuracy: true, // Use GPS if available
//   timeout: 5000, // Time to wait to stop trying for location
//   maximumAge: 0, // Do not use a cached position
// };

// navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// ! WatchPosition

// const target = {
//   latitude: 41.7387463,
//   longitude: -71.2138621783,
// };

// function watchSuccess(pos) {
//   const coords = pos.coords;

//   if (
//     target.latitude === coords.latitude &&
//     target.longitude === coords.longitude
//   ) {
//     console.log("You have reached your destination!");
//     navigator.geolocation.clearWatch(id);
//   }
// }

// function watchError(error) {
//   console.log(`Error: ${error.code} - ${error.message}`);
// }

// const watchOptions = {
//   enableHighAccuracy: true, // Use GPS if available
//   timeout: 5000, // Time to wait to stop trying for location
//   maximumAge: 0, // Do not use a cached position
// };

// const id = navigator.geolocation.watchPosition(
//   watchSuccess,
//   watchError,
//   watchOptions
// );
