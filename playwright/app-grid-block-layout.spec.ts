import { expect, test } from '@playwright/test';
import { loadFlowCode, mockAdapterConfig, mockFonts } from './support';

const TEST_GRID_CONFIG = {
  type: 'grid',
  passThrough: true,
  gridOptions: {
    pagination: true,
    paginationPageSize: 15,
    defaultColDef: {
      sortable: true,
      resizable: true,
    },
  },
  columnDefs: [
    { field: '0', headerName: 'Column 1' },
    { field: '1', headerName: 'Column 2' },
    { field: '2', headerName: 'Column 3' },
    { field: '3', headerName: 'Column 4' },
    { field: '4', headerName: 'Column 5' },
  ],
};

test.describe('Grid Block Columns', () => {
  test.beforeEach(async ({ page }) => {
    await mockAdapterConfig(page);
    await mockFonts(page);
    await loadFlowCode(page, [TEST_GRID_CONFIG]);
  });

  test('should display the columns side by side without text overlap', async ({ page }) => {
    const columns = page.locator('.ag-header-cell');
    await expect(columns).toHaveCount(5);
    const bounds = await columns.evaluateAll(els => els.slice(0, 2).map(el => el.getBoundingClientRect().toJSON()));
    expect(bounds[0].right).toBeLessThanOrEqual(bounds[1].left);
  });
});
