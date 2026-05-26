import { expect, test } from '@playwright/test';
import { loadFlowCode, mockCommonRequests } from './support';

test.describe('JSON Dereference Block', () => {
  const schemaUrl = 'https://test-library.murmurations.network/v2/schemas/people_schema-v0.1.0';
  const mockSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Person",
    "description": "A person",
    "type": "object",
    "properties": {
      "name": {
        "$ref": "#/definitions/name"
      },
      "age": {
        "type": "integer",
        "description": "Age in years"
      }
    },
    "definitions": {
      "name": {
        "type": "string",
        "description": "Full name"
      }
    }
  };

  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('should successfully dereference a valid JSON schema from a URL', async ({ page }) => {
    await page.route(/people_schema-v0\.1\.0/, route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockSchema),
      })
    );

    await loadFlowCode(page, [
      { "type": "mapping", "mapping": `\`${schemaUrl}\``, "blockComment": "" },
      { "type": "json-dereference" },
      { "type": "mapping", "mapping": "{\n    \"jsonSchema\": \"data\"\n}", "blockComment": "" },
      { "type": "debug", "open": 5, "showData": true }
    ]);

    await expect(page.getByText('Full name').first()).toBeVisible();
  });

  test('should display an error message when the URL is invalid', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "`people_schema-v0.1.0`", "blockComment": "" },
      { "type": "json-dereference" },
      { "type": "mapping", "mapping": "{\n    \"jsonSchema\": \"data\"\n}", "blockComment": "" },
      { "type": "debug", "open": 5, "showData": true }
    ]);

    await expect(page.locator('app-json-dereference-block')).toContainText("Error: Failed to construct 'URL': Invalid URL");
  });

  test('should display a form from a schema passed to schemaGetter', async ({ page }) => {
    await page.route(/people_schema-v0\.1\.0/, route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockSchema),
      })
    );

    await loadFlowCode(page, [
      { "type": "mapping", "mapping": `\`${schemaUrl}\``, "blockComment": "" },
      { "type": "json-dereference" },
      { "type": "mapping", "mapping": "{\n    \"jsonSchema\": \"data\"\n}", "blockComment": "" },
      { "type": "form", "label": "Save", "hasSubmit": false, "schemaGetter": "data" },
      { "type": "debug", "open": 5, "showData": true }
    ]);

    await expect(page.locator('app-form-block').last().locator('input').first()).toBeVisible();
  });
});
