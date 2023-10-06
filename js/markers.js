function removeMarkers(map, markers){
    for(i = 0; i < markers.length; i++) {
        map.removeLayer(markers[i]);
    }  
}

function placeCircle(lat, lon, colour, markers){
    var circle = L.circle([lat, lon], {
        color: colour,
        fillColor: colour,
        fillOpacity: 0.2,
        radius: searchRadius
    }).addTo(map);
    markers.push(circle);
}

function placeMarkers(result){
    result.elements.forEach(element => {
        markers.push(
            L.marker([element.lat, element.lon], {alt: `Bench at latitude ${element.lat}, longitude ${element.lon}.`}).addTo(map)
            .bindPopup(
            'Bench!<br>' 
            + element.lat + ', ' + element.lon +
            '<br><a href="https://www.google.co.uk/maps/dir//' + element.lat + ',' + element.lon + '" target="_blank">Google Maps Directions</a>' +
            '<br><a href="https://www.openstreetmap.org/directions?from=&to=' + element.lat + '%2C' + element.lon + '#map=17/' + element.lat + '/' + element.lon + '" target="_blank">OSM Directions</a>')
        );
    });
}

module.exports = { removeMarkers: removeMarkers };