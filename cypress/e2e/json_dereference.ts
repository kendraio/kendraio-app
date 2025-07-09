import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />

describe('JSON Dereference Block', () => {

    const mockSchema = {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Person",
        "description": "A person",
        "type": "object",
        "properties": {
            "name": {
                "$ref": "#/definitions/name"
            },
            "age": {
                "type": "integer",
                "description": "Age in years"
            }
        },
        "definitions": {
            "name": {
                "type": "string",
                "description": "Full name"
            }
        }
    };

    it('should successfully dereference a valid JSON schema from a URL', () => {

        cy.intercept('GET', 'https://test-library.murmurations.network/v2/schemas/people_schema-v0.1.0', {
            statusCode: 200,
            body: mockSchema,
             headers: { 'Content-Type': 'application/json' }
        })

        loadFlowCode([
            {
                "type": "mapping",
                "mapping": "`https://test-library.murmurations.network/v2/schemas/people_schema-v0.1.0`",
                "blockComment": ""
            },
            {
            "type": "json-dereference"
            },
            {
            "type": "mapping",
            "mapping": "{\n    \"jsonSchema\": \"data\"\n}",
            "blockComment": ""
            },
            {
                "type": "debug",
                "open": 5,
                "showData": true
            }
        ]);

        // cy.wait('@getSchema');
        cy.contains('Full name');
    });
    

    it('should display an error message when the URL is invalid', () => {
        loadFlowCode([
            {
                "type": "mapping",
                "mapping": "`people_schema-v0.1.0`",
                "blockComment": ""
            },
            {
                "type": "json-dereference"
            },
            {
                "type": "mapping",
                "mapping": "{\n    \"jsonSchema\": \"data\"\n}",
                "blockComment": ""
            },
            {
                "type": "debug",
                "open": 5,
                "showData": true
            }
        ]);

        cy.get('app-json-dereference-block').should('exist').within(() => {
            cy.contains("Error: Failed to construct 'URL': Invalid URL");
        });
    });
    

    it('should display a form from a schema passed to schemaGetter', () => {
        cy.intercept('GET', 'https://test-library.murmurations.network/v2/schemas/people_schema-v0.1.0', {
            statusCode: 200,
            body: mockSchema,
             headers: { 'Content-Type': 'application/json' }
        })

        loadFlowCode([
            {
                "type": "mapping",
                "mapping": "`https://test-library.murmurations.network/v2/schemas/people_schema-v0.1.0`",
                "blockComment": ""
            },
            {
                "type": "json-dereference"
            },
            {
                "type": "mapping",
                "mapping": "{\n    \"jsonSchema\": \"data\"\n}",
                "blockComment": ""
            },
            {
                "type": "form",
                "label": "Save",
                "hasSubmit": false,
                "schemaGetter": "data"
            },
            {
                "type": "debug",
                "open": 5,
                "showData": true
            }
        ]);

        cy.get(".mat-mdc-input-element").should('exist').should('have.length', 2);
    });
});