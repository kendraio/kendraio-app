Both of these should be modified to not use variable-get or this endpoint: `https://streaming-production-spaces.ams3.cdn.digitaloceanspaces.com/freecords/3b089145-1219-4b5b-ba8e-339491bab5b2/audio/5126719a-dbaf-481e-b90c-ef718214ded8_1.mp3`
They should be implemented in a Cypress test.
Review the package.json file to see how to use the tests.
They should use the local bucket mock s3rver.
Restarting the server to reset state is best avoided by having a file reset part in the Cypress scripts instead.

## Implementation Status
✅ **COMPLETED**: Both workflows implemented in `/cypress/e2e/get_and_bput_flow.ts`
- Uses mapping block to inject test credentials before context-save (instead of variable-get)
- Uses local s3rver mock instead of external endpoints
- Tests both mapping variations: `{ content: data.data }` and `{content: data}`
- Includes file cleanup via `cy.exec` curl commands in beforeEach/afterEach
- Verifies SigV4 authentication headers and binary data integrity

**Run Tests**: `npm run test:get-bput` (headless) or `npm run test:get-bput:open` (interactive debugging)

**BUT ACTUALLy cypress/e2e/get_and_bput_binary_integrity.spec.ts is the more minimal new one**

```
[
    {
      "type": "init"
    },
    {
      "type": "context-save",
      "key": "api",

    },
    {
      "type": "http",
      "method": "get",
      "useProxy": false,
      "endpoint": "https://streaming-production-spaces.ams3.cdn.digitaloceanspaces.com/freecords/3b089145-1219-4b5b-ba8e-339491bab5b2/audio/5126719a-dbaf-481e-b90c-ef718214ded8_1.mp3",
      "responseType": "arraybuffer",
      "headers": {},
    },
    {
      "type": "mapping",
      "mapping": "{ content: data.data }",

    },
    {
      "type": "http",
      "method": "bput",
      "useProxy": false,
      "endpoint": "https://freecords.s3.eu-central-003.backblazeb2.com/5063212017308/GX8LD2272332.wav",
      "authentication": {
        "type": "aws-sigv4",
        "secretKeyGetter": "context.api.secretKey",
        "accessKeyIdGetter": "context.api.accessKeyId"
      }
    }
  ]
```

```
[
    {
      "type": "init"
    },
    {
      "type": "context-save",
      "key": "api",
    },
    {
      "type": "http",
      "method": "get",
      "useProxy": false,
      "endpoint": "https://streaming-production-spaces.ams3.cdn.digitaloceanspaces.com/freecords/3b089145-1219-4b5b-ba8e-339491bab5b2/audio/5126719a-dbaf-481e-b90c-ef718214ded8_1.mp3",
      "responseType": "arraybuffer",
      "headers": {},
    },
    {
      "type": "mapping",
      "mapping": "{content: data}",
    },
    {
      "type": "http",
      "method": "bput",
      "useProxy": false,
      "endpoint": "https://freecords.s3.eu-central-003.backblazeb2.com/5063212017308/GX8LD2272332.wav",
      "authentication": {
        "type": "aws-sigv4",
        "secretKeyGetter": "context.api.secretKey",
        "accessKeyIdGetter": "context.api.accessKeyId"
      }
    }
]
```