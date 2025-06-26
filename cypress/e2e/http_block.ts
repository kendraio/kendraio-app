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
                "open": 3,
                "showData": true
            }
        ]);

        cy.contains('hasError:true');
        cy.contains('status:400');
        cy.contains('errorMessage:"Http failure response for https://example.com/data: 400 Bad Request"');
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


describe('HTTP Block Advanced', () => {

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

    it('should send a POST request with x-www-form-urlencoded data', () => {
        cy.intercept('POST', 'https://example.com/login', (req) => {
            expect(req.headers['content-type']).to.include('application/x-www-form-urlencoded');
            console.log('Received body:', req.body);
            // Allow any content for now to see what we're getting
            req.reply({
                statusCode: 200,
                body: { token: 'abc-123' }
            });
        }).as('loginRequest');

        loadFlowCode([
            { "type": "init", "data": { "user": "test", "grant_type": "client_credentials" } },
            {
                "type": "http",
                "method": "POST",
                "endpoint": "https://example.com/login",
                "requestType": "application/x-www-form-urlencoded"
            },
            { "type": "debug", "open": 2, "showData": true }
        ]);

        cy.wait('@loginRequest');
        cy.contains('token');
        cy.contains('abc-123');
    });

    it('should send a request with Basic Authentication header', () => {
        cy.intercept('GET', 'https://example.com/secret-data', (req) => {
            expect(req.headers.authorization).to.equal('Basic dGVzdHVzZXI6cGFzc3dvcmQ='); // testuser:password
            req.reply({
                statusCode: 200,
                body: { data: 'secret stuff' }
            });
        }).as('authRequest');

        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/secret-data",
                "authentication": {
                    "type": "basic-auth",
                    "username": "testuser",
                    "password": "password"
                }
            },
            { "type": "debug", "open": 2, "showData": true }
        ]);

        cy.wait('@authRequest');
        cy.contains('secret stuff');
    });

    it('should send a request with Bearer Token authentication', () => {
        cy.intercept('GET', 'https://example.com/api/data', (req) => {
            expect(req.headers.authorization).to.equal('Bearer my-jwt-token');
            req.reply({
                statusCode: 200,
                body: { data: 'authenticated data' }
            });
        }).as('bearerRequest');

        loadFlowCode([
            { "type": "init" },
            {
                "type": "context-save",
                "valueGetter": "'my-jwt-token'",
                "key": "myApp.jwt",
                "skipFirst": false
            },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/api/data",
                "authentication": {
                    "type": "bearer",
                    "valueGetters": {
                        "jwt": "context.myApp.jwt"
                    }
                }
            },
            { "type": "debug", "open": 2, "showData": true }
        ]);

        cy.wait('@bearerRequest');
        cy.contains('authenticated data');
    });





    it('should handle DELETE requests', () => {
        cy.intercept('DELETE', 'https://example.com/api/resource/456', (req) => {
            req.reply({
                statusCode: 204,
                body: ''
            });
        }).as('deleteRequest');

        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "DELETE",
                "endpoint": "https://example.com/api/resource/456"
            },
            { "type": "debug", "open": 2, "showData": true }
        ]);

        cy.wait('@deleteRequest');
        // For DELETE, we might not have content to check, just verify the request was made
    });


});