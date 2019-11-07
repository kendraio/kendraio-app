import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get} from 'lodash-es';
import {YoutubeDataService} from '../../services/youtube-data.service';

@Component({
  selector: 'app-auth0-profile-data-block',
  templateUrl: './auth0-profile-data-block.component.html',
  styleUrls: ['./auth0-profile-data-block.component.scss']
})
export class Auth0ProfileDataBlockComponent extends BaseBlockComponent {

  skipFirst = false;
  provider = 'google-oauth2';
  error$ = this.yt.error$;
  isLoading = false;
  hasError = false;
  errorMessage = '';
  fetchAll = false;

  constructor(
    private readonly yt: YoutubeDataService
  ) {
    super();
  }

  onConfigUpdate(config: any) {
    this.skipFirst = get(config, 'skipFirst', false);
    this.provider = get(config, 'provider', 'google-oauth2');
    this.fetchAll = get(config, 'fetchAll', false);
  }

  onData(data: any, firstChange: boolean) {
    if (firstChange && this.skipFirst) {
      return;
    }

    this.hasError = false;
    this.isLoading = true;
    const profilePromise = this.fetchAll ? this.yt.getAllProfileData() : this.yt.getProfileData(this.provider);
    profilePromise.then(value => {
      this.isLoading = false;
      this.output.emit(value);
    }).catch(err => {
      this.isLoading = false;
      this.hasError = true;
      this.errorMessage = err.message;
    });
  }

}
