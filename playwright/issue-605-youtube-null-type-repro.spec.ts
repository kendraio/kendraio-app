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

test.describe('Issue 605 YouTube null field minimal repro', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('renders a display-only null field without stopping later Video Details fields', async ({ page }) => {
    const appErrors = collectAppErrors(page);

    await loadFlowCode(page, [
      {
        type: 'mapping',
        mapping: '{ channelTitle: `Mock channel`, title: `Mock video title` }',
      },
      {
        type: 'form',
        label: 'Submit',
        jsonSchema: {
          title: 'Video Details',
          type: 'object',
          properties: {
            channelTitle: {
              title: 'Channel',
              type: 'null',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
          },
        },
        uiSchema: {},
      },
    ]);

    await expect(page.getByText('Video Details', { exact: true })).toBeVisible();
    await page.waitForTimeout(500);

    expect(observedAppError(appErrors, "Cannot read properties of undefined (reading 'value')")).toBeUndefined();

    await expect(page.getByText('Mock channel')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Title' })).toHaveValue('Mock video title');
  });
});
