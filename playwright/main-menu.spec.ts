import { expect, test } from '@playwright/test';
import { appUrl, mockAdapterConfig, mockFonts, openSidebar } from './support';

test.describe('Main menu with app modified date footer', () => {
  test.beforeEach(async ({ page }) => {
    await mockAdapterConfig(page);
    await mockFonts(page);
  });

  test('shows modified date footer and existing menu items', async ({ page }) => {
    await page.goto(`${appUrl}/`);
    await openSidebar(page);

    for (const item of ['Dashboard', 'Settings', 'Adapters', 'Flow Cloud', 'Flow Builder', 'Form Builder', 'Query Builder']) {
      await expect(page.locator('app-main-menu span.ml-2').filter({ hasText: new RegExp(`^${item}$`) })).toBeVisible();
    }

    const footer = page.locator('.sidenav-footer');
    await expect(footer).toContainText('App modified on');
    await expect(footer).not.toContainText('A new version is available');
  });

  test('shows update banner when a newer version exists', async ({ page }) => {
    const firstLoad = { timestamp: 1728499200000 };
    const refreshedLoad = { timestamp: 1728499200001 };

    await page.route('**/ngsw.json', route => {
      const isRefresh = route.request().headers()['cache-control'] === 'no-cache';
      return route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(isRefresh ? refreshedLoad : firstLoad),
      });
    });

    await page.goto(`${appUrl}/`);
    await openSidebar(page);

    const footer = page.locator('.sidenav-footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('App modified on');
    await expect(footer).toContainText('A new version is available');
  });
});
