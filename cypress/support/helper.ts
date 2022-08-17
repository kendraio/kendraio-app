import * as LZS from 'lz-string';

/**
 * Loads a Kendraio workflow from a block array, by generating a shared 
 * Workflow link. A compressed URL component is generated from 
 * the block array, then Cypress visits the URL. Kendraio App should 
 * parse the URL, as if it was any other user made shared workflow link.
 */
export function loadFlowCode(blocks: Array<{ [key: string]: any }>): void {
  const compressed = LZS.compressToEncodedURIComponent(JSON.stringify(blocks));
  const url = `/workflow-builder?data=${compressed}`;
  cy.visit(url).contains('Workflow');
}
