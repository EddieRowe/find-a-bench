var map = new L.Map('map').setView(new L.LatLng(50.72556, -3.52695), 3);
var markers = new Array();
var searchRadius = 1000;

var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
var esri = new L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles © Esri'});
      
var baseMaps = {
    "OSM Map View": osm,
    "ESRI Satellite View": esri
};

var layerControls = L.control.layers(baseMaps, null);
layerControls.addTo(map);

getGeoLocation();

// Right-click / long tap
map.on("contextmenu", async function (event) {
    setTextContent(loc, `Chosen location: ${event.latlng.lat}, ${event.latlng.lng}`)
    //setLocText(`Chosen location: ${event.latlng.lat}, ${event.latlng.lng}`);
    map.setView(new L.LatLng(event.latlng.lat, event.latlng.lng), 14);
    removeMarkers(map, markers);
    handleResult(await getBenchesByCoordinates(event.latlng.lat, event.latlng.lng), event.latlng.lat, event.latlng.lng);  
});