// Generates a markdown file from files in the current directory,
// using rules to include or exclude specific file extensions and directories.
// It has some default rules that can be modified as needed.
// The generated markdown file will contain code blocks for each file.
// Usage: node save_folder_files_to_markdown.js

const fs = require('fs');
const path = require('path');

// Configuration
const OUTPUT_FILE_PATH = 'combined_files.md';
const FILE_EXTENSIONS_TO_INCLUDE = new Set([
  '.sh',
  '.py',
  '.js',
  '.ts',
  '.html',
  '.md',
  '.rst',
  '.json',
  '.yml',
  '.yaml',
]);
const ALLOWED_HIDDEN_DIRECTORIES = new Set(['.github', '.devcontainer']);
const DIRECTORIES_TO_SKIP = new Set(['node_modules']);
const FILES_TO_SKIP = new Set([OUTPUT_FILE_PATH, path.basename(__filename)]);
const SKIP_HIDDEN_DIRECTORIES = true;

const MARKDOWN_TEMPLATE = `
\`\`\`{relativePath}
{content}
\`\`\`

`;

const baseWorkingPath = process.cwd();

// Helper function to recursively walk through directories
function* walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      yield* walkSync(fullPath);
    } else {
      yield fullPath;
    }
  }
}

function shouldSkipDirectory(parts) {
  return parts.some((part) => DIRECTORIES_TO_SKIP.has(part));
}

function isHiddenDirectory(parts) {
  return parts.some(
    (part) => part.startsWith('.') && !ALLOWED_HIDDEN_DIRECTORIES.has(part)
  );
}

let bigString = '';

// Walk through the files
for (const filePath of walkSync(baseWorkingPath)) {
  const relativePath = path.relative(baseWorkingPath, filePath);
  const parts = relativePath.split(path.sep);

  if (
    shouldSkipDirectory(parts) ||
    (SKIP_HIDDEN_DIRECTORIES && isHiddenDirectory(parts))
  ) {
    continue;
  }

  if (FILES_TO_SKIP.has(path.basename(filePath))) {
    continue;
  }

  if (FILE_EXTENSIONS_TO_INCLUDE.has(path.extname(filePath))) {
    const content = fs.readFileSync(filePath, 'utf-8');
    bigString += MARKDOWN_TEMPLATE.replace(
      '{relativePath}',
      relativePath
    ).replace('{content}', content);
  }
}

// Write the output to the markdown file
fs.writeFileSync(OUTPUT_FILE_PATH, bigString, 'utf-8');
