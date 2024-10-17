import { TestBed } from '@angular/core/testing';

import { DirtyDialogService } from './dirty-dialog.service';

describe('DirtyDialogService', () => {
  let service: DirtyDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirtyDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
