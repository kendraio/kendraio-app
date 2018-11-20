import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

@Component({
  selector: 'app-waveform',
  templateUrl: './waveform.component.html',
  styleUrls: ['./waveform.component.scss']
})
export class WaveformComponent implements OnInit, AfterViewInit {

  @Input() item;
  @ViewChild('waveform') waveform: ElementRef;

  wavesurfer;

  @Output() clipUpdate = new EventEmitter<any>();

  constructor(
    private readonly zone: NgZone
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.wavesurfer = WaveSurfer.create({
      container: this.waveform.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple',
      plugins: [
        RegionPlugin.create({
          regions: Object.keys(this.item['regions'] || {}).map(key => {
            return {
              id: this.item['regions'][key].id,
              start: this.item['regions'][key].start,
              end: this.item['regions'][key].end,
            }
          }),
          dragSelection: {
            slop: 5
          }
        })
      ]
    });
    this.wavesurfer.on('region-update-end', ({ id, start, end }, _) => {
      this.zone.run(() => {
        this.clipUpdate.emit({ id, start, end });
      });
    });
    if (this.item['file']) {
      this.wavesurfer.load(this.item['file']);
    }
  }
}
