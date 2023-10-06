const api = require("../js/api");

//TODO: mock the API - using real API is slower and results in 'impure' tests.

test("api should return data with generator string containing 'Overpass API'", async () => {
    const result = await api.getBenchesByCoordinates(50.71932253137134, -3.5311879914523763, 1000);
    expect(result.generator).toMatch('Overpass API');
});

test("api should return data list of elements >= 0", async () => {
    const result = await api.getBenchesByCoordinates(50.71932253137134, -3.5311879914523763, 1000);
    expect(result.elements.length).toBeGreaterThanOrEqual(0);
});
