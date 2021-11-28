import { TestBed } from '@angular/core/testing';

import { SharedContextService } from './shared-context.service';

describe('SharedContextService', () => {
  let service: SharedContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the same value as is set', () => {
    expect(service.setValue('key','value')).toBe('value');
  })

  it('should return a value when get is successful', () => {
    service.setValue('key','value');
    expect(service.getValue('key')).toBe('value');
  })

  it('should return undefined when an a non-existent key is requested', () => {
    expect(service.getValue('key')).toBe(undefined);
  })
});
