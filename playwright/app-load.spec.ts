import { test, expect } from '@playwright/test'
import { appUrl } from './support'

test('app loads', async ({ page }) => {
  await page.goto(appUrl)
  await expect(page.locator('body')).toBeVisible()
})
