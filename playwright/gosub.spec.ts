import { expect, test } from '@playwright/test';
import { fulfillFixture, loadFlowCode, mockAdapterConfig, mockFonts, openWorkflowSettings } from './support';

test.describe('Subroutine workflow block', () => {
  test('should display dropdown options from the workflow cloud', async ({ page }) => {
    await page.route(/https:\/\/(dev\.)?app\.kendra\.io\/api\/?$/, route => fulfillFixture(route, 'flowList.json'));
    await page.route('**/assets/adapters/someAdapterA/madeUpFlowIDA.json', route =>
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({ title: 'Made up flow A', blocks: [] }),
      })
    );
    await mockAdapterConfig(page);
    await mockFonts(page);

    const workflowList = page.waitForResponse(response => /\/api\/?$/.test(new URL(response.url()).pathname), { timeout: 5000 }).catch(() => undefined);
    await loadFlowCode(page, [
      { "type": "gosub", "adapterName": "someAdapterA", "workflowId": "madeUpFlowIDA" }
    ]);
    await openWorkflowSettings(page);
    await page.locator('#mat-expansion-panel-header-0').click();
    await workflowList;

    const adapterInput = page.locator('app-block-gosub-builder-box input').nth(0);
    await adapterInput.click();
    await adapterInput.press(process.platform === 'darwin' ? 'Meta+A' : 'Control+A');
    await adapterInput.pressSequentially('so');
    await expect(page.getByRole('option', { name: 'someAdapterB' })).toBeVisible();

    await adapterInput.press(process.platform === 'darwin' ? 'Meta+A' : 'Control+A');
    await adapterInput.pressSequentially('someAdapterB');
    const workflowInput = page.locator('app-block-gosub-builder-box input').nth(1);
    await workflowInput.click();
    await workflowInput.press(process.platform === 'darwin' ? 'Meta+A' : 'Control+A');
    await workflowInput.press('Backspace');
    await expect(page.getByRole('option', { name: 'madeUpFlowIDB' })).toBeVisible();
  });
});
