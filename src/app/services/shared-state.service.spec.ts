import { TestBed} from '@angular/core/testing'
import { SharedStateService, STATE_ROOT_GLOBAL, STATE_ROOT_FLAGS, STATE_ROOT_FLAGS_SOURCE, STATE_ROOT_LOCAL } from './shared-state.service';
import { get, set} from 'lodash-es';

//import { RouterTestingModule } from '@angular/router/testing'



describe('SharedStateService', () => {
  let service: SharedStateService;  
//@todo: Find the correct way to fake the current location
 // let locationStub = {
 //   path : function(){return "testing/stub"}
 // }

  beforeEach(() => {    
    //location = jasmine.createSpyObj(locationStub);
    TestBed.configureTestingModule({});    
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
    expect(service.getValue('local.key')).toBe('value');
  })

   it ('should allow flags to be set',() =>{
     service.setValue('flags.devel',true);
     expect(service.getValue(STATE_ROOT_FLAGS+'.devel')).toBe(true);
     expect(service.getValue(STATE_ROOT_FLAGS_SOURCE+'.devel')).toBe(true);
     const state = service.state;
     expect(get(state,STATE_ROOT_FLAGS_SOURCE+'.devel')).toBe(true);     
   })
});
