import {Directive, HostBinding} from '@angular/core';
import {AppSettingsService} from '../services/app-settings.service';

@Directive({
  selector: '[appDebugOnly]'
})
export class DebugOnlyDirective {

  @HostBinding('hidden')
  isHidden = true;

  constructor(
    private readonly settings: AppSettingsService
  ) {
    this.isHidden = !this.settings.get('debugMode', false);
  }

}
