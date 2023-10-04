function setTextContent(textObject, newContent){
    textObject.textContent = newContent;
}

function handleResult(result, lat, lon){
    if(result.elements.length == 0){
        setTextContent(benchless, `There are no mapped benches within ${searchRadius}m. :(`);
        placeCircle(lat, lon, "red", markers);
        return false;
    }else{
        setTextContent(benchless, "");
        placeMarkers(result);
        placeCircle(lat, lon, "green", markers);
        return true;
    }
}

module.exports = { setTextContent: setTextContent, handleResult: handleResult };