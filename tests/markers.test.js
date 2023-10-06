const markers = require("../js/markers");

// Mock leaflet.js map
class myMap {
    constructor(layers){
        this.layers = layers;
    }
    removeLayer(layer){        
        this.layers = this.layers.splice(layer, 1);
    }
    addTo(layer){
        this.layers.push(layer);
    }
}

var myMarkers = [0, 1, 2];
const map = new myMap(myMarkers);

test("map.layers.length should Equal 0", () => {
    markers.removeMarkers(map, myMarkers);
    expect(map.layers.length).toEqual(0);
});

// global.L = { circle: jest.fn(function () {
// }) }

// test("placed circle should be...", () => {

// });