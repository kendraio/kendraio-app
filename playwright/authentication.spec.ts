import { expect, test } from '@playwright/test';
import { appUrl } from './support';

test.describe('Old Account page', () => {
  test('the callback page should always redirect to /user', async ({ page }) => {
    await page.goto(`${appUrl}/callback`);
    await expect(page).toHaveURL(/\/user/);
  });
});
