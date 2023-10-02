# find-a-bench
![GitHub](https://img.shields.io/github/license/EddieRowe/find-a-bench)
![Build](https://img.shields.io/github/actions/workflow/status/EddieRowe/find-a-bench/pages/pages-build-deployment)
![GitHub language count](https://img.shields.io/github/languages/count/EddieRowe/find-a-bench)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/EddieRowe/find-a-bench/main)

## Displays your nearest benches as markers on a map - once clicked they can open directions via Google Maps or OSM.

### Created with JavaScript, HTML, CSS, Leaflet.js, and the Overpass API. Continuously deployed via GitHub Actions.

### [Live Demo](https://eddierowe.github.io/find-a-bench/)

___

## FAQ
> Q: Why do I keep getting the error "Failed to get your location!"?

A: This could be due to not allowing your browser permission to access your location. If you are on mobile you may need to make sure you have Location turned on in your settings.

> Q: Why are no benches being shown near me? I know there are some!

A: Bench data is fetched from OpenStreetMap's [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) - if something is missing you can [add it to OpenStreetMap.](https://wiki.openstreetmap.org/wiki/Contribute_map_data)

___
## Todo:
- Improve mobile formatting (CSS & number of markers)
