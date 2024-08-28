import {Component} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {icon, latLng, marker, tileLayer, divIcon, geoJSON, } from 'leaflet';
import {get, isArray, set} from 'lodash-es';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-map-block',
  templateUrl: './map-block.component.html',
  styleUrls: ['./map-block.component.scss']
})
export class MapBlockComponent extends BaseBlockComponent {

  height = 500;
  options = {
    layers: [
      tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>
contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>`
        })
    ],
    zoom: 8,
    center: latLng(51.505, -0.09)
  };
  layers = [];
  markerClusterData: Marker[] = [];
  markerClusterOptions = {};

  // Country GeoJSON provider base URL
  countryProviderBaseURL = 'https://raw.githubusercontent.com/AshKyd/geojson-regions/main/public/countries/50m/';
  countryExtension = '.geojson';

  // Country area polygon styling
  countryStyle = {
    color: 'gray',
    weight: 2,
    opacity: 0.3,
    fillColor: 'gray',
    fillOpacity: 0.5
  };

  // In-memory cache for country GeoJSON data
  countryCache: { [key: string]: any } = {};

  onConfigUpdate(config: any) {
    this.height = get(config, 'height', 500);
    set(this.options, 'zoom', get(config, 'zoom', 8));
    const latln = get(config, 'latlng', [51.505, -0.09]);
    set(this.options, 'center', latLng(latln[0], latln[1]));

    // Allow setting custom country provider base URL
    this.countryProviderBaseURL = get(config, 'countryProviderBaseURL', this.countryProviderBaseURL);
    // Allow setting custom country extension
    this.countryExtension = get(config, 'countryExtension', this.countryExtension);

    // Update country style from config
    this.countryStyle = {
      ...this.countryStyle,
      ...get(config, 'countryStyle', {})
    };
  }

  private fetchGeoJsonData(countryCode: string): Promise<any> {
    if (this.countryCache[countryCode]) {
      return Promise.resolve(this.countryCache[countryCode]);
    } else {
      const geoJsonFilename = `${countryCode}${this.countryExtension}`;
      return fetch(`${this.countryProviderBaseURL}${geoJsonFilename}`)
        .then(response => response.json())
        .then(geojsonData => {
          this.countryCache[countryCode] = geojsonData; // Cache the data
          return geojsonData;
        });
    }
  }

  onData(data: any, firstChange: boolean) {
    console.log('hello', data)
    if (isArray(data)) {
      this.layers = [];
      
      data.forEach(({ lat, long, label, customPin, country }) => {
        let markerIcon;
        if (customPin) {
          const sanitizedHtml = DOMPurify.sanitize(customPin);
          markerIcon = divIcon({
            html: `<div style="font-size: 25px;">${sanitizedHtml}</div>`,
            iconSize: [25, 41],
            className: 'custom-marker' // avoid the ugly default marker class
          });
        } else {
          markerIcon = icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: '/assets/marker-icon.png',
            shadowUrl: '/assets/marker-shadow.png'
          });
        }
        
        if (lat && long) {
          this.layers.push(
            marker(latLng(lat, long), { icon: markerIcon }).bindPopup(label)
          );
        }
  
        if (country) {
          const countryCode = country.toUpperCase();
          this.fetchGeoJsonData(countryCode).then(geojsonData => {
            const geojsonLayer = geoJSON(geojsonData, {
              style: this.countryStyle,
            });
            this.layers.push(geojsonLayer);
          });
        }
      });
    }
  }
}
