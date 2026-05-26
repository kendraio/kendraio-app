import * as fs from 'node:fs';
import * as path from 'node:path';
import { expect, test, type Page, type Route } from '@playwright/test';
import * as LZS from 'lz-string';

const appUrl = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:4200';
const steppingStonesFlow = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'playwright/fixtures/transposed_steppingstones_map_spreadsheet_style_flow.json'), 'utf8')
);
const countriesGeoJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'playwright/fixtures/countries-110m-all.geojson'), 'utf8')
);

async function mockCommonRequests(page: Page) {
  await page.route('https://kendraio.github.io/kendraio-adapter/config.json', route =>
    route.fulfill({
      contentType: 'application/json',
      path: 'cypress/fixtures/adapterConfig.json',
    })
  );
  await page.route('https://app.kendra.io/api/workflowCloud/listWorkflows', route =>
    route.fulfill({
      contentType: 'application/json',
      path: 'cypress/fixtures/workflow-cloud.json',
    })
  );
  await page.route('https://fonts.googleapis.com/**', route =>
    route.fulfill({
      contentType: 'text/css',
      body: '*{ }',
    })
  );
}

async function loadFlowCode(page: Page, blocks: Array<Record<string, any>>) {
  const compressed = LZS.compressToEncodedURIComponent(JSON.stringify(blocks));
  await page.goto(`${appUrl}/workflow-builder?data=${compressed}`);
  await expect(page.getByText('Flow', { exact: true }).or(page.getByText('Flow name', { exact: true }))).toBeVisible();
}

async function loadSteppingStonesFlow(page: Page) {
  await page.route('https://app.kendra.io/api/steppingstones/transposedspreadsheet', route =>
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(steppingStonesFlow),
    })
  );

  await page.goto(`${appUrl}/steppingstones/transposedspreadsheet`);
  await expect(page.getByText('Stepping Stones Map', { exact: true })).toBeVisible();
}

function countryCodeForFeature(feature: any): string[] {
  const properties = feature.properties || {};
  return [
    properties.ISO_A3,
    properties.ISO_A3_EH,
    properties.ADM0_A3,
    properties.ADM0_ISO,
    properties.WB_A3,
    properties.BRK_A3,
    properties.SU_A3,
    properties.GU_A3,
  ].filter((code: unknown): code is string => typeof code === 'string' && code !== '-99');
}

const countryFeaturesByCode = countriesGeoJson.features.reduce((lookup: Map<string, any>, feature: any) => {
  countryCodeForFeature(feature).forEach(code => lookup.set(code.toUpperCase(), feature));
  return lookup;
}, new Map<string, any>());

async function mockCountryProvider(page: Page) {
  const countryRoute = async (route: Route) => {
    const filename = new URL(route.request().url()).pathname.split('/').pop() || '';
    const countryCode = filename.replace(/\.geojson$/i, '').toUpperCase();
    const feature = countryFeaturesByCode.get(countryCode);
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({
        type: 'FeatureCollection',
        features: feature ? [feature] : [],
      }),
    });
  };

  await page.route('https://raw.githubusercontent.com/AshKyd/geojson-regions/**/countries/**/*.geojson', countryRoute);
  await page.route('https://example.test/countries/*.geojson', countryRoute);
}

async function selectSteppingStonesProposal(page: Page, name: string) {
  await page.locator('mat-select').first().click();
  await page.getByRole('option', { name, exact: true }).click();
}

async function expectRenderedMapCounts(page: Page, markerMinimum: number, countryMinimum: number) {
  await expect(page.locator('app-map-block [leaflet]')).toBeVisible();
  await expect.poll(() => page.locator('.custom-marker').count(), { timeout: 10000 }).toBeGreaterThanOrEqual(markerMinimum);
  await expect.poll(() => page.locator('.leaflet-overlay-pane path').count(), { timeout: 10000 }).toBeGreaterThanOrEqual(countryMinimum);
}

test.describe('Issue 605 minimal regression repros', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('keeps Formly array cards, shadows, and buttons compact', async ({ page }) => {
    await loadFlowCode(page, [
      {
        "type": "form",
        "title": "Update Event",
        "label": "Update Event",
        "jsonSchema": {
          "type": "object",
          "properties": {
            "tickets_manager": {
              "type": "array",
              "title": "Tickets Manager",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": ["TICKETS"]
                  }
                }
              },
              "default": [
                { "type": "TICKETS" },
                { "type": "TICKETS" }
              ]
            }
          }
        },
        "uiSchema": {}
      }
    ]);

    await expect(page.getByRole('heading', { name: 'Tickets Manager' })).toBeVisible();
    const card = page.locator('formly-array-type > mat-card');
    await expect(card).toHaveCount(1);
    await expect.poll(() => card.evaluate(el => getComputedStyle(el).boxShadow)).not.toBe('none');
    await expect.poll(() => page.getByRole('button', { name: 'Remove' }).first().evaluate(el => el.getBoundingClientRect().width)).toBeLessThan(160);
    await expect.poll(() => page.getByRole('button', { name: /Tickets Manager/ }).evaluate(el => el.getBoundingClientRect().width)).toBeLessThan(220);
  });

  test('renders an array item blocks widget without external auth or adapter config', async ({ page }) => {
    await loadFlowCode(page, [
      {
        "type": "form",
        "label": "Save lineup",
        "jsonSchema": {
          "type": "object",
          "properties": {
            "lineup": {
              "type": "array",
              "title": "Lineup",
              "items": {
                "type": "string",
                "default": ""
              }
            }
          }
        },
        "uiSchema": {
          "lineup": {
            "items": {
              "ui:widget": "blocks",
              "blocksConfig": {
                "blocks": [
                  {
                    "type": "mapping",
                    "mapping": "[{ id: `artist-1`, name: `Mock Artist` }]"
                  },
                  {
                    "type": "reference",
                    "fieldLabel": "Select artist",
                    "labelGetter": "name",
                    "valueField": "id",
                    "outputGetter": "id"
                  }
                ]
              }
            }
          }
        }
      },
      {
        "type": "debug",
        "open": 5,
        "showData": true,
        "showContext": false
      }
    ]);

    await page.getByRole('button', { name: /Lineup$/ }).click();
    await page.locator('app-formly-blocks-input mat-select').click();
    await page.getByRole('option', { name: 'Mock Artist' }).click();
    await page.getByRole('button', { name: 'Save lineup' }).click();
    await expect(page.locator('app-debug-block')).toContainText('artist-1');
  });

  test('opens a Flow dialog with enough padding around the embedded form', async ({ page }) => {
    await loadFlowCode(page, [
      {
        "type": "actions",
        "buttons": [
          {
            "label": "Open mock connect dialog",
            "blocks": [
              {
                "type": "dialog",
                "blocks": [
                  {
                    "type": "form",
                    "label": "Save",
                    "jsonSchema": {
                      "type": "object",
                      "properties": {
                        "api_key": {
                          "type": "string",
                          "title": "API key"
                        }
                      }
                    },
                    "uiSchema": {}
                  }
                ]
              }
            ],
            "enabled": true
          }
        ]
      }
    ]);

    await page.getByRole('button', { name: 'Open mock connect dialog' }).click();
    const inset = await page.locator('mat-dialog-container mat-form-field').evaluate(field => {
      const dialog = field.closest('mat-dialog-container');
      return field.getBoundingClientRect().left - dialog.getBoundingClientRect().left;
    });
    expect(inset).toBeGreaterThan(12);
  });

  test('can display a mocked logged-in user page without full-width avatar or buttons', async ({ page }) => {
    await page.route('https://kendraio.eu.auth0.com/**', route =>
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({ sub: 'auth0|issue-605' }),
      })
    );
    await page.route('https://kendraio-auth0-proxy.vercel.app/', route =>
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({
          nickname: 'issue605',
          name: 'Issue 605 Tester',
          updated_at: '2026-05-22T00:00:00Z',
          picture: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="96" height="96"%3E%3Crect width="96" height="96" fill="%23ddd"/%3E%3C/svg%3E',
          identities: [
            { provider: 'google-oauth2', user_id: 'mock-google' }
          ],
        }),
      })
    );
    await page.addInitScript(() => {
      window.localStorage.setItem('access_token', 'mock-access-token');
      window.localStorage.setItem('id_token', 'mock-id-token');
      window.localStorage.setItem('expires_at', `${Date.now() + 60 * 60 * 1000}`);
    });

    await page.goto(`${appUrl}/user`);
    await expect(page.locator('app-user-page em', { hasText: 'Issue 605 Tester' })).toBeVisible();
    await expect.poll(() => page.locator('app-user-page img').evaluate(el => el.getBoundingClientRect().width)).toBeLessThan(160);
    await expect.poll(() => page.getByRole('button', { name: 'Logout' }).evaluate(el => el.getBoundingClientRect().width)).toBeLessThan(160);
  });

  test('renders a map with custom pins and countries without sanitizer crashes', async ({ page }) => {
    const appErrors: string[] = [];
    page.on('console', message => {
      if (message.type() === 'error') {
        appErrors.push(message.text());
      }
    });
    page.on('pageerror', error => appErrors.push(error.message));
    await mockCountryProvider(page);

    await loadFlowCode(page, [
      {
        "type": "mapping",
        "mapping": "[{ country: `GBR`, lat: `51.5`, long: `-0.09`, label: `United Kingdom`, customPin: '<img src=x onerror=window.__issue605Xss=true><span>★</span>' }]"
      },
      {
        "type": "map",
        "height": 300,
        "zoom": 2,
        "countryProviderBaseURL": "https://example.test/countries/"
      }
    ]);

    await expect(page.locator('app-map-block [leaflet]')).toBeVisible();
    await expect(page.locator('.custom-marker')).toBeVisible();
    await expect(page.locator('.leaflet-overlay-pane path')).toBeVisible();
    await expect.poll(() => page.evaluate(() => (window as any).__issue605Xss)).toBeUndefined();

    const errors = appErrors.join('\n');
    expect(errors).not.toContain('sanitize is not a function');
    expect(errors).not.toContain('markerClusterGroup is not a function');
  });

  test('renders Steppingstones P5 and Non-Nuclear Weapon State maps from the real Flow dropdown', async ({ page }) => {
    const appErrors: string[] = [];
    page.on('console', message => {
      if (message.type() === 'error') {
        appErrors.push(message.text());
      }
    });
    page.on('pageerror', error => appErrors.push(error.message));
    await mockCountryProvider(page);

    await loadSteppingStonesFlow(page);

    await selectSteppingStonesProposal(page, 'P5');
    await expectRenderedMapCounts(page, 5, 5);

    await selectSteppingStonesProposal(page, 'Non-Nuclear Weapon State(s)');
    await expectRenderedMapCounts(page, 20, 20);

    const errors = appErrors.join('\n');
    expect(errors).not.toContain('sanitize is not a function');
    expect(errors).not.toContain('markerClusterGroup is not a function');
  });

  test('renders nested object arrays in the Formly table widget with readable block output', async ({ page }) => {
    await loadFlowCode(page, [
      {
        "type": "mapping",
        "mapping": "{ items: [{ sequence: `1`, worktitle: `Mock Work`, C: [{ name: `Composer One`, ipi: `IPI-1` }] }] }"
      },
      {
        "type": "form",
        "label": "Send",
        "jsonSchema": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "sequence": { "type": "string" },
                  "worktitle": { "type": "string" },
                  "C": { "type": "string" }
                }
              }
            }
          }
        },
        "uiSchema": {
          "items": {
            "ui:widget": "table",
            "colHeadings": ["Sequence", "Worktitle", "Composers"],
            "allowAdd": false,
            "allowRemove": false,
            "items": {
              "C": {
                "ui:widget": "blocks",
                "blocksConfig": {
                  "blocks": [
                    {
                      "type": "batch",
                      "blocks": [
                        { "type": "mapping", "mapping": "data" },
                        { "type": "template", "template": "{{data.name}} ({{data.ipi}})" }
                      ]
                    }
                  ]
                }
              }
            }
          }
        }
      }
    ]);

    await expect(page.getByText('Composer One (IPI-1)')).toBeVisible();
    await expect(page.getByText('[object Object]')).toHaveCount(0);
  });
});
