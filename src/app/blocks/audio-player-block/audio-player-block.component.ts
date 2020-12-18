import {Component, ViewChild} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get, isArray} from 'lodash-es';
import {mappingUtility} from '../mapping-block/mapping-util';
import {WaveformComponent} from '../../components/waveform/waveform.component';

@Component({
  selector: 'app-audio-player-block',
  templateUrl: './audio-player-block.component.html',
  styleUrls: ['./audio-player-block.component.scss']
})
export class AudioPlayerBlockComponent extends BaseBlockComponent {

  mapping = 'data.url';
  titleMapping = '``';
  playerUrl = '';
  playerTitle = '';

  isPlaying = false;

  onConfigUpdate(config: any) {
    this.mapping = get(config, 'mapping', 'data.url');
    this.titleMapping = get(config, 'titleMapping', '``');
  }

  onData(data: any, firstChange: boolean) {
    this.playerTitle = mappingUtility({ data: this.model, context: this.context }, this.titleMapping);
    this.playerUrl = mappingUtility({ data: this.model, context: this.context }, this.mapping);
  }

  playPause(player: WaveformComponent) {
    if (player) {
      player.playPause();
      this.isPlaying = player.isPlaying();
    }
  }

}
