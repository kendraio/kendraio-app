import { expect, test } from '@playwright/test';
import { appUrl, clickAddTask, clickConfirmAddTask, fulfillFixture, loadFlowCode, mockCommonRequests, openWorkflowSettings } from './support';

test.describe('workspace-project App', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('should assert the mapping block produces the expected UUID string output', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "uuid('test')" },
      { "type": "debug", "open": 1, "showContext": false }
    ]);

    await expect(page.getByText('3ab8d0cd-7b76-5741-8bc9-5725650dc435')).toBeVisible();
  });

  test('should make new workflow with mapping block', async ({ page }) => {
    await page.goto(`${appUrl}/workflow-builder`);
    await expect(page.getByText('menu')).toBeVisible();
    await page.locator('app-root mat-toolbar').getByText('menu').click();
    await page.getByText('Flow Builder').click();
    await openWorkflowSettings(page);
    await page.locator('app-workflow-sidenav').getByText('delete_forever').click();
    await expect(page.locator('app-workflow-sidenav')).not.toContainText('Mapping');
    await clickAddTask(page);
    await expect(page.getByText('Select Task')).toBeVisible();
    await page.locator('mat-dialog-container').getByText('Mapping').click();
    await clickConfirmAddTask(page);
    await expect(page.getByRole('button', { name: 'Mapping' })).toBeVisible();
  });

  test('should display a custom title and additional form elements for the mapping editor block', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "`true`", "blockComment": "testingComment" }
    ]);
    await openWorkflowSettings(page);
    await expect(page.locator('app-workflow-sidenav')).toContainText('testingComment');
    await page.locator('app-workflow-sidenav').getByText('testingComment').click();
    await expect(page.locator('app-workflow-sidenav')).toContainText('Block Comment');
  });

  test('should display the comment for a generic editor block', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "template", "blockComment": "testingComment first line\nComment line2" }
    ]);
    await openWorkflowSettings(page);
    await expect(page.locator('app-workflow-sidenav')).toContainText('testingComment');
    await expect(page.locator('app-workflow-sidenav')).not.toContainText('line2');
    await page.locator('app-workflow-sidenav').getByText('testingComment').click();
  });

  test('should display welcome message', async ({ page }) => {
    await page.route('**/api/core/dashboard', route => fulfillFixture(route, 'dashboardHomeFlow.json'));
    await page.goto(`${appUrl}/`);
    await expect(page.getByRole('heading', { name: 'Kendraio App' })).toBeVisible();
  });

  test('should display saved workflows', async ({ page }) => {
    await page.route('**/api/workflowCloud/listWorkflows', route => fulfillFixture(route, 'listWorkflowsFlow.json'));
    await page.route('**/api', route => fulfillFixture(route, 'flowList.json'));

    await page.goto(`${appUrl}/workflowCloud/listWorkflows`);
    await page.getByText('Submit').click();
    await expect(page.getByText('Made up flow A')).toBeVisible();
  });

  test('should prevent a user from leaving the flow when the flow has been modified', async ({ page }) => {
    const startWorkflowPath = '/TESTING/dummy1';
    const dashboardPath = '/dashboard';

    await page.route('**/api/core/dashboard', route => fulfillFixture(route, 'dashboardHomeFlow.json'));
    await page.route('**/api/TESTING/dummy1', route => fulfillFixture(route, 'dummyWorkflow1.json'));

    let stayOnPage = true;
    page.on('dialog', async dialog => {
      if (stayOnPage) {
        stayOnPage = false;
        await dialog.dismiss();
      } else {
        await dialog.accept();
      }
    });

    await page.goto(`${appUrl}${startWorkflowPath}`);
    await expect(page).toHaveURL(new RegExp(`${startWorkflowPath}$`));
    await expect(page.getByText('Dummy Workflow 1', { exact: true })).toBeVisible();

    await openWorkflowSettings(page);
    await clickAddTask(page);
    await page.locator('app-add-block-dialog').getByText('Mapping').click();
    await clickConfirmAddTask(page);
    await expect(page.locator('mat-dialog-container')).toHaveCount(0);

    await page.locator('app-root mat-toolbar').getByText('menu').click();
    await page.locator('app-main-menu span.ml-2').filter({ hasText: /^Dashboard$/ }).click();
    await expect(page).toHaveURL(new RegExp(`${startWorkflowPath}$`));

    await page.locator('app-main-menu span.ml-2').filter({ hasText: /^Dashboard$/ }).click();
    await expect(page).toHaveURL(new RegExp(`${dashboardPath}$`));
  });
});
