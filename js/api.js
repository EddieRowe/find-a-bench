async function getBenchesByCoordinates(lat, lon){
    const api = await fetch('https://www.overpass-api.de/api/interpreter?', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:
        `[out:json][timeout:25];node(around:${searchRadius},${lat},${lon})[amenity=bench];out center;`
    });

    return await api.json();
}