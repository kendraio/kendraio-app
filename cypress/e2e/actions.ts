import { loadFlowCode } from '../support/helper';

// tslint:disable: quotemark
/// <reference types="Cypress" />


describe('Actions block type', () => {

    // beforeEach(() => {
    //     // Prevent external network request for adapter config
    //     cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
    //         fixture: 'adapterConfig.json'
    //     });

    //     // Prevent external network requests for Workflow cloud
    //     cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
    //         fixture: 'workflow-cloud.json'
    //     });

    //     // Prevent external network requests for fonts with empty CSS rule 
    //     cy.intercept('https://fonts.googleapis.com/\*\*', "\*{ }");
    // });

    it('should return a single set of results. Without pagination', () => {
        cy.intercept({
            url: 'https://example.com/data'
        }, {
            statusCode: 200,
            body: '["hippo", "giraffe"]'
        });

        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/data"
            },
            {
                "type": "debug",
                "open": 2,
                "showData": true
            }
        ]);
        cy.contains('hippo');
        cy.contains('giraffe');
    });
});

