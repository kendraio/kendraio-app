import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />

describe('Comparison Block Capabilities', () => {
 
// Working default 
it('has a default result', () => {
    loadFlowCode([
      {
        "type": "mapping",
        "mapping": "{source:`one`, one:`one`, two:`two` }"
      },
      {
        "type":"comparison",
        "valueGetter":'data.source',
        "default":'default'
      },
      {
        "type":'debug'
      }
    ]);
    cy.contains('default');
    
    });

    // basic matching 

 it('returns a value for a matching comparison', () =>{
    loadFlowCode([
        {
          "type": "mapping",
          "mapping": "{ source:`one`, one:`one`, two:`two` }"
        },
        {
          "type":"comparison",
          "valueGetter":'data.source',
          "default":'default',
          "comparisons": [
            {
                operator:'==',
                target:'one',
                output:'one'
            }
          ]
        },
        {
          "type":'debug'
        }
    ]);
    cy.contains('one');
 });   




// value and jmespath targets 

it('returns a jmespath value for a matching comparison', () =>{
    loadFlowCode([
        {
          "type": "mapping",
          "mapping": "{ source:`one`, one:`one`, two:`two`, path:`one` }"
        },
        {
          "type":"comparison",
          "valueGetter":'data.source',
          "default":'default',
          "comparisons": [
            {
                operator:'==',
                target:'data.path',
                targetType:'jmespath',
                output:'path'
            }
          ]
        },
        {
          "type":'debug'
        }
    ]);
    cy.contains('path');
 });   


// multiple comparisons

it('keeps processing comparisons until it finds a matching comparison', () =>{
    loadFlowCode([
        {
          "type": "mapping",
          "mapping": "{ source:`two`, one:`one`, two:`two`  }"
        },
        {
          "type":"comparison",
          "valueGetter":'data.source',
          "default":'default',
          "comparisons": [
            {
                operator:'==',
                target:'one',                
                output:'first'
            },
            {
                operator:'==',
                target:'two',                
                output:'second'
            }
          ]
        },
        {
          "type":'debug'
        }
    ]);
    cy.contains('second');
 });   


// invalid comparison definitions

it('ignores badly formed comparisons', () =>{
    loadFlowCode([
        {
          "type": "mapping",
          "mapping": "{ source:`two`, one:`one`, two:`two`  }"
        },
        {
          "type":"comparison",
          "valueGetter":'data.source',
          "default":'default',
          "comparisons": [
            {
                operator:'==',
                target:'',                
                output:'first'
            },
            {
                operator:'==',
                target:'two',                
                output:'second'
            }
          ]
        },
        {
          "type":'debug'
        }
    ]);
    cy.contains('second');
 });   

 // nothing there

 it('can cope with a non-existent source value', () =>{
    loadFlowCode([
        {
          "type": "mapping",
          "mapping": "{ source:`two`, one:`one`, two:`two`  }"
        },
        {
          "type":"comparison",
          "valueGetter":'data.null',
          "default":'default',
          "comparisons": [
            {
                operator:'null',
                output:'null'
            }
          ]
        },
        {
          "type":'debug'
        }
    ]);
    cy.contains('null');
 });   

});
