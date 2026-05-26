import { expect, test } from '@playwright/test';
import { loadFlowCode, mockCommonRequests } from './support';

test.describe('HTTP Block Request', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('should return a single set of results. Without pagination', async ({ page }) => {
    await page.route('https://example.com/data', route =>
      route.fulfill({ status: 200, contentType: 'application/json', body: '["hippo", "giraffe"]' })
    );

    await loadFlowCode(page, [
      { "type": "init" },
      { "type": "http", "method": "GET", "endpoint": "https://example.com/data" },
      { "type": "debug", "open": 2, "showData": true }
    ]);

    await expect(page.getByText('hippo')).toBeVisible();
    await expect(page.getByText('giraffe')).toBeVisible();
  });

  test('should return an error', async ({ page }) => {
    await page.route('https://example.com/data', route =>
      route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({
          error: {
            error: 'Http failure 400 Bad request',
            error_description: 'There was a problem with your request'
          }
        }),
      })
    );

    await loadFlowCode(page, [
      { "type": "init" },
      {
        "type": "http",
        "method": "GET",
        "endpoint": "https://example.com/data",
        "onError": {
          "blocks": [
            {
              "type": "card",
              "blocks": [
                {
                  "type": "template",
                  "template": "Error with submission:<p>{{data.error.error}} - {{data.error.error_description}}</p>"
                }
              ]
            }
          ]
        }
      },
      { "type": "debug", "open": 3, "showData": true }
    ]);

    await expect(page.getByText('hasError:true')).toBeVisible();
    await expect(page.getByText('status:400')).toBeVisible();
    await expect(page.getByText('errorMessage:"Http failure response for https://example.com/data: 400 Bad Request"')).toBeVisible();
    await expect(page.locator('app-template-block')).toContainText('Error with submission');
  });
});

test.describe('HTTP Block Follow Pagination', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('should follow pagination links and merge results without a proxy', async ({ page }) => {
    await page.route('https://example.com/paginated*', route => {
      if (route.request().url().includes('page=2')) {
        return route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: '["fish","birds"]',
          headers: {
            link: '<https://example.com/paginated>; rel="prev"',
            'access-control-expose-headers': 'link',
          },
        });
      }
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: '["cats","dogs"]',
        headers: {
          link: '<https://example.com/paginated&page=2>; rel="next"',
          'access-control-expose-headers': 'link',
        },
      });
    });

    await loadFlowCode(page, [
      { "type": "init" },
      { "type": "http", "method": "GET", "endpoint": "https://example.com/paginated", "useProxy": false, "followPaginationLinksMerged": true },
      { "type": "debug", "open": 2, "showData": true }
    ]);

    for (const value of ['cats', 'dogs', 'fish', 'birds']) {
      await expect(page.getByText(value)).toBeVisible();
    }
  });

  test('should follow pagination links and merge results using a proxy', async ({ page }) => {
    await page.route('https://proxy.kendra.io/**', route => {
      const target = route.request().headers()['target-url'];
      if (target === 'https://example.com/paginated&page=2') {
        return route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: '["fish","birds"]',
          headers: {
            link: '<https://example.com/paginated>; rel="prev"',
            'access-control-expose-headers': 'link',
          },
        });
      }
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: '["cats","dogs"]',
        headers: {
          link: '<https://example.com/paginated&page=2>; rel="next"',
          'access-control-expose-headers': 'link',
        },
      });
    });

    await loadFlowCode(page, [
      { "type": "init" },
      { "type": "http", "method": "GET", "endpoint": "https://example.com/paginated", "useProxy": true, "followPaginationLinksMerged": true },
      { "type": "debug", "open": 2, "showData": true }
    ]);

    for (const value of ['cats', 'dogs', 'fish', 'birds']) {
      await expect(page.getByText(value)).toBeVisible();
    }
  });

  test('should return first results only if not paginated, with proxy', async ({ page }) => {
    await page.route('https://proxy.kendra.io/**', route => {
      const target = route.request().headers()['target-url'];
      if (target === 'https://example.com/paginated&page=2') {
        return route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: '["fish","birds"]',
          headers: { link: '<https://example.com/paginated>; rel="prev"' },
        });
      }
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: '["cats","dogs"]',
        headers: { link: '<https://example.com/paginated&page=2>; rel="next"' },
      });
    });

    await loadFlowCode(page, [
      { "type": "init" },
      { "type": "http", "method": "GET", "endpoint": "https://example.com/paginated", "useProxy": true },
      { "type": "debug", "open": 2, "showData": true }
    ]);

    await expect(page.getByText('cats')).toBeVisible();
    await expect(page.getByText('dogs')).toBeVisible();
    await expect(page.locator('body')).not.toContainText('fish');
  });
});
