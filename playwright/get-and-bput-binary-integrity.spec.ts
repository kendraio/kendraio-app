import { expect, test } from '@playwright/test';
import { isLocalAppUrl, loadFlowCode, mockCommonRequests } from './support';

test.describe('S3 Bucket Binary Integrity Test', () => {
  test.skip(!isLocalAppUrl, 'S3 browser tests depend on the local app origin and local s3rver at 127.0.0.1:4568');

  const s3BaseUrl = 'http://127.0.0.1:4568';
  const bucketName = 'test-bucket';
  const fileName = 'icon-72x72.png';
  const originalAssetUrl = `/assets/icons/${fileName}`;
  const s3ObjectUrl = `${s3BaseUrl}/${bucketName}/${fileName}`;
  const expectedHash = '07670d6af9d02e9cbe0ed5e1e67e403243966300';

  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('should not find image in bucket', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "init" },
      {
        "type": "http",
        "method": "GET",
        "endpoint": `${s3ObjectUrl}wrong_path_to_force_404`,
        "responseType": "arraybuffer",
        "authentication": { "type": "aws-sigv4", "accessKeyId": "S3RVER", "secretKey": "S3RVER" },
        "skipInit": false,
        "storeMetadataInContext": true
      },
      { "type": "debug", "open": 4, "showData": true, "showContext": true }
    ]);

    await expect(page.locator('app-debug-block').nth(0)).toContainText('404');
    console.log('\n--- S3 RETRIEVAL DEBUG ---\n' + await page.locator('app-debug-block').nth(0).innerText() + '\n--------------------------\n');
  });

  test('should upload the asset, retrieve it, and verify its integrity', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "http", "method": "GET", "endpoint": originalAssetUrl, "responseType": "arraybuffer", "skipInit": false, "storeMetadataInContext": true },
      { "type": "mapping", "mapping": "{ content: data }" },
      {
        "type": "http",
        "method": "BPUT",
        "endpoint": s3ObjectUrl,
        "authentication": { "type": "aws-sigv4", "accessKeyId": "S3RVER", "secretKey": "S3RVER" },
        "skipInit": false,
        "headers": { "Content-Type": "'image/png'" },
        "storeMetadataInContext": false
      },
      { "type": "debug", "open": 4, "showData": true, "showContext": true },
      {
        "type": "http",
        "method": "GET",
        "endpoint": s3ObjectUrl,
        "responseType": "arraybuffer",
        "authentication": { "type": "aws-sigv4", "accessKeyId": "S3RVER", "secretKey": "S3RVER" },
        "skipInit": false,
        "storeMetadataInContext": true
      },
      { "type": "debug", "open": 4, "showData": true, "showContext": true }
    ]);

    await expect(page.locator('app-debug-block').nth(0)).toContainText('200');
    await expect(page.locator('app-debug-block').nth(1)).toContainText(expectedHash);
    console.log('\n--- S3 RETRIEVAL DEBUG ---\n' + await page.locator('app-debug-block').nth(0).innerText() + '\n--------------------------\n');
    console.log('\n--- S3 RETRIEVAL DEBUG ---\n' + await page.locator('app-debug-block').nth(1).innerText() + '\n--------------------------\n');
  });

  test('should find image in bucket', async ({ page }) => {
    await loadFlowCode(page, [
      { "type": "init" },
      {
        "type": "http",
        "method": "GET",
        "endpoint": s3ObjectUrl,
        "responseType": "arraybuffer",
        "authentication": { "type": "aws-sigv4", "accessKeyId": "S3RVER", "secretKey": "S3RVER" },
        "skipInit": false,
        "storeMetadataInContext": true
      },
      { "type": "debug", "open": 4, "showData": true, "showContext": true }
    ]);

    await expect(page.locator('app-debug-block').nth(0)).toContainText('200');
    await expect(page.locator('app-debug-block').nth(0)).toContainText(expectedHash);
    console.log('\n--- S3 RETRIEVAL DEBUG ---\n' + await page.locator('app-debug-block').nth(0).innerText() + '\n--------------------------\n');
  });
});
