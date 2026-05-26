import { expect, test } from '@playwright/test';
import { loadFlowCode, mockAdapterConfig } from './support';

test.describe('Template blocks', () => {
  test.beforeEach(async ({ page }) => {
    await mockAdapterConfig(page);
  });

  test('should render visible html', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "init" },
      { "type": "mapping", "mapping": "{\r\n    \"header\": `Header`,\r\n    \"content\": `Content`\r\n}", "blockComment": "" },
      { "type": "template", "template": "<p>visible:{{data.header}}</p><p>visible:{{data.content}}</p>", "blockComment": "" },
      { "type": "template", "template": "<p>invisible:{{data.header}}</p><p>invisible:{{data.content}}</p>", "renderToScreen": false, "blockComment": "" },
      { "type": "debug", "open": 2 }
    ]);

    await expect(page.locator('.dynamic-content').first()).toContainText('visible:Header');
    await expect(page.locator('.dynamic-content').getByText('invisible:Header')).toHaveCount(0);
  });

  test('should render html to the flow if renderToData is true', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "init" },
      { "type": "mapping", "mapping": "{\r\n    \"header\": `Header`,\r\n    \"content\": `Content`\r\n}", "blockComment": "" },
      { "type": "template", "template": "<p>invisible:{{data.header}}</p><p>invisible:{{data.content}}</p>", "renderToScreen": false, "key": "renderedHtml" },
      { "type": "debug", "open": 2 }
    ]);

    await expect(page.locator('.dynamic-content').getByText('invisible:Header')).toHaveCount(0);
    await expect(page.locator('.model-output')).toContainText('invisible:Header');
  });
});
