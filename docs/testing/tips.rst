Notes for Cypress testing
=========================

"https" not "http"
---------------

When tests are run within GitHub's environments, calls to external urls must be https, otherwise they will not run. 
This applies even to fixtures that don't even make external requests. 


