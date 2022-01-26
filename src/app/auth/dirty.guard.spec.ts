import { TestBed } from '@angular/core/testing';

import { DirtyGuard } from './dirty.guard';

describe('DirtyGuard', () => {
  let guard: DirtyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DirtyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
