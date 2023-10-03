function removeMarkers(){
    for(i=0; i<markers.length; i++) {
        map.removeLayer(markers[i]);
    }  
}

function placeCircle(lat, lon, colour){
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
            L.marker([element.lat, element.lon]).addTo(map)
            .bindPopup(
            'Bench!<br>' 
            + element.lat + ', ' + element.lon +
            '<br><a href="https://www.google.co.uk/maps/dir//' + element.lat + ',' + element.lon + '" target="_blank">Google Maps Directions</a>' +
            '<br><a href="https://www.openstreetmap.org/directions?from=&to=' + element.lat + '%2C' + element.lon + '#map=17/' + element.lat + '/' + element.lon + '" target="_blank">OSM Directions</a>')
        );
    });
}

function handleResult(result, lat, lon){
    if(result.elements.length == 0){
        benchless.textContent = `There are no mapped benches within ${searchRadius}m. :(`;
        placeCircle(lat, lon, "red");
    }else{
        benchless.textContent = "";
        placeMarkers(result);
        placeCircle(lat, lon, "green");
    } 
}