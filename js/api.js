function error() {
    loc.textContent = `Failed to get your location! \nDoes your device have location enabled? \nDid you allow permission?`;
}

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    loc.textContent = `Your location: ${lat}, ${lon}`;    
    getBenchesByCoordinates(lat, lon);
}

async function getBenchesByCoordinates(lat, lon){
    map.setView(new L.LatLng(lat, lon), 14);
    removeMarkers();

    const api = await fetch('https://www.overpass-api.de/api/interpreter?', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:
        `[out:json][timeout:25];node(around:${searchRadius},${lat},${lon})[amenity=bench];out center;`
    });

    const result = await api.json();
    handleResult(result, lat, lon);     
}