import { expect, test } from '@playwright/test';
import { expectDisabledButton, loadFlowCode, mockAdapterConfig, mockFonts } from './support';

test.describe('Kendraio context and state', () => {
  test.beforeEach(async ({ page }) => {
    await mockAdapterConfig(page);
    await mockFonts(page);
  });

  test('should be possible for a template block to access global state values', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "template", "template": "{{state.global.test}}|{{state.local.test}}" },
      { "type": "context-save", "valueGetter": "`globalTest`", "key": "state.global.test", "skipFirst": false },
      { "type": "context-save", "valueGetter": "`localTest`", "key": "state.local.test", "skipFirst": false }
    ]);
    await expect(page.getByText('globalTest')).toBeVisible({ timeout: 10000 });
    await expect(page.getByText('localTest')).toBeVisible({ timeout: 10000 });
  });

  test('should be possible for a mapping block to access global state values', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "init" },
      {
        "type": "form",
        "hasSubmit": false,
        "emitOnInit": true,
        "jsonSchema": {
          "type": "object",
          "properties": {
            "text": { "type": "string", "title": "Form textbox", "default": "Default text" }
          }
        },
        "uiSchema": {},
        "blockComment": ""
      },
      { "type": "mapping", "mapping": "data.text", "blockComment": "" },
      { "type": "context-save", "key": "state.global.term", "valueGetter": "data", "blockComment": "" },
      { "type": "mapping", "mapping": "uuid(`test`)", "blockComment": "uuid(`test`)" },
      { "type": "mapping", "mapping": "state.global.term", "blockComment": "state.global.term", "ignoreState": false },
      {
        "type": "template",
        "template": "<p>If reactivity works, we should see the text from the form propogate to the mapping block below after page load, and see the debug blocks above and below update:",
        "blockComment": ""
      },
      { "type": "debug", "open": 3, "showData": true, "showContext": false, "showState": false, "blockComment": "" }
    ]);

    await expect(page.locator('.json-formatter-string')).toContainText('Default text');
    const input = page.locator('input').first();
    await expect(input).toHaveValue('Default text');
    await input.fill('New text');
    await expect(page.locator('.json-formatter-string')).toContainText('New text');
  });

  test('should be possible for a mapping block to ignore updates to global state values', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "init" },
      {
        "type": "form",
        "hasSubmit": false,
        "emitOnInit": true,
        "jsonSchema": {
          "type": "object",
          "properties": {
            "text": { "type": "string", "title": "Form textbox", "default": "Default text" }
          }
        },
        "uiSchema": {},
        "blockComment": ""
      },
      { "type": "mapping", "mapping": "data.text", "blockComment": "" },
      { "type": "debug", "open": 3, "showData": true, "showContext": false, "showState": false, "blockComment": "" },
      { "type": "context-save", "key": "state.global.term", "valueGetter": "data", "blockComment": "" },
      { "type": "mapping", "mapping": "uuid(`test`)", "blockComment": "uuid(`test`)" },
      { "type": "mapping", "mapping": "state.global.term", "blockComment": "state.global.term", "ignoreState": true },
      {
        "type": "debug",
        "open": 3,
        "showData": true,
        "showContext": false,
        "showState": false,
        "blockComment": "If reactivity works, we should see the text from the form propogate to the bottom mapping (and debug) block above"
      }
    ]);

    await expect(page.getByText('Object').first()).toBeVisible();
    let debugText = await page.locator('app-debug-block').evaluateAll(blocks => blocks.map(block => block.textContent || ''));
    expect(debugText[0]).toContain('data:null');
    expect(debugText[1]).toContain('data:Object');

    const input = page.locator('input').first();
    await expect(input).toHaveValue('Default text');
    await input.fill('Unexpected change');
    await expect(page.getByText('Unexpected change')).toBeVisible();

    debugText = await page.locator('app-debug-block').evaluateAll(blocks => blocks.map(block => block.textContent || ''));
    expect(debugText[0]).not.toContain('data:null');
    expect(debugText[0]).toContain('Unexpected change');
    expect(debugText[1]).toContain('data:Object');
  });

  test('should allow the enabling and disabling of action buttons', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "context-save", "valueGetter": "`false`", "contextKey": "state.global.enabled", "skipFirst": false },
      {
        "type": "actions",
        "buttons": [
          { "label": "Visible", "color": "default", "blocks": [], "enabledGetter": "state.global.enabled", "id": "button-enabled" },
          { "label": "Visible and disabled", "color": "default", "blocks": [], "enabledGetter": "state.global.enabled", "id": "button-disabled" }
        ]
      }
    ]);
    await expect(page.locator('#button-enabled')).toBeVisible();
    await expect(page.locator('#button-disabled')).toBeVisible();
    const disabled = page.locator('#button-disabled');
    await expectDisabledButton(disabled);
  });

  test('should allow the disabling of the datagrid', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "context-save", "valueGetter": "`false`", "contextKey": "state.global.enabled" },
      { "type": "mapping", "mapping": "[{one:`Column 1`, two:`col 2`},{one:`Data Grid Exists`, two: `more`}]" },
      { "type": "grid", "gridOptions": {}, "passThrough": false, "firstRowHeaders": true, "enabledGetter": "state.global.enabled" },
      { "type": "debug" }
    ]);
    await expect(page.locator('ag-grid-angular')).toHaveCount(0);
  });

  test('should show debug block when enabled', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "context-save", "valueGetter": "`true`", "contextKey": "state.global.enabled" },
      { "type": "mapping", "mapping": "`debug enabled`" },
      { "type": "debug", "enabledGetter": "state.global.enabled" }
    ]);
    await expect(page.getByText('debug enabled')).toBeVisible();
  });

  test('should allow the disabling of the debug block', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "context-save", "valueGetter": "`false`", "contextKey": "state.global.enabled" },
      { "type": "mapping", "mapping": "`debug disabled`" },
      { "type": "debug", "enabledGetter": "state.global.enabled" }
    ]);
    await expect(page.getByText('debug disabled')).toHaveCount(0);
  });

  test('should allow the disabling of the file input block ', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "context-save", "valueGetter": "`false`", "contextKey": "state.flags.devel", "blockComment": "" },
      {
        "type": "actions",
        "blockComment": "Action buttons for controlling devel state flag",
        "buttons": [
          {
            "label": "Enable Devel Mode",
            "color": "default",
            "enabledGetter": "!(state.flags.devel)",
            "blocks": [
              { "type": "context-save", "valueGetter": "`true`", "contextKey": "state.flags.devel" }
            ]
          }
        ]
      },
      {
        "type": "file-input",
        "label": "Devel Mode File Import",
        "accept": ["csv", "json", "xml"],
        "enabledGetter": "state.flags.devel"
      }
    ]);
    await expect(page.getByText('Devel Mode File Import')).toHaveCount(0);
    await page.getByText('Enable Devel Mode').click();
    await expect(page.getByText('Devel Mode File Import')).toBeVisible();
  });

  test('should be possible to reference context variables in a form', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "`{\"type\": \"string\", \"enum\":[\"test\", \"injected\"], \"default\":\"injected\"}`", "blockComment": "" },
      { "type": "context-save", "key": "saved" },
      {
        "type": "form",
        "jsonSchema": {
          "type": "object",
          "properties": {
            "test_property": { "$ref": "#/definitions/context/saved" }
          }
        },
        "uiSchema": {}
      }
    ]);

    await expect(page.getByText('injected')).toBeVisible();
  });
});
