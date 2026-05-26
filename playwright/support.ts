import { expect, type Locator, type Page, type Route } from '@playwright/test';
import * as LZS from 'lz-string';

export const appUrl = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:4200';
export const isLocalAppUrl = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?($|\/)/.test(appUrl);

export async function mockAdapterConfig(page: Page) {
  await page.route('https://kendraio.github.io/kendraio-adapter/config.json', route =>
    route.fulfill({
      contentType: 'application/json',
      path: 'cypress/fixtures/adapterConfig.json',
    })
  );
}

export async function mockWorkflowCloud(page: Page) {
  await page.route('**/api/workflowCloud/listWorkflows', route =>
    route.fulfill({
      contentType: 'application/json',
      path: 'cypress/fixtures/workflow-cloud.json',
    })
  );
}

export async function mockFonts(page: Page) {
  await page.route('https://fonts.googleapis.com/**', route =>
    route.fulfill({
      contentType: 'text/css',
      body: '*{ }',
    })
  );
}

export async function mockCommonRequests(page: Page) {
  await mockAdapterConfig(page);
  await mockWorkflowCloud(page);
  await mockFonts(page);
}

export async function loadFlowCode(page: Page, blocks: Array<Record<string, any>>) {
  const compressed = LZS.compressToEncodedURIComponent(JSON.stringify(blocks));
  await page.goto(`${appUrl}/workflow-builder?data=${compressed}`);
  await expect(page.getByText('Flow', { exact: true }).or(page.getByText('Flow name', { exact: true }))).toBeVisible();
}

export async function fulfillFixture(route: Route, fixturePath: string, contentType = 'application/json') {
  await route.fulfill({
    contentType,
    path: `cypress/fixtures/${fixturePath}`,
  });
}

async function clickFirstVisible(locators: Locator[], label: string) {
  for (const locator of locators) {
    const first = locator.first();
    if (await first.count() === 0) {
      continue;
    }
    try {
      await expect(first).toBeVisible({ timeout: 1000 });
      await first.click();
      return;
    } catch {
      // Try the next compatible selector shape.
    }
  }

  throw new Error(`Could not find visible ${label}`);
}

export async function openWorkflowSettings(page: Page) {
  await clickFirstVisible([
    page.locator('[data-cy="toolbar-setting-button"]'),
    page.locator('app-root mat-toolbar button').filter({ hasText: /^settings$/ }),
  ], 'workflow settings button');
}

export async function clickAddTask(page: Page) {
  await clickFirstVisible([
    page.locator('[data-cy="blocks-editor-add-task"]'),
    page.locator('app-workflow-sidenav button').filter({ hasText: /Add Task|add/ }),
  ], 'add task button');
}

export async function clickShareWorkflow(page: Page) {
  await clickFirstVisible([
    page.locator('[data-cy="sidenav-share-button"]'),
    page.locator('app-workflow-sidenav button').filter({ hasText: /^share$/ }),
  ], 'workflow share button');
}

export async function clickConfirmAddTask(page: Page) {
  await clickFirstVisible([
    page.locator('[data-cy="dialog-addBlock-addTask-button"]'),
    page.locator('mat-dialog-container button').filter({ hasText: /^Add Task$/ }),
  ], 'dialog add task button');
}

export async function clickShareDatabase(page: Page) {
  await clickFirstVisible([
    page.locator('[data-cy="dialog-share-shareDatabase"]'),
    page.locator('mat-dialog-container button').filter({ hasText: /^Share database$/ }),
  ], 'share database button');
}

export async function expectPrimaryButton(button: Locator) {
  await expect.poll(() => button.evaluate(el =>
    el.getAttribute('ng-reflect-color') === 'primary' ||
    el.classList.contains('mat-primary') ||
    el.classList.contains('mat-mdc-primary')
  )).toBeTruthy();
}

export async function expectDisabledButton(button: Locator) {
  await expect.poll(() => button.evaluate(el =>
    el.hasAttribute('disabled') ||
    el.getAttribute('aria-disabled') === 'true' ||
    el.getAttribute('ng-reflect-disabled') === 'true' ||
    el.classList.contains('mat-button-disabled') ||
    el.classList.contains('mdc-button--disabled')
  )).toBeTruthy();
}

export async function clearMetadataTable(page: Page) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve, reject) => {
      const request = indexedDB.open('kendraio-db');
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('metadata')) {
          db.close();
          resolve();
          return;
        }
        const transaction = db.transaction('metadata', 'readwrite');
        transaction.objectStore('metadata').clear();
        transaction.oncomplete = () => {
          db.close();
          resolve();
        };
        transaction.onerror = () => {
          db.close();
          reject(transaction.error);
        };
      };
    }).catch(() => undefined);
  });
}

export async function getMetadataTable(page: Page) {
  await page.waitForTimeout(5500);
  return page.evaluate(async () => {
    return new Promise<Array<any>>((resolve, reject) => {
      const request = indexedDB.open('kendraio-db');
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('metadata')) {
          db.close();
          resolve([]);
          return;
        }
        const transaction = db.transaction('metadata', 'readonly');
        const getAll = transaction.objectStore('metadata').getAll();
        getAll.onsuccess = () => {
          db.close();
          resolve(getAll.result);
        };
        getAll.onerror = () => {
          db.close();
          reject(getAll.error);
        };
      };
    });
  });
}

export async function openSidebar(page: Page) {
  const sidenav = page.locator('mat-sidenav').first();
  const className = await sidenav.getAttribute('class');
  if (!className || !className.includes('mat-drawer-opened')) {
    await page.locator('button[mat-icon-button]').first().click();
  }
  await expect(sidenav).toHaveClass(/mat-drawer-opened/);
}
