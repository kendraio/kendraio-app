import json
import jmespath
from jmespath import functions
import pydash
import base64
import uuid
import copy
from datetime import datetime, timezone, timedelta
from urllib.parse import urlencode, parse_qs
import markdown as md_lib

# Ensure you have installed the required libraries:
# pip install jmespath pydash markdown

# Custom JMESPath functions class
class CustomFunctions(functions.Functions):
    # Define all possible JMESPath types
    VALID_JMESPATH_TYPES = ['string', 'number', 'boolean', 'object', 'array', 'null']

    # Custom 'get' function with two signatures: one with two arguments and one with three
    @functions.signature(
        {'types': ['object', 'array']},
        {'types': ['string']}
    )
    @functions.signature(
        {'types': ['object', 'array']},
        {'types': ['string']},
        {'types': ['string', 'number', 'boolean', 'object', 'array', 'null']}
    )
    def _func_get(self, obj, path, default=None):
        return pydash.get(obj, path, default)

    # Custom 'set' function that returns a new object with the value set at the specified path
    @functions.signature(
        {'types': ['object', 'array']},
        {'types': ['string']},
        {'types': ['string', 'number', 'boolean', 'object', 'array', 'null']}
    )
    def _func_set(self, obj, path, value):
        obj_copy = copy.deepcopy(obj)
        pydash.set_(obj_copy, path, value)
        return obj_copy

    # Custom 'findIndex' function
    @functions.signature({'types': ['array']}, {'types': ['object']})
    def _func_findIndex(self, array, search_obj):
        for idx, item in enumerate(array):
            if isinstance(item, dict) and all(item.get(k) == v for k, v in search_obj.items()):
                return idx
        return -1  # Return -1 if not found

    @functions.signature({"types": ["null", "string", "number", "object"], "variadic": True})
    def _func_uuid(self, *args):
        # Handle zero arguments
        if len(args) == 0:
            return str(uuid.uuid4())

        # Handle one argument (name)
        elif len(args) == 1:
            name = args[0]
            if name is None:
                name = ''
            namespace_string = 'https://app.kendra.io'
            namespace_uuid = uuid.uuid5(uuid.NAMESPACE_URL, namespace_string)
            return str(uuid.uuid5(namespace_uuid, name))

        # Handle two arguments (name and namespace_string)
        elif len(args) == 2:
            name, namespace_string = args
            if name is None:
                raise exceptions.JMESPathTypeError(
                    'uuid', name, 'string', ['string']
                )
            if namespace_string is not None and not isinstance(namespace_string, str):
                raise exceptions.JMESPathTypeError(
                    'uuid', namespace_string, type(namespace_string).__name__, ['string', 'null']
                )
            if namespace_string is None:
                namespace_string = 'https://app.kendra.io'
            namespace_uuid = uuid.uuid5(uuid.NAMESPACE_URL, namespace_string)
            return str(uuid.uuid5(namespace_uuid, name))

        # Handle more than two arguments
        else:
            raise Exception("too many arguments for uuid")

    # Custom 'toLower' function
    @functions.signature({'types': ['string']})
    def _func_toLower(self, s):
        return s.lower()

    # Custom 'toUpper' function
    @functions.signature({'types': ['string']})
    def _func_toUpper(self, s):
        return s.upper()

    # Custom 'replace' function
    @functions.signature({'types': ['string']}, {'types': ['string']}, {'types': ['string']})
    def _func_replace(self, s, old, new):
        return s.replace(old, new)

    # Custom 'replaceAll' function
    @functions.signature({'types': ['string']}, {'types': ['string']}, {'types': ['string']})
    def _func_replaceAll(self, s, old, new):
        return s.replace(old, new)  # Python's replace already replaces all occurrences

    # Custom 'trim' function
    @functions.signature({'types': ['string']})
    def _func_trim(self, s):
        return s.strip()

    # Custom 'now' function
    @functions.signature()
    def _func_now(self):
        return datetime.now(timezone.utc).isoformat()

    # Custom 'formatDate' function
    @functions.signature({'types': ['string']}, {'types': ['string']})
    def _func_formatDate(self, date_string, format_string):
        try:
            dt = datetime.fromisoformat(date_string.replace('Z', '+00:00'))
            return dt.strftime(format_string)
        except ValueError:
            return None

    # Custom 'omit' function
    @functions.signature({'types': ['object']}, {'types': ['array']})
    def _func_omit(self, obj, keys):
        return {k: v for k, v in obj.items() if k not in keys}

    # Custom 'pick' function
    @functions.signature({'types': ['object']}, {'types': ['array']})
    def _func_pick(self, obj, keys):
        return {k: v for k, v in obj.items() if k in keys}

    # Custom 'split' function
    @functions.signature({'types': ['string']}, {'types': ['string']})
    def _func_split(self, s, separator):
        print(f"debugging split on `{separator}`",s,separator)
        return s.split(separator)

    # Custom 'find' function
    @functions.signature({'types': ['array']}, {'types': ['string']}, {'types': ['string', 'number', 'boolean', 'object', 'array', 'null']})
    def _func_find(self, array, key, value):
        for item in array:
            if isinstance(item, dict) and item.get(key) == value:
                return item
        return None

    # Custom 'compact' function
    @functions.signature({'types': ['object']})
    def _func_compact(self, obj):
        return {k: v for k, v in obj.items() if v}

    # Custom 'qs' function (Query String stringify)
    @functions.signature({'types': ['object']})
    def _func_qs(self, obj):
        return urlencode(obj, doseq=True)

    # Custom 'parseQs' function (Query String parse)
    @functions.signature({'types': ['string']})
    def _func_parseQs(self, qs):
        return {k: v if len(v) > 1 else v[0] for k, v in parse_qs(qs).items()}

    # Custom 'zip' function
    @functions.signature({'types': ['array']}, {'types': ['array']})
    def _func_zip(self, a1, a2):
        return pydash.zip_object(a1,a2)

    # Custom 'debug' function
    @functions.signature({'types': ['string', 'number', 'boolean', 'object', 'array', 'null']})
    def _func_debug(self, v):
        print('Debug value in mapping:', v)
        return v

    # Custom 'json' function
    @functions.signature({'types': ['string', 'number', 'boolean', 'object', 'array', 'null']})
    def _func_json(self, v):
        return json.dumps(v, ensure_ascii=False)

    # Custom 'markdown' function
    @functions.signature({'types': ['string']})
    def _func_markdown(self, s):
        return md_lib.markdown(s)

    # Custom 'btoa' function
    @functions.signature({'types': ['string']})
    def _func_btoa(self, s):
        return base64.b64encode(s.encode('utf-8')).decode('utf-8')

    # Custom 'base64encode' function (handles UTF-8)
    @functions.signature({'types': ['string']})
    def _func_base64encode(self, s):
        return base64.b64encode(s.encode('utf-8')).decode('utf-8')

    # Custom 'pairwise' function
    @functions.signature({'types': ['array']})
    def _func_pairwise(self, input_array):
        return [{'current': input_array[i], 'next': input_array[i + 1] if i + 1 < len(input_array) else None}
                for i in range(len(input_array))]

    # Custom 'numDiff' function
    @functions.signature({'types': ['number']}, {'types': ['number']})
    def _func_numDiff(self, a, b):
        return a - b

    # Custom 'percentChange' function
    @functions.signature({'types': ['number']}, {'types': ['number']})
    def _func_percentChange(self, old_value, new_value):
        if old_value == 0:
            return None  # Avoid division by zero
        return ((new_value - old_value) / old_value) * 100

    # Custom 'groupByKeys' function
    @functions.signature({'types': ['array']})
    def _func_groupByKeys(self, input_array):
        grouped = {}
        for item in input_array:
            if isinstance(item, dict):
                for key, value in item.items():
                    if key in grouped:
                        grouped[key].append(value)
                    else:
                        grouped[key] = [value]
        return grouped

    # Custom 'toPairs' function
    @functions.signature({'types': ['object']})
    def _func_toPairs(self, obj):
        return list(obj.items())

    # Custom 'fromPairs' function
    @functions.signature({'types': ['array']})
    def _func_fromPairs(self, pairs):
        return {k: v for k, v in pairs if isinstance(k, str)}

    # Custom 'pad' function
    @functions.signature({'types': ['string']}, {'types': ['number']}, {'types': ['string']})
    def _func_pad(self, s, length, char):
        return s.center(length, char)

    # Custom 'padStart' function
    @functions.signature({'types': ['string']}, {'types': ['number']}, {'types': ['string']})
    def _func_padStart(self, s, length, char):
        return s.rjust(length, char)

    # Custom 'padEnd' function
    @functions.signature({'types': ['string']}, {'types': ['number']}, {'types': ['string']})
    def _func_padEnd(self, s, length, char):
        return s.ljust(length, char)

    # Custom 'product' function
    @functions.signature({'types': ['number']}, {'types': ['number']})
    def _func_product(self, a, b):
        return a * b

    # Custom 'currency' function
    @functions.signature({'types': ['number']}, {'types': ['string']}, {'types': ['string']})
    def _func_currency(self, n, locale, currency_code):
        try:
            return "{:,.2f} {}".format(n, currency_code)
        except:
            return None

    # Custom 'uniq' function
    @functions.signature({'types': ['array']})
    def _func_uniq(self, a):
        return list(pydash.uniq(a))

    # Custom 'uniqBy' function
    @functions.signature({'types': ['array']}, {'types': ['string']})
    def _func_uniqBy(self, a, key):
        return pydash.uniq_by(a, key)

    # Custom 'includes' function
    @functions.signature({'types': ['array', 'object', 'string']}, {'types': ['string', 'number', 'boolean', 'object', 'array', 'null']})
    def _func_includes(self, collection, value):
        return pydash.includes(collection, value)

    # Custom 'all' function
    @functions.signature({'types': ['array']})
    def _func_all(self, a):
        return all(a)

    # Custom 'parseDate' function
    @functions.signature({'types': ['number', 'string', 'null']})
    def _func_parseDate(self, n):
        if n is None:
            return None
        if isinstance(n, (int, float)):
            # Assuming 'n' is Excel serial date number
            # Excel's epoch starts on 1899-12-30
            excel_epoch = datetime(1899, 12, 30, tzinfo=timezone.utc)
            delta = timedelta(days=(n - 25569))
            return (excel_epoch + delta).isoformat()
        if isinstance(n, str):
            try:
                return datetime.fromisoformat(n.replace('Z', '+00:00')).isoformat()
            except ValueError:
                return None
        return None

    # Custom 'parseDuration' function
    @functions.signature({'types': ['number', 'string', 'null']})
    def _func_parseDuration(self, n):
        if n is None:
            return None
        if isinstance(n, str):
            if ':' in n:
                parts = n.split(':')
                try:
                    minutes = int(parts[0])
                    seconds = int(parts[1])
                    return minutes * 60 + seconds
                except ValueError:
                    return None
            else:
                try:
                    return int(n)
                except ValueError:
                    return None
        if isinstance(n, (int, float)):
            return n
        return None

    # Custom 'parseUnixTimestamp' function
    @functions.signature(
      {'types': ['number', 'null'], 'variadic': True},
      {'types': ['string', 'null'], 'variadic': True}
    )
    def _func_parseUnixTimestamp(self, n, fmt=None):
        if n is None:
            return None
        try:
            if fmt in ['ms', 'milliseconds']:
                n = n / 1000
            return datetime.fromtimestamp(n, tz=timezone.utc).isoformat()
        except (OSError, OverflowError, ValueError):
            return None

# The function to evaluate expressions using the custom functions
def J(json_string, expr):
    data = json.loads(json_string)  # Parse the JSON string into a Python object
    options = jmespath.Options(custom_functions=CustomFunctions())
    return jmespath.search(expr, data, options=options)

# Example JSON string data used in multiple test cases
data_string = '''{
    "data": {
        "name": "John Doe",
        "age": 35,
        "email": "john.doe@example.com",
        "tags": ["frontend", "ui"],
        "projects": [{"id": 1, "title": "Project A"}, {"id": 2, "title": "Project B"}],
        "balance": 1234.56,
        "description": "   This is a sample description.   ",
        "createdAt": "2023-10-01T12:34:56Z"
    }
}'''

projects_string = '''{
    "projects": [
        {"category": "A", "value": 10},
        {"category": "B", "value": 20},
        {"category": "A", "value": 30}
    ]
}'''

unique_tags_string = '''{
    "tags": ["frontend", "backend", "frontend", "ui", "backend"]
}'''

users_string = '''{
    "users": [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"},
        {"id": 1, "name": "Alice"}
    ]
}'''

includes_string = '''{
    "list": [1, 2, 3, 4, 5]
}'''

all_true_string = '''{
    "flags": [true, true, true]
}'''

mixed_flags_string = '''{
    "flags": [true, false, true]
}'''

unix_string = '''{
    "timestamp": 1700000000
}'''

duration_string = '''{
    "duration": "05:30"
}'''

parse_date_string = '''{
    "date_str": "2024-04-27T15:30:00Z"
}'''

qs_string = "name=John+Doe&age=35&tags=frontend&tags=ui"


# Assert that the 'title' of the second project is 'Project B'
result = J(data_string, 'get(data, `projects[1].title`)')
assert result == "Project B", f"Expected 'Project B', but got {result}"

# Assert that 'jobTitle' is set correctly
result = J(data_string, 'set(data, `jobTitle`, `Software Developer`)')
assert result["jobTitle"] == "Software Developer", f"Expected 'Software Developer', but got {result['jobTitle']}"

# Assert the index of 'Project A' is 0
result = J(data_string, 'findIndex(data.projects, {title: `Project A`})')
assert result == 0, f"Expected index 0, but got {result}"


# Assert that a UUID is generated (non-empty string)
result = J(data_string, 'uuid(null)')
assert isinstance(result, str) and len(result) > 0, f"Expected non-empty UUID string, but got {result}"

# Assert that a UUID is generated (non-empty string)
result = J(data_string, 'uuid(`test`, null)')
assert isinstance(result, str) and len(result) > 0, f"Expected non-empty UUID string, but got {result}"

# Assert that a UUID is generated (non-empty string)
result = J(data_string, 'uuid(`test`)')
assert result == "3ab8d0cd-7b76-5741-8bc9-5725650dc435"

# Assert name is converted to lowercase
result = J(data_string, 'toLower(data.name)')
assert result == "john doe", f"Expected 'john doe', but got {result}"

# Assert name is converted to uppercase
result = J(data_string, 'toUpper(data.name)')
assert result == "JOHN DOE", f"Expected 'JOHN DOE', but got {result}"

# Assert 'John' is replaced with 'Jane' in name
result = J(data_string, 'replace(data.name, `John`, `Jane`)')
assert result == "Jane Doe", f"Expected 'Jane Doe', but got {result}"

# Assert description is trimmed correctly
result = J(data_string, 'trim(data.description)')
assert result == "This is a sample description.", f"Expected 'This is a sample description.', but got {repr(result)}"

# Assert that 'now' returns a valid ISO format timestamp (cannot be asserted for exact time)
result = J(data_string, 'now()')
assert isinstance(result, str) and "T" in result, f"Expected valid ISO format timestamp, but got {result}"

# Assert formatted date of 'createdAt'
result = J(data_string, 'formatDate(data.createdAt, `%Y-%m-%d`)')
assert result == "2023-10-01", f"Expected '2023-10-01', but got {result}"

# Assert email is omitted from data
result = J(data_string, 'omit(data, [`email`])')
assert "email" not in result, f"Expected email to be omitted, but it is still present: {result}"

# Assert 'name' and 'age' are picked correctly
result = J(data_string, 'pick(data, [`name`, `age`])')
assert result == {"name": "John Doe", "age": 35}, f"Expected name and age, but got {result}"

# Assert 'Project B' is found correctly
result = J(data_string, 'find(data.projects, `title`, `Project B`)')
assert result == {"id": 2, "title": "Project B"}, f"Expected 'Project B', but got {result}"

# Assert compacted data has no falsy values removed
result = J(data_string, 'compact(data)')
assert result == json.loads(data_string)["data"], f"Expected compacted data, but got {result}"

# Assert that the debug value is returned correctly
result = J(data_string, 'debug(data.name)')
assert result == "John Doe", f"Expected 'John Doe', but got {result}"

# Assert JSON stringification
result = J(data_string, 'json(data)')
assert result == json.dumps(json.loads(data_string)["data"]), f"Expected JSON string, but got {result}"

# Assert Markdown to HTML conversion
markdown_string = "## Hello World\nThis is a **bold** statement."
data_with_markdown = json.dumps({"markdown": markdown_string})
result = J(data_with_markdown, 'markdown(markdown)')
assert result == "<h2>Hello World</h2>\n<p>This is a <strong>bold</strong> statement.</p>", f"Expected HTML output, but got {result}"

# Assert Base64 encoding
result = J(data_string, 'btoa(data.name)')
assert result == "Sm9obiBEb2U=", f"Expected Base64 encoded 'John Doe', but got {result}"

# Assert pairwise function output
result = J(data_string, 'pairwise(data.tags)')
assert result == [{"current": "frontend", "next": "ui"}, {"current": "ui", "next": None}], f"Expected pairwise result, but got {result}"

# Assert numeric difference
result = J(data_string, 'numDiff(data.age, `30`)')
assert result == 5, f"Expected numeric difference of 5, but got {result}"

# Assert percent change calculation
result = J(data_string, 'percentChange(`30`, data.age)')
assert abs(result - 16.666666666666664) < 1e-6, f"Expected percent change close to 16.67%, but got {result}"

# Assert grouping by keys
result = J(projects_string, 'groupByKeys(projects)')
assert result == {"category": ["A", "B", "A"], "value": [10, 20, 30]}, f"Expected grouped result, but got {result}"

# Assert Zip two arrays
result = J(data_string, 'zip(`["a", "b", "c"]`, `[1, 2, 3]`)')
assert result == {"a": 1, "b": 2, "c": 3}, f"Expected zip result, but got {result}"

# Assert unique tags
result = J(unique_tags_string, 'uniq(tags)')
assert result == ["frontend", "backend", "ui"], f"Expected unique tags, but got {result}"

# Assert Unix timestamp parsing
result = J(unix_string, 'parseUnixTimestamp(timestamp, `seconds`)')
assert result == "2023-11-14T22:13:20+00:00", f"Expected parsed timestamp, but got {result}"

# Assert Query String parsing
qs_string = "name=John+Doe&age=35&tags=frontend&tags=ui"
result = J(json.dumps({"data": qs_string}), 'parseQs(`' + qs_string + '`)')
assert result == {"name": "John Doe", "age": "35", "tags": ["frontend", "ui"]}, f"Expected parsed query string, but got {result}"

# Assert Split function
result = J(data_string, 'split(data.projects[0].title, `Project `)[1]')
assert result == "A", f"Expected split result 'A', but got {result}"





# Get the 'title' of the second project
result = J(data_string, 'get(data, `projects[1].title`)')
print("Get Project Title:", result)  # Expected Output: Project B

# Set 'jobTitle' in 'data' to 'Software Developer'
result = J(data_string, 'set(data, `jobTitle`, `Software Developer`)')
print("Set Job Title:", json.dumps(result, indent=2))  # Expected Output: jobTitle added to data

# Find the index of the project with title 'Project A'
result = J(data_string, 'findIndex(data.projects, {title: `Project A`})')
print("Find Index:", result)  # Expected Output: 0

# Generate a UUID based on a name
result = J(data_string, 'uuid(`test`, null)')
print("UUID:", result)  # Expected Output: UUID based on 'test' and default namespace

# Convert the 'name' field to lowercase
result = J(data_string, 'toLower(data.name)')
print("To Lower:", result)  # Expected Output: john doe

# Convert the 'name' field to uppercase
result = J(data_string, 'toUpper(data.name)')
print("To Upper:", result)  # Expected Output: JOHN DOE

# Replace 'John' with 'Jane' in the 'name' field
result = J(data_string, 'replace(data.name, `John`, `Jane`)')
print("Replace:", result)  # Expected Output: Jane Doe

# Trim the 'description' field
result = J(data_string, 'trim(data.description)')
print("Trim Description:", repr(result))  # Expected Output: 'This is a sample description.'

# Get current UTC time
result = J(data_string, 'now()')
print("Now:", result)  # Expected Output: Current UTC time in ISO format

# Format the 'createdAt' date
result = J(data_string, 'formatDate(data.createdAt, `%Y-%m-%d`)')
print("Format Date:", result)  # Expected Output: 2023-10-01

# Omit 'email' from 'data'
result = J(data_string, 'omit(data, [`email`])')
print("Omit Email:", json.dumps(result, indent=2))  # Expected Output: email omitted

# Pick 'name' and 'age' from 'data'
result = J(data_string, 'pick(data, [`name`, `age`])')
print("Pick Name and Age:", json.dumps(result, indent=2))  # Expected Output: name and age

# Find the project with title 'Project B'
result = J(data_string, 'find(data.projects, `title`, `Project B`)')
print("Find Project B:", json.dumps(result, indent=2))  # Expected Output: Project B found

# Compact the 'data' object (remove falsy values)
result = J(data_string, 'compact(data)')
print("Compact Data:", json.dumps(result, indent=2))  # Expected Output: data without falsy values

# Debug function (prints and returns the value)
result = J(data_string, 'debug(data.name)')
print("Debug:", result)  # Expected Output: Debug prints 'John Doe'

# JSON stringify the 'data' object
result = J(data_string, 'json(data)')
print("JSON Stringify:", result)  # Expected Output: JSON string

# Convert markdown to HTML
markdown_string = "## Hello World\nThis is a **bold** statement."
data_with_markdown = json.dumps({"markdown": markdown_string})
result = J(data_with_markdown, 'markdown(markdown)')
print("Markdown to HTML:", result)  # Expected Output: HTML string

# Base64 encode the 'name' field
result = J(data_string, 'btoa(data.name)')
print("Base64 Encode:", result)  # Expected Output: Base64 encoded 'John Doe'

# Base64 encode with UTF-8 handling
result = J(data_string, 'base64encode(data.name)')
print("Base64 Encode UTF-8:", result)  # Expected Output: Base64 encoded 'John Doe'

# Pairwise function
result = J(data_string, 'pairwise(data.tags)')
print("Pairwise:", json.dumps(result, indent=2))  # Expected Output: Pairs of adjacent items

# Numeric difference
result = J(data_string, 'numDiff(data.age, `30`)')
print("Numeric Difference:", result)  # Expected Output: 5

# Percent change
result = J(data_string, 'percentChange(`30`, data.age)')
print("Percent Change:", result)  # Expected Output: 16.6...

# Group by keys
result = J(projects_string, 'groupByKeys(projects)')
print("Group By Keys:", json.dumps(result, indent=2))  # Expected Output: Grouped by 'category'

# ToPairs function
result = J(data_string, 'toPairs(data)')
print("To Pairs:", json.dumps(result, indent=2))  # Expected Output: List of key-value pairs

# FromPairs function
pairs_string = '''{
    "pairs": [["name", "Jane Doe"], ["age", 28]]
}'''
result = J(pairs_string, 'fromPairs(pairs)')
print("From Pairs:", json.dumps(result, indent=2))  # Expected Output: {"name": "Jane Doe", "age": 28}

# Pad, PadStart, PadEnd functions
result = J(data_string, 'pad(data.name, `20`, `*`)')
print("Pad:", result)  # Expected Output: Padded 'John Doe'

result = J(data_string, 'padStart(data.name, `20`, `*`)')
print("Pad Start:", result)  # Expected Output: Right-padded 'John Doe'

result = J(data_string, 'padEnd(data.name, `20`, `*`)')
print("Pad End:", result)  # Expected Output: Left-padded 'John Doe'

# Product of two numbers
result = J(data_string, 'product(`12`, `34`)')
print("Product:", result)  # Expected Output: 408

# Currency formatting
result = J(data_string, 'currency(data.balance, `en_US`, `USD`)')
print("Currency:", result)  # Expected Output: '1,234.56 USD'

# Uniq function
result = J(unique_tags_string, 'uniq(tags)')
print("Uniq Tags:", json.dumps(result, indent=2))  # Expected Output: Unique tags

# UniqBy function
result = J(users_string, 'uniqBy(users, `id`)')
print("Uniq By ID:", json.dumps(result, indent=2))  # Expected Output: Unique by ID

# Includes function
result = J(includes_string, 'includes(list, `3`)')
print("Includes 3:", result)  # Expected Output: True

# All function (true flags)
result = J(all_true_string, 'all(flags)')
print("All True:", result)  # Expected Output: True

# All function (mixed flags)
result = J(mixed_flags_string, 'all(flags)')
print("All True (Mixed):", result)  # Expected Output: False

# Parse date from Unix timestamp
result = J(unix_string, 'parseUnixTimestamp(timestamp, `seconds`)')
print("Parse Unix Timestamp:", result)  # Expected Output: ISO formatted date

# Parse duration
result = J(duration_string, 'parseDuration(duration)')
print("Parse Duration:", result)  # Expected Output: 330

# Parse date from string
result = J(parse_date_string, 'parseDate(date_str)')
print("Parse Date from String:", result)  # Expected Output: '2024-04-27T15:30:00+00:00'

# Debug example
result = J(data_string, 'debug(data.age)')
print("Debug Age:", result)  # Expected Output: Debug prints '35' and returns 35



# Query string stringify 'data'
result = J(data_string, 'qs(data)')
print("Query String:", result)  # Expected Output: URL-encoded query string

# Parse a query string
result = J(json.dumps({"data":qs_string}), 'parseQs(`' + qs_string + '`)')
print("Parse Query String:", json.dumps(result, indent=2))  # Expected Output: Parsed query string


# Split
result = J(data_string, 'split(data.projects[0].title, `Project `)[1]')
print("Split project:", result)  # Expected Output: 'A'


# Zip two arrays
result = J(data_string, 'zip(`["a", "b", "c"]`, `[1, 2, 3]`)')
print("Zip:", result)  # Expected: [["a", 1], ["b", 2], ["c", 3]]
assert result == {"a": 1, "b": 2, "c": 3}


