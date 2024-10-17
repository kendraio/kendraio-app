import os
import re

def create_big_string_from_repo(repo_path):
  """
  Creates a large string containing the content of all .ts and .html files in a git repository,
  excluding the 'node_modules' directory. Each file content is prepended with its relative
  path enclosed in markdown code block tags.

  Args:
    repo_path: Path to the git repository.

  Returns:
    A string containing the concatenated content of all relevant files.
  """

  big_string = ""

  for root, _, files in os.walk(repo_path):
    # Skip the 'node_modules' directory
    if 'node_modules' in root:
      continue
    # skip any hidden directories, except .github and .devcontainer
    if re.search(r'/\.', root) and not re.search(r'/\.github', root) and not re.search(r'/\.devcontainer', root):
      continue
    

    for filename in files:
      #if filename.endswith(('.ts', '.html', '.md', '.rst')):
      if filename.endswith(('.ts', '.html', '.json', '.js', '.yml', '.yaml')):
        filepath = os.path.join(root, filename)
        relative_path = os.path.relpath(filepath, repo_path)
        
        with open(filepath, 'r', encoding='utf-8') as file:
          content = file.read()

          # Add markdown code block tags with relative path
          big_string += f"```{relative_path}\n{content}\n```\n"

  return big_string.strip()

# Example usage:
repo_path = "/home/user/dev/kendraio-app"
big_string = create_big_string_from_repo(repo_path)

print(big_string) 
# Save to file:
with open("app_code_config.txt", "w", encoding="utf-8") as file:
  file.write(big_string)
