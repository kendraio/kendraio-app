import { expect, test } from '@playwright/test';
import { loadFlowCode, mockCommonRequests } from './support';

test.describe('Mermaid block type', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('should render a mermaid graph', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "mapping", "mapping": "`A --> B --> C`" },
      { "type": "mermaid", "graphGetter": "data", "diagramType": "graph", "diagramDirection": "LR", "svgId": "mermaid-svg-test-1" },
      { "type": "mapping", "mapping": "{graph: `A --> D --> C`}" },
      { "type": "mermaid", "graphGetter": "data.graph", "diagramType": "graph", "diagramDirection": "RL", "svgId": "mermaid-svg-test-2" },
      { "type": "mermaid", "graphGetter": "state.local.graph", "diagramType": "graph", "diagramDirection": "TB", "svgId": "mermaid-svg-test-3" },
      { "type": "context-save", "key": "state.local.graph", "valueGetter": "`A --> B --> C; D --> B --> A`" }
    ]);

    await expect(page.locator('#mermaid-svg-test-1')).toBeVisible();
    await expect(page.locator('#mermaid-svg-test-2')).toBeVisible();
    await expect(page.locator('#mermaid-svg-test-3')).toBeVisible();
  });
});
