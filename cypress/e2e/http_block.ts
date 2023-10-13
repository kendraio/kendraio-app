import { loadFlowCode } from '../support/helper';

// tslint:disable: quotemark
/// <reference types="Cypress" />


describe('HTTP Block Request', () => {

    beforeEach(() => {
        // Prevent external network request for adapter config
        cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
            fixture: 'adapterConfig.json'
        });

        // Prevent external network requests for Workflow cloud
        cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
            fixture: 'workflow-cloud.json'
        });

        // Prevent external network requests for fonts with empty CSS rule 
        cy.intercept('https://fonts.googleapis.com/\*\*', "\*{ }");
    });

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

    it('should return an error', () => {
        cy.intercept({
            url: 'https://example.com/data'
        }, {
            statusCode: 400,
            body: { error: {
                        error: "Http failure 400 Bad request",
                        error_description: "There was a problem with your request" 
                    }   
                }
        });

        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/data",
                "onError": {
                    "blocks": [
                        {
                            "type": "card",
                            "blocks": [
                                {
                                    "type": "template",
                                    "template": "Error with submission:<p>{{data.error.error}} - {{data.error.error_description}}</p>"
                                }
                            ]
                        }
                    ]
                }

            },
            {
                "type": "debug",
                "open": 2,
                "showData": true
            }
        ]);

        console.log
        cy.contains('hasError');
        cy.get('app-template-block').contains('Error with submission')
    });


});



describe('HTTP Block Follow Pagination', () => {

    beforeEach(() => {
        // Prevent external network request for adapter config
        cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
            fixture: 'adapterConfig.json'
        });

        // Prevent external network requests for Workflow cloud
        cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
            fixture: 'workflow-cloud.json'
        });

        // Prevent external network requests for fonts with empty CSS rule 
        cy.intercept('https://fonts.googleapis.com/\*\*', "\*{ }");
    });


    it('should follow pagination links and merge results without a proxy', () => {
        // We emulate the CORS proxy presenting the first set of results,
        // with a link header pointing to the next page.
        cy.intercept({
            url: 'https://example.com/paginated'
        }, {
            statusCode: 200,
            body: '["cats","dogs"]',
            headers: {
                'link': '<https://example.com/paginated&page=2>; rel="next"',
            }
        });

        // If the target URL is for the second page, we return the second set of results:
        cy.intercept({
            url: 'https://example.com/paginated&page=2'
        }, {
            statusCode: 200,
            body: '["fish","birds"]',
            headers: {
                'link': '<https://example.com/paginated>; rel="prev"',
            }
        });

        // We test page following by setting the "followPaginationLinksMerged" flag:
        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/paginated",
                "useProxy": false,
                "followPaginationLinksMerged": true,
            },
            {
                "type": "debug",
                "open": 2,
                "showData": true
            }
        ]);
        cy.contains('cats');
        cy.contains('dogs');
        cy.contains('fish');
        cy.contains('birds');
    });

    it('should follow pagination links and merge results using a proxy', () => {
        // We emulate the CORS proxy presenting the first set of results,
        // with a link header pointing to the next page.
        cy.intercept({
            url: 'https://proxy.kendra.io/',
            headers: {
                'Target-URL': 'https://example.com/paginated',
            }
        }, {
            statusCode: 200,
            body: '["cats","dogs"]',
            headers: {
                'link': '<https://example.com/paginated&page=2>; rel="next"',
            }
        });

        // If the target URL is for the second page, we return the second set of results:
        cy.intercept({
            url: 'https://proxy.kendra.io/',
            headers: {
                'Target-URL': 'https://example.com/paginated&page=2',
            },
        }, {
            statusCode: 200,
            body: '["fish","birds"]',
            headers: {
                'link': '<https://example.com/paginated>; rel="prev"',
            }
        });

        // We test page following by setting the "followPaginationLinksMerged" flag:
        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/paginated",
                "useProxy": true,
                "followPaginationLinksMerged": true,
            },
            {
                "type": "debug",
                "open": 2,
                "showData": true
            }
        ]);
        cy.contains('cats');
        cy.contains('dogs');
        cy.contains('fish');
        cy.contains('birds');
    });

    it('should return first results only if not paginated, with proxy', () => {
        cy.intercept({
            url: 'https://proxy.kendra.io/',
            headers: {
                'Target-URL': 'https://example.com/paginated',
            }
        }, {
            statusCode: 200,
            body: '["cats","dogs"]',
            headers: {
                'link': '<https://example.com/paginated&page=2>; rel="next"',
            }
        });

        // We do not expect this to be called:
        cy.intercept({
            url: 'https://proxy.kendra.io/',
            headers: {
                'Target-URL': 'https://example.com/paginated&page=2',
            },
        }, {
            statusCode: 200,
            body: '["fish","birds"]',
            headers: {
                'link': '<https://example.com/paginated>; rel="prev"',
            }
        }).as('secondPage');

        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/paginated",
                "useProxy": true
            },
            {
                "type": "debug",
                "open": 2,
                "showData": true
            }
        ]);
        cy.contains('cats');
        cy.contains('dogs');
        // we check it does not contain a second page result:
        cy.get('body').should('not.contain', 'fish');
    });
});