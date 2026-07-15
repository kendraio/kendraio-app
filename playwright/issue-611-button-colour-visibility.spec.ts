import { expect, test, type Locator } from '@playwright/test';
import { dirname, join } from 'path';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { loadFlowCode, mockCommonRequests } from './support';

const screenshotPath = process.env.PLAYWRIGHT_BUTTON_LAB_SCREENSHOT ||
  join(process.cwd(), 'test-results', 'issue-611-flow-button-sources.png');
const dialogScreenshotPath = screenshotPath.replace(/\.png$/, '-dialog.png');
const coloursPath = screenshotPath.replace(/\.png$/, '-colours.json');
const whiteColoursPath = screenshotPath.replace(/\.png$/, '-white-colours.json');
const whiteBackground = 'rgb(255, 255, 255)';
const expectedWhiteColourKeys = [];

const flowLabStyles = `
  html,
  body {
    height: auto !important;
    overflow: auto !important;
  }

  app-root,
  mat-sidenav-content,
  .mat-drawer-content {
    min-height: 100vh;
    overflow: auto !important;
  }

  app-blocks-workflow {
    display: block;
    max-width: 1160px;
    padding: 24px;
  }

  app-template-block.block-wrapper,
  app-actions-block.block-wrapper,
  app-link-action.block-wrapper,
  app-form-block.block-wrapper,
  app-grid-block.block-wrapper {
    display: block;
    margin-bottom: 22px;
  }

  .issue-611-section {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    padding-top: 16px;
  }

  .issue-611-section:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .issue-611-section h1,
  .issue-611-section h2 {
    margin: 0 0 8px;
  }

  .issue-611-section p {
    margin: 0 0 12px;
  }

  app-actions-block .actions-button,
  app-link-action a {
    margin: 0 10px 10px 0;
  }

  ag-grid-angular {
    min-height: 116px;
  }
`;

async function renderedColours(locator: Locator) {
  return locator.evaluate(element => {
    const isTransparent = (value: string) =>
      value === 'transparent' ||
      value === 'rgba(0, 0, 0, 0)' ||
      value === 'rgba(0,0,0,0)';
    const style = window.getComputedStyle(element);
    let effectiveBackgroundElement: Element | null = element;
    let effectiveBackgroundColor = style.backgroundColor;

    while (effectiveBackgroundElement && isTransparent(effectiveBackgroundColor)) {
      effectiveBackgroundElement = effectiveBackgroundElement.parentElement;
      effectiveBackgroundColor = effectiveBackgroundElement
        ? window.getComputedStyle(effectiveBackgroundElement).backgroundColor
        : effectiveBackgroundColor;
    }

    return {
      background_color: style.backgroundColor,
      text_color: style.color,
      border_color: style.borderColor,
      effective_background_color: effectiveBackgroundColor,
      opacity: style.opacity,
    };
  });
}

test.describe('Issue 611 button colour visibility', () => {
  test.describe.configure({ mode: 'serial' });

  test.use({ viewport: { width: 1440, height: 1200 } });

  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('shows current Flow-rendered button sources for visual inspection', async ({ page }, testInfo) => {
    const waitMs = Number(process.env.PLAYWRIGHT_BUTTON_LAB_WAIT_MS || 0);
    test.setTimeout(35_000 + waitMs);

    await loadFlowCode(page, [
      {
        type: 'template',
        renderToScreen: true,
        template: `
          <section class="issue-611-section">
            <h1>Issue 611 Flow button sources</h1>
            <p>Template block anchor link: <a href="/connect">Open Connect</a></p>
          </section>
        `,
      },
      {
        type: 'template',
        renderToScreen: true,
        template: `
          <section class="issue-611-section">
            <h2>Actions block buttons</h2>
            <p>Flat action buttons with no colour, primary, accent, warn, link, disabled, and a dialog trigger.</p>
          </section>
        `,
      },
      {
        type: 'actions',
        buttons: [
          { label: 'Actions default flat', id: 'issue-611-actions-default', blocks: [] },
          { label: 'Actions primary flat', id: 'issue-611-actions-primary', color: 'primary', blocks: [] },
          { label: 'Actions accent flat', id: 'issue-611-actions-accent', color: 'accent', blocks: [] },
          { label: 'Actions warn flat', id: 'issue-611-actions-warn', color: 'warn', blocks: [] },
          { label: 'Actions link text', id: 'issue-611-actions-link', color: 'link', blocks: [] },
          {
            label: 'Actions disabled flat',
            id: 'issue-611-actions-disabled',
            enabledGetter: '`false`',
            blocks: [],
          },
          {
            label: 'Open dialog block',
            id: 'issue-611-open-dialog',
            blocks: [
              {
                type: 'dialog',
                blocks: [
                  {
                    type: 'template',
                    renderToScreen: true,
                    template: `
                      <section class="issue-611-section">
                        <h2>Dialog block</h2>
                        <p>This dialog is opened by a Flow action and contains a form block button.</p>
                      </section>
                    `,
                  },
                  {
                    type: 'form',
                    label: 'Dialog form submit',
                    jsonSchema: {
                      type: 'object',
                      properties: {
                        note: {
                          type: 'string',
                          title: 'Dialog note',
                        },
                      },
                    },
                    uiSchema: {},
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'template',
        renderToScreen: true,
        template: `
          <section class="issue-611-section">
            <h2>Link Action block</h2>
            <p>The Link Action block renders a flat link to another Flow.</p>
          </section>
        `,
      },
      {
        type: 'link-action',
        label: 'Link Action default flat',
        adapterName: 'core',
        workflowId: 'dashboard',
      },
      {
        type: 'template',
        renderToScreen: true,
        template: `
          <section class="issue-611-section">
            <h2>Form block button</h2>
            <p>The Form block renders a primary submit button.</p>
          </section>
        `,
      },
      {
        type: 'form',
        label: 'Form block submit',
        jsonSchema: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              title: 'Title',
            },
          },
        },
        uiSchema: {},
      },
      {
        type: 'template',
        renderToScreen: true,
        template: `
          <section class="issue-611-section">
            <h2>Grid cellRendererParams action buttons</h2>
            <p>Each row renders an Actions block inside a workflowRenderer cell.</p>
          </section>
        `,
      },
      {
        type: 'mapping',
        mapping: '[{ name: `Example row`, status: `Ready` }]',
      },
      {
        type: 'grid',
        gridOptions: {
          rowHeight: 58,
          suppressCellFocus: true,
        },
        sizeColumnsToFit: false,
        columnDefs: [
          {
            headerName: 'Name',
            field: 'name',
            width: 180,
          },
          {
            headerName: 'Status',
            field: 'status',
            width: 140,
          },
          {
            headerName: 'Per-row actions',
            width: 560,
            cellRenderer: 'workflowRenderer',
            cellRendererParams: {
              blocks: [
                {
                  type: 'actions',
                  buttons: [
                    { label: 'Grid default flat', id: 'issue-611-grid-default', blocks: [] },
                    { label: 'Grid primary flat', id: 'issue-611-grid-primary', color: 'primary', blocks: [] },
                    { label: 'Grid warn flat', id: 'issue-611-grid-warn', color: 'warn', blocks: [] },
                  ],
                },
              ],
            },
          },
        ],
      },
    ]);

    await page.addStyleTag({ content: flowLabStyles });

    await expect(page.getByRole('button', { name: 'Actions default flat' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Link Action default flat' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Form block submit' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Open Connect' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Grid default flat' })).toBeVisible();

    mkdirSync(dirname(screenshotPath), { recursive: true });
    await page.screenshot({ path: screenshotPath, fullPage: true });
    await testInfo.attach('issue-611-flow-button-sources', {
      path: screenshotPath,
      contentType: 'image/png',
    });

    const colours = {
      template_anchor_link: await renderedColours(page.getByRole('link', { name: 'Open Connect' })),
      actions_default_flat: await renderedColours(page.locator('#issue-611-actions-default')),
      actions_primary_flat: await renderedColours(page.locator('#issue-611-actions-primary')),
      actions_accent_flat: await renderedColours(page.locator('#issue-611-actions-accent')),
      actions_warn_flat: await renderedColours(page.locator('#issue-611-actions-warn')),
      actions_link_text: await renderedColours(page.locator('#issue-611-actions-link')),
      actions_disabled_flat: await renderedColours(page.locator('#issue-611-actions-disabled')),
      open_dialog_block: await renderedColours(page.locator('#issue-611-open-dialog')),
      link_action_default_flat: await renderedColours(page.locator('app-link-action a')),
      form_block_submit: await renderedColours(page.getByRole('button', { name: 'Form block submit' })),
      grid_default_flat: await renderedColours(page.locator('#issue-611-grid-default')),
      grid_primary_flat: await renderedColours(page.locator('#issue-611-grid-primary')),
      grid_warn_flat: await renderedColours(page.locator('#issue-611-grid-warn')),
    };

    await page.getByRole('button', { name: 'Open dialog block' }).click();
    const dialog = page.locator('mat-dialog-container').first();
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('button', { name: 'Dialog form submit' })).toBeVisible();
    await dialog.screenshot({ path: dialogScreenshotPath });
    await testInfo.attach('issue-611-flow-button-sources-dialog', {
      path: dialogScreenshotPath,
      contentType: 'image/png',
    });

    const coloursWithDialog = {
      ...colours,
      dialog_form_submit: await renderedColours(dialog.getByRole('button', { name: 'Dialog form submit' })),
    };
    const coloursJson = JSON.stringify(coloursWithDialog, null, 2);
    writeFileSync(coloursPath, `${coloursJson}\n`);
    console.log(`issue_611_flow_button_colours = ${coloursJson}`);
    await testInfo.attach('issue-611-flow-button-colours', {
      path: coloursPath,
      contentType: 'application/json',
    });

    if (waitMs > 0) {
      await page.waitForTimeout(waitMs);
    }
  });

  test('extracts the current white Flow-rendered button sources from the colour JSON', async ({}, testInfo) => {
    const colours = JSON.parse(readFileSync(coloursPath, 'utf8'));
    const whiteColours = Object.fromEntries(
      Object.entries(colours).filter(([, value]: [string, any]) =>
        value.background_color === whiteBackground
      )
    );
    const whiteColoursJson = JSON.stringify(whiteColours, null, 2);

    writeFileSync(whiteColoursPath, `${whiteColoursJson}\n`);
    console.log(`issue_611_white_flow_button_colours = ${whiteColoursJson}`);

    expect(Object.keys(whiteColours).sort()).toEqual([...expectedWhiteColourKeys].sort());
    await testInfo.attach('issue-611-white-flow-button-colours', {
      path: whiteColoursPath,
      contentType: 'application/json',
    });
  });
});
