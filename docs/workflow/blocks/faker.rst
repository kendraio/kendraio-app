Faker
=====

Generate fake data for testing purposes.

Default config
--------------

.. code-block:: json

    {
      "type": "faker",
      "jsonSchema": {}
    }

Supported properties
--------------------

- **jsonSchema** - The schema for the generated fake data. For full details of supported features see: https://github.com/json-schema-faker/json-schema-faker/blob/master/docs/USAGE.md

The following properties from JSON Schema are supported by the fake data generator:

- **$ref** — Resolve internal references only, and/or external if provided.
- **required** — All required properties are guaranteed, if not can be omitted.
- **pattern** — Generate samples based on RegExp values.
- **format** — Core formats v4-draft only: date-time, email, hostname, ipv4, ipv6 and uri - also uri-reference, uri-template, json-pointer and uuid are supported.
- **enum** — Returns any of these enumerated values.
- **minLength**, **maxLength** — Applies length constraints to string values.
- **minimum**, **maximum** — Applies constraints to numeric values.
- **exclusiveMinimum**, **exclusiveMaximum** — Adds exclusivity for numeric values.
- **multipleOf** — Multiple constraints for numeric values.
- **items** — Support for subschema and fixed item values.
- **minItems**, maxItems — Adds length constraints for array items.
- **uniqueItems** — Applies uniqueness constraints for array items.
- **additionalItems** — Partially supported (?)
- **allOf**, **oneOf**, **anyOf** — Subschema combinators.
- **properties** — Object properties to be generated.
- **minProperties**, **maxProperties** — Adds length constraints for object properties.
- **patternProperties** — RegExp-based object properties.
- **additionalProperties** — Partially supported (?)
- **dependencies** — Partially supported (?)
- **not** — Not supported yet (?)

JSON schema faker includes basic support for generating values, but more advanced generators are available by using the “faker” extension.
All fake data generators from the faker.js package can be used, see https://github.com/marak/Faker.js/ for full list of available data generators.
To specify a faker generator, add the “faker” key to the JSON Schema, for example:

.. code-block:: json

    {
      "type": "string",
      "faker": "internet.email"
    }
