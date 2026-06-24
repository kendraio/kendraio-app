import * as fs from 'node:fs';
import * as path from 'node:path';
import { test, type Browser, type Locator, type Page, type Route, type TestInfo } from '@playwright/test';
import * as LZS from 'lz-string';

const buggyBaseUrl = process.env.PLAYWRIGHT_BUGGY_BASE_URL || 'https://kendraio-7lw9scl28-kendraio.vercel.app';
const fixedBaseUrl = process.env.PLAYWRIGHT_FIXED_BASE_URL || 'https://kendraio-app-git-develop-angular-18-fixes-kendraio.vercel.app';
const docsImageDir = path.join(process.cwd(), 'docs/issue-605-607-visual-comparison');

const steppingStonesFlow = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'playwright/fixtures/transposed_steppingstones_map_spreadsheet_style_flow.json'), 'utf8')
);
const countriesGeoJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'playwright/fixtures/countries-110m-all.geojson'), 'utf8')
);

type Scenario = {
  id: string;
  title: string;
  note: string;
  prepare: (page: Page, baseUrl: string) => Promise<void>;
  capture?: (page: Page) => Locator;
};

async function mockCommonRequests(page: Page) {
  await page.route('https://kendraio.github.io/kendraio-adapter/config.json', route =>
    route.fulfill({
      contentType: 'application/json',
      path: 'cypress/fixtures/adapterConfig.json',
    })
  );
  await page.route('**/api/workflowCloud/listWorkflows', route =>
    route.fulfill({
      contentType: 'application/json',
      path: 'cypress/fixtures/workflow-cloud.json',
    })
  );
}

function collectAppErrors(page: Page) {
  const errors: string[] = [];

  page.on('console', message => {
    if (message.type() === 'error') {
      errors.push(message.text());
    }
  });
  page.on('pageerror', error => errors.push(error.message));

  return errors;
}

async function showFirstMatchingError(page: Page, errors: string[], fragments: string[], label?: string) {
  const error = errors.find(message => fragments.some(fragment => message.includes(fragment)));

  if (!error) {
    return;
  }

  await page.locator('app-form-block').first().evaluate((element, message) => {
    const existing = element.querySelector('[data-issue-605-error]');
    existing?.remove();

    const banner = document.createElement('div');
    banner.setAttribute('data-issue-605-error', 'true');
    banner.textContent = message;
    banner.style.background = '#fff1f2';
    banner.style.border = '1px solid #f43f5e';
    banner.style.borderRadius = '4px';
    banner.style.color = '#9f1239';
    banner.style.font = '700 16px/1.35 Arial, Helvetica, sans-serif';
    banner.style.margin = '8px 0';
    banner.style.padding = '10px';
    banner.style.whiteSpace = 'normal';
    element.prepend(banner);
  }, label || error);
}

async function constrainFormEvidenceWidth(page: Page) {
  await page.addStyleTag({
    content: `
      app-form-block {
        display: block !important;
        width: 560px !important;
        max-width: 560px !important;
      }
    `,
  });
}

async function loadFlowCode(page: Page, baseUrl: string, blocks: Array<Record<string, any>>) {
  const compressed = LZS.compressToEncodedURIComponent(JSON.stringify(blocks));
  await page.goto(`${baseUrl}/workflow-builder?data=${compressed}`, { waitUntil: 'domcontentloaded' });
  await page.getByText('Flow', { exact: true }).or(page.getByText('Flow name', { exact: true })).first().waitFor();
  await stabilizeForScreenshot(page);
}

async function stabilizeForScreenshot(page: Page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        caret-color: transparent !important;
        transition-duration: 0s !important;
        animation-duration: 0s !important;
        animation-delay: 0s !important;
      }
    `,
  }).catch(() => undefined);

  await page.evaluate(() => document.fonts?.ready).catch(() => undefined);
  await page.waitForTimeout(500);
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

async function loadSteppingStonesFlow(page: Page, baseUrl: string) {
  await page.route('**/api/steppingstones/transposedspreadsheet', route =>
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(steppingStonesFlow),
    })
  );
  await mockCountryProvider(page);

  await page.goto(`${baseUrl}/steppingstones/transposedspreadsheet`, { waitUntil: 'domcontentloaded' });
  await page.getByText('Stepping Stones Map', { exact: true }).waitFor();
  await page.locator('mat-select').first().click();
  await page.getByRole('option', { name: 'P5', exact: true }).click();
  await page.waitForTimeout(2500);
  await stabilizeForScreenshot(page);
}

async function mockLoggedInUser(page: Page) {
  await page.route('https://kendraio.eu.auth0.com/**', route =>
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({ sub: 'auth0|issue-605-607' }),
    })
  );
  await page.route('https://kendraio-auth0-proxy.vercel.app/', route =>
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({
        nickname: 'issue605',
        name: 'Issue 605 Tester',
        updated_at: '2026-05-22T00:00:00Z',
        picture: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="96" height="96"%3E%3Crect width="96" height="96" fill="%23d0d8e8"/%3E%3Ccircle cx="48" cy="38" r="18" fill="%23667"/%3E%3Cpath d="M18 88c5-23 55-23 60 0" fill="%23667"/%3E%3C/svg%3E',
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
}

async function captureTarget(page: Page, scenario: Scenario) {
  const target = scenario.capture?.(page);
  if (target) {
    try {
      await target.first().waitFor({ state: 'visible', timeout: 3000 });
      return target.first().screenshot({ timeout: 5000 });
    } catch {
      // Fall back to the viewport so a broken state still produces evidence.
    }
  }

  return page.screenshot({ fullPage: false });
}

function htmlEscape(value: string) {
  return value.replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char] || char));
}

async function writeComparison(browser: Browser, testInfo: TestInfo, scenario: Scenario) {
  const context = await browser.newContext({
    deviceScaleFactor: 1,
    viewport: { width: 1180, height: 820 },
  });
  const buggyPage = await context.newPage();
  const fixedPage = await context.newPage();

  await Promise.all([
    mockCommonRequests(buggyPage),
    mockCommonRequests(fixedPage),
  ]);

  await Promise.all([
    scenario.prepare(buggyPage, buggyBaseUrl),
    scenario.prepare(fixedPage, fixedBaseUrl),
  ]);

  const [buggyImage, fixedImage] = await Promise.all([
    captureTarget(buggyPage, scenario),
    captureTarget(fixedPage, scenario),
  ]);

  fs.mkdirSync(path.join(docsImageDir, 'buggy'), { recursive: true });
  fs.mkdirSync(path.join(docsImageDir, 'fixed'), { recursive: true });
  fs.writeFileSync(path.join(docsImageDir, 'buggy', `${scenario.id}.png`), buggyImage);
  fs.writeFileSync(path.join(docsImageDir, 'fixed', `${scenario.id}.png`), fixedImage);

  const reportPage = await context.newPage();
  await reportPage.setViewportSize({ width: 1600, height: 940 });
  await reportPage.setContent(`
    <!doctype html>
    <html>
      <head>
        <style>
          body {
            margin: 0;
            background: #f4f5f7;
            color: #17202a;
            font: 16px/1.4 Arial, Helvetica, sans-serif;
          }
          .report {
            padding: 24px;
          }
          h1 {
            margin: 0 0 6px;
            font-size: 24px;
            font-weight: 700;
          }
          .note {
            margin: 0 0 18px;
            color: #475569;
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }
          .pane {
            overflow: hidden;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            background: #fff;
          }
          .label {
            padding: 10px 12px;
            border-bottom: 1px solid #cbd5e1;
            font-weight: 700;
          }
          .label.buggy {
            background: #fff1f2;
            color: #9f1239;
          }
          .label.fixed {
            background: #ecfdf3;
            color: #166534;
          }
          img {
            display: block;
            width: 100%;
            height: auto;
          }
        </style>
      </head>
      <body>
        <main class="report">
          <h1>${htmlEscape(scenario.title)}</h1>
          <p class="note">${htmlEscape(scenario.note)}</p>
          <section class="grid">
            <article class="pane">
              <div class="label buggy">Buggy f7dea9b: ${htmlEscape(buggyBaseUrl)}</div>
              <img src="data:image/png;base64,${buggyImage.toString('base64')}" />
            </article>
            <article class="pane">
              <div class="label fixed">Fixed branch: ${htmlEscape(fixedBaseUrl)}</div>
              <img src="data:image/png;base64,${fixedImage.toString('base64')}" />
            </article>
          </section>
        </main>
      </body>
    </html>
  `);

  const comparisonImage = await reportPage.screenshot({ fullPage: true });
  const outputPath = testInfo.outputPath(`${scenario.id}.png`);
  fs.writeFileSync(outputPath, comparisonImage);
  fs.writeFileSync(path.join(docsImageDir, `${scenario.id}.png`), comparisonImage);
  await testInfo.attach(scenario.id, { path: outputPath, contentType: 'image/png' });
  await context.close();
}

const scenarios: Scenario[] = [
  {
    id: '01-issue-607-formly-array-buttons',
    title: '#607 Material style: array cards and action buttons',
    note: 'The buggy build shows the Material upgrade spacing/button regression; the fixed build keeps array controls compact.',
    prepare: async (page, baseUrl) => {
      await loadFlowCode(page, baseUrl, [
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
    },
    capture: page => page.locator('formly-array-type').first(),
  },
  {
    id: '02-issue-605-lineup-blocks-widget',
    title: '#605 Lineup field: blocks widget versus plain text input',
    note: 'The buggy build loses ui:widget: blocks inside an array item; the fixed build shows the artist select widget.',
    prepare: async (page, baseUrl) => {
      await loadFlowCode(page, baseUrl, [
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
        }
      ]);
      await page.getByRole('button', { name: /Lineup$/ }).click();
      await page.waitForTimeout(500);
      await stabilizeForScreenshot(page);
    },
    capture: page => page.locator('formly-array-type').first(),
  },
  {
    id: '03-issue-605-connect-dialog-padding',
    title: '#605 Connect dialog: missing content padding',
    note: 'The buggy dialog places the form against the dialog edge; the fixed dialog uses Material dialog content padding.',
    prepare: async (page, baseUrl) => {
      await loadFlowCode(page, baseUrl, [
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
      await page.locator('mat-dialog-container').waitFor();
      await stabilizeForScreenshot(page);
    },
    capture: page => page.locator('mat-dialog-container').first(),
  },
  {
    id: '04-issue-605-user-avatar-buttons',
    title: '#605 User page: full-width avatar and buttons',
    note: 'The buggy build stretches the profile avatar and controls; the fixed build constrains the avatar and buttons.',
    prepare: async (page, baseUrl) => {
      await mockLoggedInUser(page);
      await page.goto(`${baseUrl}/user`, { waitUntil: 'domcontentloaded' });
      await page.locator('app-user-page').waitFor();
      await stabilizeForScreenshot(page);
    },
    capture: page => page.locator('app-user-page').first(),
  },
  {
    id: '05-issue-605-steppingstones-map',
    title: '#605 Steppingstones: world map missing',
    note: 'The buggy build fails to render the Leaflet map after selecting P5; the fixed build renders markers and country shapes.',
    prepare: loadSteppingStonesFlow,
    capture: page => page.locator('app-root').first(),
  },
  {
    id: '06-issue-605-nested-table-output',
    title: '#605 Nested table: readable blocks output',
    note: 'The buggy build omits or stringifies nested composer objects; the fixed build renders the readable composer label.',
    prepare: async (page, baseUrl) => {
      await loadFlowCode(page, baseUrl, [
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
    },
    capture: page => page.locator('form').first(),
  },
  {
    id: '07-issue-605-youtube-null-field',
    title: '#605 YouTube Video Details: null field crash',
    note: 'The buggy build stops rendering Video Details after a JSON schema null field; the fixed build shows the read-only channel and later fields.',
    prepare: async (page, baseUrl) => {
      const appErrors = collectAppErrors(page);
      await loadFlowCode(page, baseUrl, [
        {
          "type": "mapping",
          "mapping": "{ channelTitle: `Mock channel`, title: `Mock video title` }"
        },
        {
          "type": "form",
          "label": "Submit",
          "jsonSchema": {
            "title": "Video Details",
            "type": "object",
            "properties": {
              "channelTitle": {
                "title": "Channel",
                "type": "null"
              },
              "title": {
                "title": "Title",
                "type": "string"
              }
            }
          },
          "uiSchema": {}
        }
      ]);
      await page.getByText('Video Details', { exact: true }).waitFor();
      await page.waitForTimeout(500);
      await constrainFormEvidenceWidth(page);
      await showFirstMatchingError(
        page,
        appErrors,
        ["Cannot read properties of undefined (reading 'value')"],
        "TypeError: Cannot read properties of undefined (reading 'value')"
      );
      await stabilizeForScreenshot(page);
    },
    capture: page => page.locator('app-form-block').first(),
  },
  {
    id: '08-issue-605-youtube-tags-widget',
    title: '#605 YouTube Video Details: tags widget provider',
    note: 'The buggy build raises the ng-select selection-model provider error; the fixed build renders the tags widget in Video Details.',
    prepare: async (page, baseUrl) => {
      const appErrors = collectAppErrors(page);
      await loadFlowCode(page, baseUrl, [
        {
          "type": "mapping",
          "mapping": "{ tags: `alpha` }"
        },
        {
          "type": "form",
          "label": "Submit",
          "jsonSchema": {
            "title": "Video Details",
            "type": "object",
            "properties": {
              "tags": {
                "title": "Tags",
                "description": "Press enter to add a tag",
                "type": "string"
              }
            }
          },
          "uiSchema": {
            "tags": {
              "ui:widget": "tags"
            }
          }
        }
      ]);
      await page.getByText('Video Details', { exact: true }).waitFor();
      await page.waitForTimeout(500);
      await constrainFormEvidenceWidth(page);
      await showFirstMatchingError(
        page,
        appErrors,
        ['No provider for InjectionToken ng-select-selection-model'],
        'NullInjectorError: No provider for InjectionToken ng-select-selection-model'
      );
      await stabilizeForScreenshot(page);
    },
    capture: page => page.locator('app-form-block').first(),
  },
];

test.describe('Issue 605 and 607 visual comparisons', () => {
  test.setTimeout(180000);

  for (const scenario of scenarios) {
    test(scenario.title, async ({ browser }, testInfo) => {
      await writeComparison(browser, testInfo, scenario);
    });
  }
});
