"""
Generates a Markdown file from files in the current directory,
using rules to include or exclude specific file extensions and directories.
It has some default rules that can be modified as needed.
The generated markdown file will contain code blocks for each file.

Usage:
$ python save_folder_files_to_markdown.py
"""

OUTPUT_FILE_PATH = "combined_files.md"
FILE_EXTENSIONS_TO_INCLUDE = {'.sh', '.py', '.js', '.ts', '.html', '.md', '.rst', '.json', '.yml', '.yaml'}
ALLOWED_HIDDEN_DIRECTORIES = {'.github', '.devcontainer'}
DIRECTORIES_TO_SKIP = {'node_modules'}
FILES_TO_SKIP = {OUTPUT_FILE_PATH, __file__}
SKIP_HIDDEN_DIRECTORIES = True

from pathlib import Path

MARKDOWN_TEMPLATE = """
```{relative_path}
{content}
```

"""

base_working_path = Path.cwd()

def should_skip_directory(path_parts):
    """Check if the path contains a directory that should be skipped."""
    return any(part in DIRECTORIES_TO_SKIP for part in path_parts)

def is_hidden_directory(path_parts):
    """Check if the path contains a hidden directory that should be skipped."""
    return any(
        part.startswith('.') and part not in ALLOWED_HIDDEN_DIRECTORIES 
        for part in path_parts
    )

big_string = ""

for path in base_working_path.rglob('*'):
    if should_skip_directory(path.parts):
        continue
    
    if SKIP_HIDDEN_DIRECTORIES and is_hidden_directory(path.parts):
        continue

    if path.name in FILES_TO_SKIP:
        continue

    if path.suffix in FILE_EXTENSIONS_TO_INCLUDE:
        relative_path = path.relative_to(base_working_path)
        content = path.read_text(encoding='utf-8')
        # Adds markdown code block tags with relative path:
        big_string += MARKDOWN_TEMPLATE.format(**locals())

with open(OUTPUT_FILE_PATH, "w", encoding="utf-8") as file:
    file.write(big_string)
