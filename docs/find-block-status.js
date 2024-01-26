/**
 * To help find Blocks with possible reactivity issues in a targeted way,
 * this script helps to:
 *
 * 1. Find the Blocks most frequently used in Flow Cloud,
 *
 * 2. Cross reference the block names, as used in the JSON config of a Flow,
 * with the tag name and component filename.
 *
 * 3. It checks which blocks contain possible rxjsStrings.
 *
 * It requires Node and htmlparser2.
 *
 * It should be ran from the root of the project directory, like this:
 * `node docs/find-block-status.js`.
 *
 * Do not fully rely on the output of this, it is heuristic!
 *
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { Parser: HtmlParser } = require('htmlparser2');

const blocksWorkflowComponentTemplatePath = 'src/app/components/blocks-workflow/blocks-workflow.component.html';
const url = 'https://app.kendra.io/flows';
const rxjsStrings = ['from \'rxjs\'', '.subscribe'];
const matcher = /@Component\(\{[^\}]*selector:\s*'([^']+)'/s;
const REPORT_PATH = 'flow-analysis/block-status-report.json';

/**
 * Fetches and processes JSON data from a URL.
 * @param url The URL from which to fetch the data.
 * @returns A Promise resolving to the fetched JSON data.
 */
async function fetchJsonData(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => data += chunk);
            response.on('end', () => resolve(JSON.parse(data)));
            response.on('error', (err) => reject(err));
        });
    });
}
/**
 * Counts occurrences of block types in the fetched data.
 * @param data The JSON data containing block information.
 * @returns An array of [blockType, count] tuples, with most common first.
 */
function countBlockTypes(data) {
    const blockTypes = data.flatMap(item => item.blocks)
        .filter(block => block && block.type)
        .map(block => block.type);
    return Array.from(new Map(blockTypes.map(type => [type, blockTypes.filter(t => t === type).length])))
        .sort((a, b) => b[1] - a[1]);
}
/**
 * Extracts component selectors from TypeScript files in a given directory.
 * @param blocksDirectory The directory to search for TypeScript files.
 * @returns An object mapping selectors to file paths.
 */
function extractSelectors(blocksDirectory) {
    const selectors = {};
    const traverseDirectory = (directory) => {
        fs.readdirSync(directory, { withFileTypes: true }).forEach(file => {
            if (file.isDirectory()) {
                traverseDirectory(path.join(directory, file.name));
            }
            else if (file.name.endsWith('.component.ts')) {
                const filePath = path.join(directory, file.name);
                const content = fs.readFileSync(filePath, 'utf8');
                const matchCheck = matcher.exec(content);
                if (matchCheck)
                    selectors[matchCheck[1]] = filePath;
            }
        });
    };
    traverseDirectory(blocksDirectory);
    return selectors;
}
/**
 * Checks if a file contains any of the given strings.
 * @param filePath The path of the file to check.
 * @param strings An array of strings to search for.
 * @returns True if any of the strings are found in the file.
 */
function containsStrings(filePath, strings) {
    const content = fs.readFileSync(filePath, 'utf8');
    return strings.some(string => content.includes(string));
}
/**
 * Parses HTML content to extract mapping of ngSwitchCase values to tags.
 * @param htmlContent The HTML content to parse.
 * @returns An object mapping ngSwitchCase values to HTML tags.
 */
function parseHTML(htmlContent) {
    let ngContainerDepth = 0;
    let foundFirstNgContainer = false;
    let inTargetNgContainer = false;
    const extractData = [];
    const parser = new HtmlParser({
        onopentag: (name, attributes) => {
            if (name === 'ng-container') {
                ngContainerDepth++;
                if (ngContainerDepth === 2 && !foundFirstNgContainer) {
                    foundFirstNgContainer = true;
                    inTargetNgContainer = true;
                }
            }
            if (inTargetNgContainer && name !== 'ng-container') {
                const ngSwitchCaseValue = attributes['*ngswitchcase'];
                if (ngSwitchCaseValue)
                    extractData.push({ tag: name, ngSwitchCaseValue });
            }
        },
        onclosetag: (name) => {
            if (name === 'ng-container') {
                ngContainerDepth--;
                if (ngContainerDepth === 1)
                    inTargetNgContainer = false;
            }
        }
    }, { decodeEntities: true });
    parser.write(htmlContent);
    parser.end();
    return extractData.reduce((mapping, item) => {
        mapping[item.ngSwitchCaseValue.replace(/'/g, '')] = item.tag;
        return mapping;
    }, {});
}
/**
 * The main function to execute the program.
 */
async function main() {
    const htmlContent = fs.readFileSync(blocksWorkflowComponentTemplatePath, 'utf8');
    const mapping = parseHTML(htmlContent);
    console.log('Mapping:', JSON.stringify(mapping, null, 2));

    const data = await fetchJsonData(url);
    const mostCommonBlocks = countBlockTypes(data);
    console.log("Most common block types:", JSON.stringify(mostCommonBlocks, null, 2));
    const blocksDir = 'src/app/blocks';
    const selectors = extractSelectors(blocksDir);

    const mayUsePubSub = {};
    const blockDetails = {};
    mostCommonBlocks.forEach(([blockName]) => {
        const trimmedBlockName = blockName.trim();
        const selector = mapping[trimmedBlockName];
        if (selector) {
            const componentFile = selectors[selector];
            mayUsePubSub[trimmedBlockName] = componentFile && fs.existsSync(componentFile) ? containsStrings(componentFile, rxjsStrings) : false;
            blockDetails[trimmedBlockName] = {
                filename: componentFile && fs.existsSync(componentFile) ? componentFile : undefined,
                tagName: selector
            };
        } else {
            console.log('No selector found for block:', trimmedBlockName);
            mayUsePubSub[trimmedBlockName] = false;
        }
    });
    console.log("Analysis results:", JSON.stringify({ mayUsePubSub, blockDetails }, null, 2));
    // Save the JSON objects to the specified file
    const report = {
        mapping: mapping,
        mostCommonBlocks: mostCommonBlocks,
        mayUsePubSub: mayUsePubSub,
        blockDetails: blockDetails
    };

    const reportPath = path.join(__dirname, REPORT_PATH);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
}
main();
