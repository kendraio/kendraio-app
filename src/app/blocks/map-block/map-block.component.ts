import {Component} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {latLng, marker, tileLayer} from 'leaflet';
import {get, isArray, set} from 'lodash-es';

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
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
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
  markerClusterData = [];
  markerClusterOptions = {};

  onConfigUpdate(config: any) {
    this.height = get(config, 'height', 500);
    set(this.options, 'zoom', get(config, 'zoom', 8));
    const latln = get(config, 'latlng', [51.505, -0.09]);
    set(this.options, 'center', latLng(latln[0], latln[1]));
  }

  onData(data: any, firstChange: boolean) {
    if (isArray(data)) {
      this.layers = data.map(({ lat, long, label }) => marker(latLng(lat, long)).bindPopup(label));
    }
  }
}
