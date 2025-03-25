import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />

describe('JSON Dereference Block', () => {

    it('should successfully dereference a valid JSON schema from a URL', () => {
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

        cy.contains('Full Name');
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
            },rom
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
        loadFlowCode([
            {
                "type": "form",
                "label": "Save",
                "hasSubmit": false,
                "schemaGetter": "{\"jsonSchema\": {\"type\": \"object\", \"properties\": {\"firstName\": {\"type\": \"string\", \"title\": \"First Name\", \"default\": \"Johnny\"}, \"lastName\": {\"type\": \"string\", \"title\": \"Last Name\"}}}}",
                "blockComment": "string direclty, containing json object"
            },
            {
                "type": "debug",
                "open": 3,
                "showData": true
            }
        ]);

        cy.get(".mat-mdc-input-element").should('exist');
    });
});