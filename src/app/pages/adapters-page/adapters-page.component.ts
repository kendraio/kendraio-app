import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { AdaptersService } from '../../services/adapters.service';

@Component({
  selector: 'app-adapters-page',
  templateUrl: './adapters-page.component.html',
  styleUrls: ['./adapters-page.component.scss']
})
export class AdaptersPageComponent implements OnInit {

  adapters$;

  get enabled() { return this.adapters.enabledAdapters; }

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly adapters: AdaptersService
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Adapters');
    this.adapters$ = this.adapters.adapters$;
  }

  enableAdapter(name) {
    this.adapters.enableAdapter(name);
  }

  disableAdapter(name) {
    this.adapters.disableAdapter(name);
  }

  enableAll() {
    this.adapters.enableAll();
  }
}
