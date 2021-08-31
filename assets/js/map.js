/* Latitude and longitude coordinates 29.785786, -95.824394
correspond to Katy, Texas. */
var map = L.map('map', {
  center: [29.785786, -95.824394],
  zoom: 11,
});

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2NzdHJhdWIiLCJhIjoiY2tzemtiZGtqMmUxYjJ2cGppc2x0cTQ3NSJ9.j3luLHafS6h_z50Mi5AsQA',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoiY2NzdHJhdWIiLCJhIjoiY2tzemtiZGtqMmUxYjJ2cGppc2x0cTQ3NSJ9.j3luLHafS6h_z50Mi5AsQA',
  }
).addTo(map);

var circle = L.circle([29.785786, -95.824394], {
  color: 'purple',
  fillColor: 'purple',
  fillOpacity: 0.25,
  radius: 2000,
}).addTo(map);
