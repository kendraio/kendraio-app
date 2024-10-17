/**
 * This script is designed to explore the configuration used for particular blocks in flows saved to Flow Cloud.
 * It can optionally filter by a specific config property, allowing for more targeted analysis.
 *
 * Why It's Useful:
 * - Helps identify patterns or common configurations for specific block types.
 * - Assists in auditing and understanding how a particular property is being used across multiple flows.
 *
 * How to Use:
 * 1. Modify the variables below to specify the block type and property of interest (if any).
 * 2. Run the script using Node.js.
 * 3. Check the generated JSON file for the grouped data.
 */

let inputFilePath = 'flow-analysis/flows.json';
let outputFilePath = 'flow-analysis/flow-block-config-analysis.json';

let blockType = 'form'; // Replace with the block type you're interested in
let propertyOfInterest = null; // E.g: 'uiSchema' - replace with the property you're interested in or leave as null
let KENDRAIO_APP_URL = 'https://app.kendra.io/';

const fs = require('fs');
const https = require('https');
const { URL } = require('url');

const readJsonFile = (filePath) =>
  JSON.parse(fs.readFileSync(filePath, 'utf8'));

const writeJsonFile = (data, filePath) =>
  fs.writeFileSync(filePath, JSON.stringify(data, null, 4));

// Function to generate grouped JSON based on block type and optionally a property of interest
const generateGroupedJson = (
  inputFilePath,
  outputFilePath,
  blockType,
  propertyOfInterest = null
) => {
  const flowsData = readJsonFile(inputFilePath);
  let enhancedFlowsWithBlocks = [];
  let groupedByAdapter = {};

  // Iterate through the flows to collect blocks and their metadata
  for (const flow of flowsData) {
    let flowBlocks = []; // To store the blocks with the property of interest for this flow

    if (flow.blocks) {
      for (const block of flow.blocks) {
        const hasMatchingBlock = block.type === blockType;
        let hasPropertyOfInterest;
        // If no property of interest is specified, so all properties are interesting!
        if (!propertyOfInterest) {
          hasPropertyOfInterest = true;
        }

        if (propertyOfInterest) {
          // If the object has a specific property that matches our interest and it's not empty, then it's interesting!
          hasPropertyOfInterest =
            block[propertyOfInterest] &&
            Object.keys(block[propertyOfInterest]).length > 0;
        }

        if (hasMatchingBlock && hasPropertyOfInterest) {
          flowBlocks.push(block);
        }
      }
    }

    if (flowBlocks.length > 0) {
      // Add metadata
      const blockMetadata = {
        adapterName: flow.adapterName,
        id: flow.id,
        title: flow.title,
        url: `${KENDRAIO_APP_URL}${flow.adapterName}/${flow.id}`,
      };

      // Add the blocks and metadata to the enhanced list
      const enhancedFlowEntry = { meta: blockMetadata, blocks: flowBlocks };
      enhancedFlowsWithBlocks.push(enhancedFlowEntry);
    }
  }

  // Group the flows by 'adapterName'
  for (const entry of enhancedFlowsWithBlocks) {
    const adapterName = entry.meta.adapterName;
    if (!groupedByAdapter[adapterName]) {
      groupedByAdapter[adapterName] = [];
    }
    groupedByAdapter[adapterName].push(entry);
  }

  // Write the grouped data to the output file
  writeJsonFile(groupedByAdapter, outputFilePath);
};

// Main function to execute the script
(async () => {
  // Check if 'flows.json' exists in the current directory
  if (!fs.existsSync(inputFilePath)) {
    // Download the JSON file using Node.js built-in https
    const url = new URL(`${KENDRAIO_APP_URL}flows`);
    const file = fs.createWriteStream(inputFilePath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        generateGroupedJson(
          inputFilePath,
          outputFilePath,
          blockType,
          propertyOfInterest
        );
      });
    });
  } else {
    generateGroupedJson(
      inputFilePath,
      outputFilePath,
      blockType,
      propertyOfInterest
    );
  }
})();
