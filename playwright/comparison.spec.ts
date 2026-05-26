import { expect, test } from '@playwright/test';
import { loadFlowCode, mockCommonRequests } from './support';

test.describe('Comparison Block Capabilities', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('has a default result', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "{source:`one`, one:`one`, two:`two` }" },
      { "type": "comparison", "valueGetter": "data.source", "default": "default" },
      { "type": "debug" }
    ]);
    await expect(page.getByText('default')).toBeVisible();
  });

  test('returns a value for a matching comparison', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "{ source:`one`, one:`one`, two:`two` }" },
      {
        "type": "comparison",
        "valueGetter": "data.source",
        "default": "default",
        "comparisons": [{ "operator": "==", "target": "one", "output": "one" }]
      },
      { "type": "debug" }
    ]);
    await expect(page.getByText('one').first()).toBeVisible();
  });

  test('returns a jmespath value for a matching comparison', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "{ source:`one`, one:`one`, two:`two`, path:`one` }" },
      {
        "type": "comparison",
        "valueGetter": "data.source",
        "default": "default",
        "comparisons": [{ "operator": "==", "target": "data.path", "targetType": "jmespath", "output": "path" }]
      },
      { "type": "debug" }
    ]);
    await expect(page.getByText('path')).toBeVisible();
  });

  test('keeps processing comparisons until it finds a matching comparison', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "{ source:`two`, one:`one`, two:`two`  }" },
      {
        "type": "comparison",
        "valueGetter": "data.source",
        "default": "default",
        "comparisons": [
          { "operator": "==", "target": "one", "output": "first" },
          { "operator": "==", "target": "two", "output": "second" }
        ]
      },
      { "type": "debug" }
    ]);
    await expect(page.getByText('second')).toBeVisible();
  });

  test('ignores badly formed comparisons', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "{ source:`two`, one:`one`, two:`two`  }" },
      {
        "type": "comparison",
        "valueGetter": "data.source",
        "default": "default",
        "comparisons": [
          { "operator": "==", "target": "", "output": "first" },
          { "operator": "==", "target": "two", "output": "second" }
        ]
      },
      { "type": "debug" }
    ]);
    await expect(page.getByText('second')).toBeVisible();
  });

  test('can cope with a non-existent source value', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "{ source:`two`, one:`one`, two:`two`  }" },
      {
        "type": "comparison",
        "valueGetter": "data.null",
        "default": "default",
        "comparisons": [{ "operator": "null", "output": "null" }]
      },
      { "type": "debug" }
    ]);
    await expect(page.getByText('null').first()).toBeVisible();
  });

  test('allows jmespath default values', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "{ source:`two`, one:`first`, two:`second`  }" },
      {
        "type": "comparison",
        "valueGetter": "data.source",
        "default": "data.two",
        "defaultType": "jmespath",
        "comparisons": [
          {
            "operator": "typeof",
            "target": "array",
            "targetType": "value",
            "output": "one",
            "outputType": "value"
          }
        ]
      },
      { "type": "debug" }
    ]);
    await expect(page.getByText('second')).toBeVisible();
  });
});
