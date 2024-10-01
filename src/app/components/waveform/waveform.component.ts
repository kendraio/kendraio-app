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
import WaveSurfer from 'wavesurfer.js';
// import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

@Component({
  selector: 'app-waveform',
  templateUrl: './waveform.component.html',
  styleUrls: ['./waveform.component.scss']
})
export class WaveformComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() title = '';
  @Input() file;
  @Input() fileUrl;
  // @Input() item;
  @Output() ready = new EventEmitter<any>();
  @Output() play = new EventEmitter<any>();
  @Output() pause = new EventEmitter<any>();
  @Output() finish = new EventEmitter<any>();
  @Output() error = new EventEmitter<any>();
  @Output() seek = new EventEmitter<any>();

  @ViewChild('waveform', { static: true }) waveform: ElementRef;

  currentTime;
  duration;

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
      waveColor: '#babfc7',
      progressColor: '#181d1f',
      cursorColor: '#181d1f',
      cursorWidth: 2,
      barWidth: 2,
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
    this.wavesurfer.on('ready', (e) => {
      console.log('ready', e);
      this.zone.run(() => {
        this.duration = this.wavesurfer.getDuration();
        this.currentTime = this.wavesurfer.getCurrentTime();
        this.ready.emit(e);
      });
    });
    this.wavesurfer.on('play', (e) => {
      console.log('play', e);
      this.zone.run(() => {
        this.play.emit(e);
      });
    });
    this.wavesurfer.on('pause', (e) => {
      console.log('pause', e);
      this.zone.run(() => {
        this.pause.emit(e);
      });
    });
    this.wavesurfer.on('finish', (e) => {
      console.log('finish', e);
      this.zone.run(() => {
        this.finish.emit(e);
      });
    });
    this.wavesurfer.on('error', (e) => {
      console.log('error', e);
      this.zone.run(() => {
        this.error.emit(e);
      });
    });
    this.wavesurfer.on('seek', (e) => {
      console.log('seek', e);
      this.zone.run(() => {
        this.currentTime = this.wavesurfer.getCurrentTime();
        this.seek.emit(e);
      });
    });
  }

}
