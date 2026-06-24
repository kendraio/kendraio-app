import { expect, test, type Page } from '@playwright/test';
import { loadFlowCode, mockCommonRequests } from './support';

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

function observedAppError(errors: string[], fragment: string) {
  return errors.some(error => error.includes(fragment)) ? fragment : undefined;
}

test.describe('Issue 605 YouTube tags ng-select minimal repro', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('renders the YouTube tags widget without the ng-select selection-model provider error', async ({ page }) => {
    const appErrors = collectAppErrors(page);

    await loadFlowCode(page, [
      {
        type: 'mapping',
        mapping: '{ tags: `alpha` }',
      },
      {
        type: 'form',
        label: 'Submit',
        jsonSchema: {
          title: 'Video Details',
          type: 'object',
          properties: {
            tags: {
              title: 'Tags',
              description: 'Press enter to add a tag',
              type: 'string',
            },
          },
        },
        uiSchema: {
          tags: {
            'ui:widget': 'tags',
          },
        },
      },
    ]);

    await expect(page.getByText('Video Details', { exact: true })).toBeVisible();
    await page.waitForTimeout(500);

    expect(observedAppError(appErrors, 'No provider for InjectionToken ng-select-selection-model')).toBeUndefined();

    await expect(page.locator('select-tags ng-select')).toBeVisible();
    await expect(page.getByText('No provider for InjectionToken ng-select-selection-model')).toHaveCount(0);
  });
});
