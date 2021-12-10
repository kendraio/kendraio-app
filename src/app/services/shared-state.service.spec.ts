import { TestBed} from '@angular/core/testing';
import { SpyLocation } from '@angular/common/testing'
import { SharedStateService } from './shared-state.service';
import { loadFlowCode } from '../../../cypress/support/helper';


describe('SharedStateService', () => {
  let service: SharedStateService;  

  beforeEach(() => {    
    //location = jasmine.createSpyObj(locationStub);
    TestBed.configureTestingModule({      
    });    
    service = TestBed.inject(SharedStateService);
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

  it ('get should return a top level global path', () => {
    service.setValue('key','value');
    const state = service.state;
    console.log(state);
    expect(state.global).toBeDefined();
  })

  it ('get should return a top level local path', () => {
    service.setValue('key','value');
    const state = service.state;
    console.log(state);
    expect(state.local).toBeDefined();
  })

});
