import { expect, test } from '@playwright/test';
import { appUrl, loadFlowCode, mockAdapterConfig, mockFonts } from './support';

const connectFlows = [
  {
    id: 'connectA',
    workflowId: 'connectA',
    title: 'Connect flow with dashboard',
    tags: ['connect', 'start:/core/dashboard'],
    adapterName: 'testAdapter',
  },
  {
    id: 'connectB',
    workflowId: 'connectB',
    title: 'Connect flow without dashboard',
    tags: ['connect'],
    adapterName: 'testAdapter',
  },
];

const startRouteGetter =
  'replace(replace(not_null(data.tags[?starts_with(@, `start:`)] | [0], ``), `start:/`, ``), `start:`, ``)';
const hasStartRouteGetter =
  `length(split(${startRouteGetter}, \`/\`)) == \`2\` && ` +
  `split(${startRouteGetter}, \`/\`)[0] != \`\` && ` +
  `split(${startRouteGetter}, \`/\`)[1] != \`\``;
const flowCentricRows = [
  {
    title: 'Flow renderer row with dashboard',
    tags: ['connect', 'start:/core/dashboard'],
  },
  {
    title: 'Flow renderer row without dashboard',
    tags: ['connect'],
  },
];
const flowCentricGridBlocks = [
  {
    type: 'mapping',
    mapping: `\`${JSON.stringify(flowCentricRows)}\``,
  },
  {
    type: 'grid',
    columnDefs: [
      {
        headerName: 'Title',
        field: 'title',
      },
      {
        headerName: 'Launch',
        cellRenderer: 'workflowRenderer',
        cellRendererParams: {
          blocks: [
            {
              type: 'switch',
              valueGetter: hasStartRouteGetter,
              cases: [
                {
                  value: true,
                  blocks: [
                    {
                      type: 'link-action',
                      label: 'Launch',
                      adapterNameGetter: `split(${startRouteGetter}, \`/\`)[0]`,
                      workflowIdGetter: `split(${startRouteGetter}, \`/\`)[1]`,
                    },
                  ],
                },
              ],
              default: {
                blocks: [],
              },
            },
          ],
        },
      },
    ],
  },
];

test.describe('Connect Flow launch links', () => {
  test('shows a Launch link from the start tag and leaves untagged rows empty', async ({ page }) => {
    await mockAdapterConfig(page);
    await mockFonts(page);
    await page.route('**/api/tag/connect', route =>
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(connectFlows),
      })
    );
    await page.route('**/api/core/dashboard', route =>
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({
          title: 'Tagged Dashboard Flow',
          tags: [],
          blocks: [
            {
              type: 'message',
              title: 'Tagged Dashboard Flow',
            },
          ],
        }),
      })
    );

    await page.goto(`${appUrl}/connect`);
    await expect(page.getByText('Connect flow with dashboard')).toBeVisible();
    await expect(page.getByText('Connect flow without dashboard')).toBeVisible();

    const launchLinks = page.getByRole('link', { name: 'Launch' });
    await expect(launchLinks).toHaveCount(1);
    await expect(launchLinks.first()).toHaveAttribute('href', /\/core\/dashboard$/);

    await launchLinks.first().click();

    await expect(page).toHaveURL(/\/core\/dashboard$/);
    await expect(page.getByRole('heading', { name: 'Tagged Dashboard Flow' })).toBeVisible();
  });

  test('supports a Flow-centric Launch column with workflowRenderer and link-action', async ({ page }) => {
    await mockAdapterConfig(page);
    await mockFonts(page);

    await loadFlowCode(page, flowCentricGridBlocks);

    await expect(page.getByText('Flow renderer row with dashboard')).toBeVisible();
    await expect(page.getByText('Flow renderer row without dashboard')).toBeVisible();

    const launchLinks = page.locator('app-grid-block').getByRole('link', { name: 'Launch' });
    await expect(launchLinks).toHaveCount(1);
    await expect(launchLinks.first()).toHaveAttribute('href', /\/core\/dashboard$/);
  });
});
