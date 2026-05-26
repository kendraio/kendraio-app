import { expect, test, type Page } from '@playwright/test';
import { appUrl, clickShareDatabase, clickShareWorkflow, loadFlowCode, mockCommonRequests, openWorkflowSettings } from './support';

async function getMetadataLabels(page: Page) {
  return page.evaluate(async () => {
    return new Promise<string[]>(resolve => {
      const request = indexedDB.open('kendraio-db');
      request.onerror = () => resolve([]);
      request.onsuccess = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('metadata')) {
          db.close();
          resolve([]);
          return;
        }
        const transaction = db.transaction('metadata', 'readonly');
        const records = transaction.objectStore('metadata').getAll();
        records.onsuccess = () => {
          db.close();
          resolve(records.result.map((record: any) => record.label));
        };
        records.onerror = () => {
          db.close();
          resolve([]);
        };
      };
    });
  });
}

test.describe('Share functionality', () => {
  test.beforeEach(async ({ page }) => {
    await mockCommonRequests(page);
  });

  test('should assert a shared database loads as expected using given URL', async ({ page }) => {
    const databaseUrl = "/workflow-builder?metadata=NobwRArhCWAmYC4wGZkEMAsAOWBTADALT4BsAjLoRgKwCcAZobbWbYblgEwDGJyJnarGTwANGDSw0ABwAuuAE4A5NAFtciMAGduAC1yq0WsOJ37DK9ZukLo6gPqroAO2hb5C4+Kmy0icM5qGkgASm660GAAvuIANmgARrixmmFaEdGi4FBwmhj41NT0+ADsyIQlFGzYZGSEWCU87PjIZdTc+LQkuLQmElJyipbB2noGRn1m48PWtg5Oru6KXmA+fggBQZoAQgD2tsYxYPFJKUh7B5nZMPBIlZwJ1D3cVCW4JVS0aNT1WBgkxGQtGQ+FwsBKGH+Yn6Mg8MyQU0MK0RaHhYBsdlwjhcbg8KzW-jAgSsSAAMtAAF6ZY6JZKaclUmLXXJId5oTi1ESEJLvKj4WCwJiFH5oLokDD0LDIehkBJ+cSSWFDLYIsZIyZq1Eq0bmCbeNC+Qk5W5gNkcshcnkffICoWFQiikjiyXS2Xy9EKXbSRSyaC4YwIUBgADWuAAnppiRpxL7ZLERjMY2HvZoACq4AAesmiAF1xFHZpjsYs8X08DpbHJoLtnJoAAoAWQABLFcX0TnSkAWjh2zh6iwtcctc0A";
    const flowUrl = "/workflow-builder?data=NobwRALgngDgpmAXGA5gewM4FcBGYA0YAhgCZEwRwBOAckQLYLIYDGAFnPURgWAO5oqAawBmAGzR8AkiSRhWHLj0I4JLIQGE09RgDsIcgDJpSAAgWduYAL75w0eHICWupwdv3YTSJxhiilLyU9H4B3gA8bABMAHwAIgFEONxwpixo nD6GOEA9NExNnaQXnJcMDAuKLzllbrVyGQQRMAA-FhYTiQAvN0ABnAA7ERRAIyjAMwkALQ4cEPTACwADCQzAJwArNvTROsAbPuLIgAcEyKjyX0AuqYAPqbAy9e8qmjqWjpZBsgAYk5iShUczsSymCBoUxYKhiUwwIhUBhFTyOZDpTIADwg0wwRAAbghCOjKFiANJwKByCxcV5qTTaPQ-eT41JoaHmeAsJwiJwsEGKIjIkqosCMDC4lCEyBuMTeQxODAQUxuTgYUwiKjafmWRCmEAgNIZEkQAB01KIJt0DFS1msQoc3hIeEIaHgiIgTgycklBkIpHIQLojCpoKUvHNAHE4BAgXJiXAsWbQxarcGVHTPoyjCYSKYmkR1Zr6NqaR5hd5alUauQ6g0wPngNcTYwqJKABQAAXwetM-jmYl1Ps73YAJCb44nzSa 3AxABKaxz2nvelffRyKNKiAcUwAHWlEFl 9M9tKjTgOCw1Rd8F0SFGhAwbEkCWaSAgVCwcEfz74WkxPwiEQYgYN 8i-gAys0gSIEBIFwGWDrelQXS8CgKEkAA8hQnq6DwiDgPCKAuAEuHvp YFESRHoZAACkQkoQU4ABeTArLYYDpGIWD0LocRwCI GgGAHCkNQQZykks68Dys6yMgM5iEKokkOJ1pyNh1CkRkyicbOYgAEpZKpVDUHIAjCOIkhGboJlmUS k2XZVD0Yi9D4eAbzqEJKLeEQLA0XhrxYDGOlIMJilyAAoiQbjLt54W XI-hYLo7C8P6FBmcwya6RZogSNI8lgHAsUQFIwS8BOPzgOaMhxkaCamgAjl VBQK5DAYEmAr1YQqGNIkJodKhtrXIQWRJLK8kfl 1jXPNtrFCpanBsgUhxDJThyXII2yPN6Yrpm3xyKeIr YFumXqFQWIBFUlKcgACCaymBVnBVWgEhUHIqlAVggLxUIPnlslRCpelfpkFlP05QKeWCAVkj1cgpVuO99CfQBSC1cmKOcY1iatdQHUIl1PWWH1YADWAe1tkuY0TVaqileRc3FJFyDyoqpjAbC5pXXSINIQp4NpWwGXQ7GcOWAjlmFfjYgKu440lcz01swhqteauWbIGd3joNgzrEFLq3eE4ISCLGhD5VZRVyCIaBoDbYA68d65-M7QK7ne81AA";

    page.on('dialog', dialog => dialog.accept());

    await page.goto(`${appUrl}${databaseUrl}`);
    await expect(page.getByText('Flow', { exact: true })).toBeVisible();
    await expect.poll(() => getMetadataLabels(page), { timeout: 15000 }).toEqual(expect.arrayContaining(['Boris', 'Liz', 'Rishi']));

    await page.goto(`${appUrl}${flowUrl}`);
    await expect(page.getByText('Boris')).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('Liz')).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('Rishi')).toBeVisible({ timeout: 15000 });

    await openWorkflowSettings(page);
    await clickShareWorkflow(page);
    await clickShareDatabase(page);

    await expect(page.locator('app-show-share-link-dialog textarea')).toContainText(databaseUrl);
  });

  test('should share a Flow link that reloads the same Flow', async ({ page }) => {
    await loadFlowCode(page, [
      {
        "type": "template",
        "template": "<h1>Shared Flow Smoke</h1><img src=x onerror=window.__issue605ShareXss=true>"
      }
    ]);

    await expect(page.getByRole('heading', { name: 'Shared Flow Smoke' })).toBeVisible();
    await expect.poll(() => page.evaluate(() => (window as any).__issue605ShareXss)).toBeUndefined();

    await openWorkflowSettings(page);
    await clickShareWorkflow(page);
    await page.getByRole('button', { name: 'Share flow' }).click();

    const shareTextarea = page.locator('app-show-share-link-dialog textarea');
    await expect(shareTextarea).toContainText('/workflow-builder?data=');
    const shareLink = ((await shareTextarea.textContent()) || '').trim();
    const sharedUrl = new URL(shareLink);

    await page.goto(`${appUrl}${sharedUrl.pathname}${sharedUrl.search}`);
    await expect(page.getByRole('heading', { name: 'Shared Flow Smoke' })).toBeVisible();
    await expect.poll(() => page.evaluate(() => (window as any).__issue605ShareXss)).toBeUndefined();
  });
});
