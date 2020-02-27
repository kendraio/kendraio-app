Adapters
========

What is an Adapter?
-------------------

Adapters provide configuration for other Kendraio projects (such as App, CLI, etc) to integrate with third party
service providers and data formats and schemas.

Within Kendraio Adapter we are assembling a library of API clients that will enable the Kendraio App
(and any third party service provider) to plug into the APIs of existing media service providers. We are creating
API clients that do not already exist and also assessing/testing those that do.

Why create an Adapter?
----------------------

If you represent a third-party service that wishes to integrate with the Kendraio ecosystem, or make use of the
shared technology we are developing, then you will need to create an Adapter. The Adapter methodology is in its
early stages and under active development. For now, the presence of an Adapter within this repo is a starting
point towards a more meaningful integration with the Kendraio ecosystem. It will be a place to store configuration
related to how a particular service is accessed, the features provided by a service, and the data formats and
schemas supported by the service.


