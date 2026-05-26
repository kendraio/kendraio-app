import { expect, test } from '@playwright/test';
import { appUrl, loadFlowCode, mockCommonRequests } from './support';

test.describe('Google sheets import', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('should extract shared CSV data from a published google sheet', async ({ page }) => {
    const sheetUrl = `${appUrl}/__playwright__/sheet1.csv`;
    await page.route('**/__playwright__/sheet1.csv', route =>
      route.fulfill({
        contentType: 'text/csv',
        path: 'cypress/fixtures/googleSheet.csv',
      })
    );

    await loadFlowCode(page, [
      { "type": "init" },
      {
        "type": "actions",
        "buttons": [
          {
            "label": "Import Sheet",
            "color": "default",
            "blocks": [
              { "type": "gsheet", "shareUrl": sheetUrl }
            ],
            "enabled": true
          }
        ]
      },
      { "type": "debug", "open": 3 }
    ]);

    await page.getByText('Import Sheet').click();
    await expect(page.getByText('Adobe Cabernet Sauvignon Reserva')).toBeVisible();
  });
});
