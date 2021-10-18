import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {clone, get} from 'lodash-es';
import {BookmarkDataService} from '../../services/bookmark-data.service';

@Component({
  selector: 'app-variable-get',
  templateUrl: './variable-get.component.html',
  styleUrls: ['./variable-get.component.scss']
})
export class VariableGetComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  hasError = false;
  errorMessage = '';
  skipFirst = true;

  constructor(private readonly bookmarks: BookmarkDataService) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    this.skipFirst = get(this.config, 'skipFirst', true);
    if (this.skipFirst && get(changes, 'model.firstChange', false)) {
      return;
    }

    const variableName = get(this.config, 'name', 'UNKNOWN');

    const isSystemVar = get(this.config, 'systemVar', false);
    if (isSystemVar) {
      switch (variableName) {
        case 'bookmarked-flows':
          this.output.emit(this.bookmarks.activeBookmarks);
          return;
      }
    }

    const adapterName = get(this.context, 'app.adapterName', 'UNKNOWN');

    const key = `${adapterName}.variables.${variableName}`;
    try {
      let data = localStorage.getItem(key);
      try {
        data = JSON.parse(data);
      } catch {
        // just get data "neat"
      }
      if (!!data) {
        this.output.emit(clone(data));
      } else {
        this.output.emit(get(this.config, 'default'));
      }
    } catch (e) {
      this.errorMessage = e.message;
      this.hasError = true;
    }
  }
}
