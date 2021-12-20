import { TestBed} from '@angular/core/testing'
import { SharedStateService } from './shared-state.service';


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
    expect(state.global).toBeDefined();
  })

  it ('get should return a top level local path', () => {
    service.setValue('key','value');
    const state = service.state;    
    expect(state.local).toBeDefined();
  })

  it ('should allow string values to be saved to the local state', () => {
    service.setValue('local.key','value');
    const state = service.state;
    expect(state.local.key).toBe('value');
  })

  it ('should not add a blank key if an object is passed to state.local', () => {
    service.setValue('local',{'key':"value"});
    const state = service.state;
    expect(service.getValue('local.key')).toBe('value');
  })

});
