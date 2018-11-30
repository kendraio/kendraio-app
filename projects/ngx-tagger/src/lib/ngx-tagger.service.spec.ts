import { TestBed } from '@angular/core/testing';

import { NgxTaggerService } from './ngx-tagger.service';

describe('NgxTaggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTaggerService = TestBed.get(NgxTaggerService);
    expect(service).toBeTruthy();
  });
});
