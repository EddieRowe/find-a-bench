function getGeoLocation(){
    if (!navigator.geolocation) {
        setTextContent(loc, `Location not supported by browser.`);
    } else {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
}

function geoError() {
    setTextContent(loc, `Failed to get your location! \nDoes your device have location enabled? \nDid you allow permission?`);
}

async function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    setTextContent(loc, `Your location: ${lat}, ${lon}`);
    map.setView(new L.LatLng(lat, lon), 14);
    removeMarkers(map, markers); 
    handleResult(await getBenchesByCoordinates(lat, lon, searchRadius), lat, lon); 
}