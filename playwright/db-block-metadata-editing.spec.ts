import { expect, test } from '@playwright/test';
import { clearMetadataTable, getMetadataTable, loadFlowCode, mockAdapterConfig, mockFonts } from './support';

test.describe('Kendraio DB block metadata editing', () => {
  test.beforeEach(async ({ page }) => {
    await mockAdapterConfig(page);
    await mockFonts(page);
  });

  test.afterEach(async ({ page }) => {
    await clearMetadataTable(page);
  });

  test('should be able to insert a new record', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "{ uuid: uuid('test'), name: 'test' }" },
      { "type": "db", "operation": "upsert", "adapterName": "UNKNOWN", "schema": "none", "blockComment": "" },
      { "type": "db", "operation": "get", "adapterName": "UNKNOWN", "schema": "none", "blockComment": "" },
      { "type": "debug", "open": 3, "showData": true, "showContext": false, "showState": false },
      { "type": "template", "template": "Loaded." }
    ]);

    await expect(page.locator('mat-spinner')).toHaveCount(0);
    await expect(page.locator('body')).toContainText('Loaded.');
    await expect.poll(() => page.evaluate(() => window['databaseInit'])).toBe(true);
    const metadata = await getMetadataTable(page);
    expect(metadata).toHaveLength(1);
    expect(metadata[0].data.name).toBe('test');
  });

  test('should be able to update an existing record', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "{ uuid: uuid('test'), name: 'test' }" },
      { "type": "db", "operation": "upsert", "adapterName": "UNKNOWN", "schema": "none", "blockComment": "" },
      { "type": "db", "operation": "get", "adapterName": "UNKNOWN", "schema": "none", "blockComment": "" },
      { "type": "debug", "open": 3, "showData": true, "showContext": false, "showState": false },
      { "type": "mapping", "mapping": "{ uuid: uuid('test'), name: 'test2'}" },
      { "type": "db", "operation": "upsert", "adapterName": "UNKNOWN", "schema": "none", "blockComment": "" },
      { "type": "db", "operation": "get", "adapterName": "UNKNOWN", "schema": "none", "blockComment": "" },
      { "type": "debug", "open": 3, "showData": true, "showContext": false, "showState": false },
      { "type": "template", "template": "Loaded." }
    ]);

    await expect(page.locator('mat-spinner')).toHaveCount(0);
    await expect(page.locator('body')).toContainText('Loaded.');
    await expect.poll(() => page.evaluate(() => window['databaseInit'])).toBe(true);
    await expect(page.getByText('name:"test"')).toBeVisible();
    await expect(page.getByText('name:"test2"')).toBeVisible();
    const metadata = await getMetadataTable(page);
    expect(metadata).toHaveLength(1);
    expect(metadata[0].data.name).toBe('test2');
  });
});
