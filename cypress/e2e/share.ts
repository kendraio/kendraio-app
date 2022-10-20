
describe('Share functionality', () => {

    beforeEach(() => {
        // Prevent external network request for adapter config
        cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
            fixture: 'adapterConfig.json'
        }
        ).as('adapterConfig.json');

        // Prevent external network requests for Workflow cloud 
        cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
            fixture: 'workflow-cloud.json'
        }
        ).as('workflow-cloud.json');


        // Prevent external network requests for fonts with empty CSS rule
        cy.intercept('https://fonts.googleapis.com/**', "*{ }");

    });


    it('should assert a shared database loads as expected using given URL', () => {
        cy.visit("/workflow-builder?metadata=NobwRArhCWAmYC4wBYAMBWdAzVB2AzALS4CMApgJyHIAcJJhNuATAMaFmr4HquoUA2SmAA0YAIaxxABwAuZAE4A5cQFsyiMAGdWACzKrxW0dr0HxK9ZukLo6gPqroAO2hb5C42KmzxicM5qGkgAQgD2tsYAvmIANuIARmSxmuGRYDHgUHCapMwJ6JTsyLhkuNQU4uiMNMgChFwU+KhksLjIdfBikjIelsGm+oZeg+b91rYOTq7uiiM+fggBQZoAMtAAXhlxiclrm9tZMPBIZeLM9PiwhEll1Kiw1xSY1eKCAshYNPhYJAl+3SkckU4yQOiGRhM4LGKzBZmGJgW-kgx00ZwuJCuNzIdzQj0Iz0whDeAg+Xx+fwBYBsYWkilk0DIxgQoDAAGsyABPTSBKxiBmyWIDcb8zl0zQAFTIAA9ZBkALpiXkDGx2MiOFxuDzzJmsWxyaBhZyaAAKAFkAASxLUmeJJFJIZXbMB2vZIVVTTWzTwKoA")
        .contains("Workflow");
        cy.wait(1000);
        cy.visit("/workflow-builder?data=NobwRALgngDgpmAXGA5gewM4FcBGYA0YAhgCZEwRwBOAckQLYLIYDGAFnPURgWAO5oqAawBmAGzR8AkiSRhWHLj0I4JLIQGE09RgDsIcgDJpSAAgWduYAL75w0eHICWupwdv3YTSJxhiilLyU9H4B3gA8bABMAHwAIgFEONxwpixo nD6GOEA9NExNnaQXnJcMDAuKLzllbrVyGQQRMAA-FhYTiQAvN0ABnAA7ERRAIyjAMwkALQ4cEPTACwADCQzAJwArNvTROsAbPuLIgAcEyKjyX0AuqYAPqbAy9e8qmjqWjpZBsgAYk5iShUczsSymCBoUxYKhiUwwIhUBhFTyOZDpTIADwg0wwRAAbghCOjKFiANJwKByCxcV5qTTaPQ-eT41JoaHmeAsJwiJwsEGKIjIkqosCMDC4lCEyBuMTeQxODAQUxuTgYUwiKjafmWRCmEAgNIZEkQAB01KIJt0DFS1msQoc3hIeEIaHgiIgTgycklBkIpHIQLojCpoKUvHNAHE4BAgXJiXAsWbQxarcGVHTPoyjCYSKYmkR1Zr6NqaR5hd5alUauQ6g0wPngNcTYwqJKABQAAXwetM-jmYl1Ps73YAJCb44nzSa 3AxABKaxz2nvelffRyKNKiAcUwAHWlEFl 9M9tKjTgOCw1Rd8F0SFGhAwbEkCWaSAgVCwcEfz74WkxPwiEQYgYN 8i-gAys0gSIEBIFwGWDrelQXS8CgKEkAA8hQnq6DwiDgPCKAuAEuHvp YFESRHoZAACkQkoQU4ABeTArLYYDpGIWD0LocRwCI GgGAHCkNQQZykks68Dys6yMgM5iEKokkOJ1pyNh1CkRkyicbOYgAEpZKpVDUHIAjCOIkhGboJlmUS k2XZVD0Yi9D4eAbzqEJKLeEQLA0XhrxYDGOlIMJilyAAoiQbjLt54W XI-hYLo7C8P6FBmcwya6RZogSNI8lgHAsUQFIwS8BOPzgOaMhxkaCamgAjl VBQK5DAYEmAr1YQqGNIkJodKhtrXIQWRJLK8kfl 1jXPNtrFCpanBsgUhxDJThyXII2yPN6Yrpm3xyKeIr YFumXqFQWIBFUlKcgACCaymBVnBVWgEhUHIqlAVggLxUIPnlslRCpelfpkFlP05QKeWCAVkj1cgpVuO99CfQBSC1cmKOcY1iatdQHUIl1PWWH1YADWAe1tkuY0TVaqileRc3FJFyDyoqpjAbC5pXXSINIQp4NpWwGXQ7GcOWAjlmFfjYgKu440lcz01swhqteauWbIGd3joNgzrEFLq3eE4ISCLGhD5VZRVyCIaBoDbYA68d65-M7QK7ne81AA")
        .contains('Boris');
        cy.contains('Liz');
    });
});