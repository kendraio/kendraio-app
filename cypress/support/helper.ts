import * as LZS from "lz-string";
import dexie from "dexie";
/**
 * Loads a Kendraio workflow from a block array, by generating a shared
 * Workflow link. A compressed URL component is generated from
 * the block array, then Cypress visits the URL. Kendraio App should
 * parse the URL, as if it was any other user made shared workflow link.
 */
export function loadFlowCode(blocks: Array<{ [key: string]: any }>): void {
  const compressed = LZS.compressToEncodedURIComponent(JSON.stringify(blocks));
  const url = `/workflow-builder?data=${compressed}`;
  cy.visit(url).contains("Flow");
}

/**
 * A helper function to ensure the the table "called "metadata" of the IndexedDB named "kendraio-db" is blank.
 */
export async function clearMetadataTable(): Promise<void> {
  try {
    if (window["databaseInit"] === false) {
      return;
    }
    const db = new dexie("kendraio-db");
    await db.open();
    await db.table("metadata").clear();
  } catch (error) {
    console.log(error);
  }
}

/**
 * A helper function to return the metadata table from the
 * "kendraio-db" IndexedDB database as an array after the db is opened.
 */
export async function getMetadataTable(): Promise<
  Array<{ [key: string]: any }>
> {
  const db = new dexie("kendraio-db");
  await new Promise((resolve) => setTimeout(resolve, 5500)); // this is arbitrary, but it seems needed to allow the db to open
  await db.open();
  const metadata = await db.table("metadata").toArray();
  return metadata;
}
