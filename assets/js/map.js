// The latitude and longitude coordinates 29.785786, -95.824394 correspond to Katy, Texas.
var mymap = L.map('map').setView([29.785786, -95.824394], 11);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2NzdHJhdWIiLCJhIjoiY2tpd2x1OTgyMGw2eDJxcXRqYWs0YXNrNSJ9.Nx7D2d_DK_HxjN10WQZS7g',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoiY2NzdHJhdWIiLCJhIjoiY2tpd2x1OTgyMGw2eDJxcXRqYWs0YXNrNSJ9.Nx7D2d_DK_HxjN10WQZS7g',
  }
).addTo(mymap);

var circle = L.circle([29.785786, -95.824394], {
  color: 'purple',
  fillColor: 'purple',
  fillOpacity: 0.25,
  radius: 2000,
}).addTo(mymap);
