import { expect, test } from '@playwright/test';
import { expectDisabledButton, expectPrimaryButton, loadFlowCode, mockCommonRequests } from './support';

test.describe('Actions block type', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('should display a button with label, id and default color', async ({ page }) => {
    await loadFlowCode(page, [
      {
        "type": "actions",
        "buttons": [
          {
            "label": "OK",
            "color": "primary",
            "id": "button-primary",
            "blocks": [
              {
                "type": "dispatch",
                "action": "resetApp"
              }
            ]
          },
          {
            "label": "Cancel",
            "id": "button-cancel",
            "blocks": [
              {
                "type": "init"
              }
            ]
          }
        ]
      }
    ]);

    await expect(page.locator('#button-primary')).toBeVisible();
    await expect(page.locator('#button-primary')).toContainText('OK');
    await expectPrimaryButton(page.locator('#button-primary'));
    await expect(page.locator('#button-cancel')).toBeVisible();
    await expect(page.locator('#button-cancel')).toContainText('Cancel');
  });

  test('should display a disabled button', async ({ page }) => {
    await loadFlowCode(page, [
      {
        "type": "actions",
        "buttons": [
          {
            "label": "Disabled",
            "id": "button-disabled",
            "blocks": [],
            "enabledGetter": "`false`"
          }
        ]
      }
    ]);

    const button = page.locator('#button-disabled');
    await expect(button).toBeVisible();
    await expectDisabledButton(button);
  });
});

test.describe('LinkActionComponent', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('should generate the correct link URL from plain strings', async ({ page }) => {
    await loadFlowCode(page, [
      {
        "type": "link-action",
        "label": "Test Link",
        "adapterName": "myAdapter",
        "workflowId": "myWorkflow"
      }
    ]);

    await expect(page.locator('app-link-action a')).toHaveAttribute('href', '/myAdapter/myWorkflow');
  });

  test('should generate the correct link URL using object mappings', async ({ page }) => {
    await loadFlowCode(page, [
      {
        "type": "mapping",
        "mapping": "{ adapter: `testAdapter`, workflow: `testWorkflow` }"
      },
      {
        "type": "link-action",
        "label": "Dynamic Link",
        "adapterNameGetter": "data.adapter",
        "workflowIdGetter": "data.workflow"
      }
    ]);

    await expect(page.locator('app-link-action a')).toHaveAttribute('href', '/testAdapter/testWorkflow');
  });

  test('should not have no link target by default', async ({ page }) => {
    await loadFlowCode(page, [
      {
        "type": "link-action",
        "label": "Test Link",
        "adapterName": "myAdapter",
        "workflowId": "myWorkflow"
      }
    ]);

    await expect(page.locator('app-link-action a')).not.toHaveAttribute('target', /.+/);
  });
});
