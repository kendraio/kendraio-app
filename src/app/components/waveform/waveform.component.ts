import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone, OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';
// import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

@Component({
  selector: 'app-waveform',
  templateUrl: './waveform.component.html',
  styleUrls: ['./waveform.component.scss']
})
export class WaveformComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() file;
  @Input() fileUrl;
  // @Input() item;
  @ViewChild('waveform', { static: true }) waveform: ElementRef;

  wavesurfer;

  // @Output() clipUpdate = new EventEmitter<any>();

  constructor(
    private readonly zone: NgZone
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (this.fileUrl && this.wavesurfer) {
      this.wavesurfer.load(this.fileUrl);
    }
  }

  playPause() {
    this.wavesurfer.playPause();
  }

  isPlaying() {
    return this.wavesurfer.isPlaying();
  }

  ngAfterViewInit() {
    this.wavesurfer = WaveSurfer.create({
      container: this.waveform.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple',
      plugins: [
        // RegionPlugin.create({
        //   regions: Object.keys(this.item['regions'] || {}).map(key => {
        //     return {
        //       id: this.item['regions'][key].id,
        //       start: this.item['regions'][key].start,
        //       end: this.item['regions'][key].end,
        //     };
        //   }),
        //   dragSelection: {
        //     slop: 5
        //   }
        // })
      ]
    });
    // this.wavesurfer.on('region-update-end', ({ id, start, end }, _) => {
    //   this.zone.run(() => {
    //     this.clipUpdate.emit({ id, start, end });
    //   });
    // });
    if (this.file) {
      this.wavesurfer.loadBlob(this.file);
    }
    if (this.fileUrl) {
      this.wavesurfer.load(this.fileUrl);
    }
  }

}
