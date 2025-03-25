import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />

describe('JSON Dereference Block', () => {

    it('should successfully dereference a valid JSON schema from a URL', () => {
        const mockSchema = {
            "jsonSchema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "title": "John Doe"
                    }
                }
            }
        };

        cy.intercept({ 
            url: 'https://example.com/valid-schema.json'
        }, {
            statusCode: 200,
            body: mockSchema
        });

        loadFlowCode([
            {
                "type": "mapping",
                "mapping": "`https://example.com/valid-schema.json`"
            },
            {
                "type": "debug",
                "open": 5,
                "showData": true
            },
            {
                "type": "json-dereference-block",
            },
            {
                "type": "debug",
                "open": 5,
                "showData": true
            }
        ]);

        cy.contains('John Doe');
    });

    it('should display an error message when the URL is invalid', () => {
        loadFlowCode([
            {
                "type": "mapping",
                "mapping": "{ url: 'invalid-url' }" 
            },
            {
                "type": "json-dereference-block",
            }
        ]);

        cy.get('app-json-dereference-block').should('exist').within(() => {
            cy.contains('Error: Invalid URL format:').should('be.visible');
        });
    });

    it('should display an error message when the URL cannot be fetched', () => {
        cy.intercept({ url: 'https://example.com/not-found.json' 
        }, {
            statusCode: 404
        });

        loadFlowCode([
            {
                "type": "mapping",
                "mapping": "`'https://example.com/not-found.json`"
            },
            {
                "type": "json-dereference-block",
            }
        ]);

        cy.get('app-json-dereference-block').should('exist').within(() => {
            cy.contains('Error: Failed to fetch https://example.com/not-found.json').should('be.visible');
        });
    });

    it('should display an error if try to load content non JSON schema url', () => {
        const mockSchema = "test";
        cy.intercept({ url: 'https://example.com/no-json.txt'
        }, {
            statusCode: 200,
            body: mockSchema
        });

        loadFlowCode([
            {
                "type": "mapping",
                "mapping": "`https://example.com/no-json.txt`"
            },
            {
                "type": "json-dereference-block",
            },
            {
                "type": "debug",
                "open": 3,
                "showData": true
            }
        ]);

        cy.get('app-json-dereference-block').should('exist').within(() => {
            cy.contains('Error: Content type is not JSON:').should('be.visible');
        });
    });
});