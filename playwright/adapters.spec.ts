import { expect, test } from '@playwright/test';
import { loadFlowCode, mockFonts } from './support';

test.describe('Adapter install', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('https://kendraio.github.io/kendraio-adapter/config.json', route =>
      route.fulfill({
        contentType: 'application/json',
        path: 'cypress/fixtures/adapterConfig.json',
      })
    );
    await page.route('https://kendraio-adapter.kendraio.now.sh/bloomen.json', route =>
      route.fulfill({
        contentType: 'application/json',
        path: 'cypress/fixtures/bloomen.json',
      })
    );
    await mockFonts(page);
    await page.addInitScript(() => {
      window.localStorage.setItem('core.variables.settings', JSON.stringify({
        adapterRepoUrl: 'https://kendraio.github.io/kendraio-adapter/',
        exposeCoreActions: true,
      }));
    });
  });

  test('Export a packaged adapter with attachments', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "init" },
      { "type": "mapping", "mapping": "{repoUrl:`https://kendraio-adapter.kendraio.now.sh/`, name:`bloomen`}" },
      {
        "type": "actions",
        "buttons": [
          {
            "label": "Import Adapter",
            "color": "default",
            "blocks": [
              { "type": "dispatch", "action": "installAdapter" }
            ]
          }
        ]
      }
    ]);

    await page.getByText('Import Adapter').click();
    await page.waitForTimeout(2000);

    await loadFlowCode(page, [
      { "type": "adapter-info", "adapterName": "bloomen", "packageAdapter": true },
      { "type": "debug", "open": 4 }
    ]);

    await expect(page.getByText('attachments')).toBeVisible();
  });
});
