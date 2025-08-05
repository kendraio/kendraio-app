Mapping
=======

Map data from one format to another, or query the input data using JMESPath or JSONPath expressions.
http://jmespath.org/tutorial.html. 


The mapping object has three top level keys 
- data : The core data being processed and passed from block to block
- context : Metadata about the data being processed, also passed from block to block 
- state : General metadata about the general state of processing, shared by all blocks


Default config
--------------

.. code-block:: json

    {
      "type": "mapping",
      "mapping": "data"
    }

Supported properties
--------------------

- **mapping** - a JMESPath expression. 


Working with State
------------------

State is a shared, realtime storage. It is also available between flows but will not persist beyond a single user session. 
Not all blocks are able to access state, but it is particularly useful for user interface components that want to keep updating 
their display to show the user live values - rather than the value that was passed into the block when it was run.

The mapping block cannot write to state, it can only read from state. Writes are managed with the :doc:`context_block` block. 


Local and global State
++++++++++++++++++++++

It is assumed that the state storage will mirror the site structure. Flows should generally read from *state.local*. 
Internally *state.local* will be translated to a path to mirror the current url. 

When on a the path */workflowCloud/listWorkflows*, reading from *state.local.filter* will be translated to read from  *workflowCloud.listWorkflows.filter*. 
This internal, translated path is the global state path, and it can also be accessed directly via *state.global*. 

When a path is prefixed with *state.global*, it will allow values to be read from to any part of the tree. Reading from *state.global.filter* will be translated to
read from *filter*. Reading from  *state.global.workflowCloud.listWorkflows.filter* will access *workflowCloud.listWorkflows.filter*.


Handy JMESPath patterns
-----------------------

Using a string as a value
-------------------------


To be valid JMESPath, keys and values must be wrapped in double quotes.
A hardcoded string's value must be wrapped in backticks, otherwise it will result in `null` for undefined variables.

.. code-block:: json

   {
      "name": `John`,
      "surname": `Doe`,
      "iAmNull": "not showing"
   }

Output will be:

.. code-block:: text

  name: "John"
  surname: "Doe"
  iAmNull: null

It is also possible to wrap a whole JSON object in backticks:

.. code-block:: json

   `{
      "name": "John",
      "surname": "Doe",
      "iAmNotNull": "now this value is visible too"
   }`


Not
---
When your data structuture holds the value that you wish to negate, you need to enclose the 
path of your data in parentheses before you NOT it. 

**This statement will fail**

.. code-block:: text

  !state.import.status 

**Use this instead**

.. code-block:: text

  !(state.import.status) 

If you want to combine a NOT statement like this with additional logic, you need to wrap it in parentheses again. 

.. code-block:: text

  (!(state.import.status)) && (length(state.import.data)>`0`)




Default values
--------------

Set default values by using "||" (or) 

.. code-block:: text

  data || {}


Filtering data
--------------

Filter by the existence of a flag

.. code-block:: text

  data[?tags[?@ == 'deleted']]

This will keep any item that has a "deleted" flag in the "tags" array. More useful in this instance would be it's inverse. 

.. code-block:: text

  data[?!(tags[?@ == 'deleted'])]

  


Adding a new key to an object
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you're wrangling data from one form to another, you may need to add new keys.

.. code-block:: text

  data.merge(@, { key: value })

If your data is an array, you can iterate through its elements with ``[*]``. 
In the below example, the new key/value pair is added to each element of the array.

.. code-block:: text

  data[*].merge(@, { key: value })

Setting a value based on a flag
"""""""""""""""""""""""""""""""

If you want to add a new value to your object based on whether or not another flag is set in an array, you can do something like this. 

.. code-block:: text

   data[*].merge(@,{deleted: @.tags[?@ == `deleted`]})

This will look through the tags attribute to see whether or not a "deleted" tag is set, and set the new attribute accordingly.

Accessing context from within a merge
"""""""""""""""""""""""""""""""""""""
When using a merge, or similar function, paths become relative to your current item. 
If you need to access a value from beyond this context, you need to use the "$" operator to access the root of the data. 

.. code-block:: text

  data[*].merge(@,{      
      exists:contains($.context.flowsExisting || [''], join('-',[@.adapterName,@.workflowId]))
      })
   


Finding a specific key in an array
"""""""""""""""""""""""""""""""""""

A more advanced version of the object merge can involve looking up a specific entry in an existing array of objects. 

In this example, we merge two object arrays, and look up a unique key from a list, and then add that key so that we can create a reference. 

.. code-block:: text

  data && merge(data, {track: uniqBy(data.track, 'key')})

.. code-block:: text

  find($.data.licensor, 'name', "LICENSOR NAME").id,   


Extracting content from different levels in a nested array
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

This example looks through an array of objects, extracts the "name", at the top level
and then pulls out all the "config" values from an array of properties  

.. code-block:: text

  data[*].[name, @.properties[*].[config][] ]


This can also filter content based on properties

.. code-block:: text

  data[*].[name, properties[?type==`Object` || type==`List` || type==`ObjectReference` || type==`ListReference`].[config][]]

And this version will return an array of objects

.. code-block:: text

  data[*].{parent: name, children: properties[?type==`Object` || type==`List` || type==`ObjectReference` || type==`ListReference`].[config][]}


Merging two arrays
------------------

If you have two arrays, and want to combine them, you can use the flatten operator "[]". 
For example, if you want to combine information from a form with data you've previously saved to context, you can merge the two arrays like this. 

.. code-block:: text

  [context.saved, [data]][]


Creating an object from two arrays - spreadsheet import
-------------------------------------------------------
To import from a spreadsheet, converting each row into an object with keys in the first row, 
you need a combination of actions.


.. code-block:: text

  data && data.Sheet1[1:].[$.data.Sheet1[0], @].map(&fromPairs(zip([0], [1])), @)

- 'data.Sheet1[1:]'  skips the first row, which is the header row
- '[$.data.Sheet1[0], @]'  for each row, take the first row and the current row
- 'map([expression],[elements])' apply an expression to every row, passing in the current row (@)
- '&fromPairs(..)'  convert an array of arrays into an object
- 'zip([0], [1])' zip the first row and the current row together, 
   creating an array of arrays with each column converted to [key, value] arrays




Kendraio Mapping extensions
---------------------------

Kendraio is using a version of JMESPath that supports extensions to provide additional functionality. You can find these in our repository: 

https://github.com/kendraio/kendraio-app/blob/develop/src/app/blocks/mapping-block/mapping-util.ts

These extensions are a set of additional functions that complement the standard JMESPath functionality, providing more advanced data manipulation and transformation capabilities. Example data, which is common to multiple examples, is shown below:

.. code-block:: json

    {
        "name": "John Doe",
        "age": 35,
        "email": "john.doe@example.com",
        "tags": ["frontend", "ui"],
        "projects": [{"id": 1, "title": "Project A"}, {"id": 2, "title": "Project B"}]
    }

Available Extensions
--------------------

1. get
2. set
3. findIndex
4. uuid
5. toLower
6. toUpper
7. replace
8. replaceAll
9. trim
10. now
11. formatDate
12. omit
13. pick
14. split
15. find
16. compact
17. qs
18. parseQs
19. zip
20. debug
21. json
22. jsonParse
23. markdown
24. btoa
25. base64encode
26. pairwise
27. numDiff
28. percentChange
29. groupByKeys
30. all
31. parseDate
32. parseDuration
33. parseUnixTimestamp

Each of these extensions is detailed below with example usages.

1. get
------

Gets a value from an object by key. Equivalent to dot notation (obj.key) but can be used when the key is dynamic.

Examples:

.. code-block:: javascript

   get(data, 'name')              // Output: "John Doe"
   get(data, 'age')               // Output: 35
   get(data, 'email')             // Output: "john.doe@example.com"
   get(data, 'tags[0]')           // Output: "frontend"
   get(data, 'projects[1].title') // Output: "Project B"

2. set
------

Sets a value on an object by key. Note that the Kendraio mapping block doesn't support modifying the original data, so you should use this with merge().

Examples:

.. code-block:: javascript

   data.merge(@, {jobTitle: set(@, 'jobTitle', 'Software Developer')})

3. findIndex
-------------

Finds the index of the first element in an array that matches a given value.

Examples:

.. code-block:: javascript

   findIndex(data.projects, {title: `Project A`})  // Output: 0

4. uuid
-------

Generates a UUID (Universally Unique IDentifier).

Examples:

.. code-block:: javascript

   uuid(`test`)  // Output: "3ab8d0cd-7b76-5741-8bc9-5725650dc435"

5. toLower
----------

Converts a string to lowercase.

Examples:

.. code-block:: javascript

   toLower(data.name)  // Output: "john doe"

6. toUpper
----------

Converts a string to uppercase.

Examples:

.. code-block:: javascript

   toUpper(data.name)  // Output: "JOHN DOE"

7. replace
-----------

Returns a string replacing the first instance of a substring with another substring.

Examples:

.. code-block:: javascript

   replace(data.name, 'o', '-')        // Output: "J-hn Doe"
   replace(data.email, '.', '')        // Output: "johndoe@example.com"

8. replaceAll
-------------

Returns a string replacing all instances of a substring with another substring.

Examples:

.. code-block:: javascript

   replaceAll(data.name, 'o', '-')        // Output: "J-hn D-e"
   replaceAll(data.email, '.', '')        // Output: "johndoe@examplecom"

9. trim
-------

Removes whitespace from both ends of a string.

Examples:

.. code-block:: javascript

   trim('  John Doe  ')  // Output: "John Doe"

10. now
--------

Returns the current UTC timestamp in RFC 7231 format.

Examples:

.. code-block:: javascript

   now()  // Output: "Wed, 07 Jun 2023 17:10:40"

11. formatDate
--------------

Formats a date string using a format string.

Examples:

.. code-block:: javascript

   formatDate('2020-01-01', 'dd/MM/yyyy')  // Output: "01/01/2020"

   formatDate('2020-01-01T14:50:00.000+01:00', 'dd/MM/yyyy') // Output: "01/01/2020"

12. omit
--------

Creates an object composed of enumerable properties from the input objects omitting the properties named in the *names* array.

Examples:

.. code-block:: javascript

   omit(data, ['age', 'email'])   

   // Output:
   // {
   //   "name": "John Doe",
   //   "tags": ["frontend", "ui"],
   //   "projects": [
   //     {"id": 1, "title": "Project A"},
   //     {"id": 2, "title": "Project B"}
   //   ]
   // }

13. pick
--------

Creates an object composed of the picked enumerable properties of the input object.

Examples:

.. code-block:: javascript

   pick(data, ['name', 'age'])  // Output: { "name": "John Doe", "age": 35}
   pick(data, ['projects', 'name'])

   // Output:
   // {
   //   "projects": [
   //     {
   //       "id": 1,
   //       "title": "Project A"
   //     },
   //     {
   //       "id": 2,
   //       "title": "Project B"
   //     }
   //   ],
   //   "name": "John Doe"
   // }

14. split
---------

Splits a string into an array of strings by separating it on a specified separator string.

Examples:

.. code-block:: javascript

   split(data.tags[0], 'e')  // Output: ["front", "nd"]

15. find
--------

Returns the first element in an array that passes a truth test.

Examples:

.. code-block:: javascript

   find(data.projects, `title`, `Project A`)  // Output: {"id": 1, "title": "Project A"}

16. compact
-----------

Creates an array with non-null values.

Examples:

.. code-block:: javascript

   compact(`{"name": "John Doe", "age": null, "email": "john.doe@example.com"}`)

   // Output:
   // {
   //   "name": "John Doe",
   //   "email": "john.doe@example.com"
   // }

17. qs
------

Converts a JS object into a URL query string using qs.stringify.
It output a compact, one-line format (no indentation, not human-readable) string.

Examples:

.. code-block:: javascript

   qs(data)
   
   // Output: "name=John%20Doe&age=35&email=john.doe%40example.com&tags%5B0%5D=frontend&tags%5B1%5D=ui&projects%5B0%5D%5Bid%5D=1&projects%5B0%5D%5Btitle%5D=Project%20A&projects%5B1%5D%5Bid%5D=2&projects%5B1%5D%5Btitle%5D=Project%20B"

18. parseQs
-----------

Parses a query string into an object.

Examples:

.. code-block:: javascript

   parseQs(`name=John%20Doe`)

   // Output:
   // {
   //     "name": "John Doe"
   // }

19. zip
-------

Creates an array of elements from two arrays.

Examples:

.. code-block:: javascript

   zip(`["a", "b", "c"]`, `[1, 2, 3]`)  // Output: [["a", 1], ["b", 2], ["c", 3]]

20. debug
---------

Logs a value to the JavaScript console for debugging and also returns the answer. Check the browser console for the logged value.

Examples:

.. code-block:: javascript

   debug(data)

   // Output:
   // {
   //     "name": "John Doe",
   //     "age": 35,
   //     "email": "john.doe@example.com",
   //     "tags": [
   //         "frontend",
   //         "ui"
   //     ],
   //     "projects": [
   //         {
   //             "id": 1,
   //             "title": "Project A"
   //         },
   //         {
   //             "id": 2,
   //             "title": "Project B"
   //         }
   //     ]
   // }

21. json
--------

Converts a value to a JSON string.
Use json-stringify-safe to safely stringify and accept arguments for replacer and space.

Examples:

.. code-block:: javascript

   json(data)

   // Output on one line: "{"name":"John Doe","age":35,"email":"john.doe@example.com","tags":["frontend","ui"],"projects":[{"id":1,"title":"Project A"},{"id":2,"title":"Project B"}]}"

   
   json(data, null, '2')

   // Output prettified:
   // "{
   //    name: "John Doe",
   //    age: 35,
   //    email: "john.doe@example.com",
   //    tags: ["frontend", "ui"],
   //    projects: [
   //       { id: 1, title: "Project A" },
   //       { id: 2, title: "Project B" }
   //    ]
   // }"
  
   In order to render a prettified JSON, the data must be in a <pre> and <code> tags
   i.e. 

   <code><pre>{{data}}</code></pre>



22. jsonParse
-------------

Converts a JSON string to a JS Object.

Examples:

.. code-block:: javascript
   
   jsonParse(data) // where data is a string of valid JSON

   { 
      name: "John Doe", 
      age: 35, 
      email: "john.doe@example.com", 
      tags: ["frontend","ui"], 
      projects: [{ id: 1, title: "Project A" },{ id: 2, title: "Project B" }] 
   }

23. markdown
------------

Converts a markdown string to HTML.

Examples:

.. code-block:: javascript

   markdown('## Header')  // Output: "<h2 id=\"header\">Header</h2>"

24. btoa
---------

Encodes a string in base-64.

Examples:

.. code-block:: javascript

   btoa(data.name)  // Output: "Sm9obiBEb2U="

25. base64encode
----------------

Safely encodes a string in base-64.

Examples:

.. code-block:: javascript

   base64encode(data.name)  // Output: "Sm9obiBEb2U="

26. pairwise
------------

Groups the elements of an array into pairs. The function outputs an array containing objects, where each object consists of two properties: "current" and "next". The "current" property refers to the current element of the input array, while the "next" property refers to the next element in the input array. If there is no next element, the "next" property will be set to null.

.. code-block:: javascript

    pairwise(`[1, 2, 3, 4, 5]`)

Output:

.. code-block:: json

    [
        {
            "current": 1,
            "next": 2
        },
        {
            "current": 2,
            "next": 3
        },
        {
            "current": 3,
            "next": 4
        },
        {
            "current": 4,
            "next": 5
        },
        {
            "current": 5,
            "next": null
        }
    ]

27. numDiff
-----------

Subtracts two numbers.

.. code-block:: javascript

    numDiff(`1`,`0`)

Output: 1

28. percentChange
-----------------

Calculates the percent change between two numbers.

.. code-block:: javascript

    percentChange(`0.5`, `1`)

Output: 100

29. groupByKeys
----------------

Groups the values of an array of objects by key.

.. code-block:: javascript

    groupByKeys(data.projects)

Output:

.. code-block:: json

    {
        "id": [
            1,
            2
        ],
        "title": [
            "Project A",
            "Project B"
        ]
    }

30. all
-------

Checks if all elements in an array pass a test (i.e., are truthy).

.. code-block:: javascript

    all(`[true,1]`)

Output: true

.. code-block:: javascript

    all([`true`, `false`, `1`, `example`])

Output: false

31. parseDate
-------------

Parses a date string in various formats and returns a date string.

.. code-block:: javascript

    parseDate('2020-01-01')

Output: "2020-01-01T00:00:00.000+00:00"

32. parseDuration
-----------------

Parses a duration string and returns the number of seconds.

.. code-block:: javascript

    parseDuration('1:30:45')

Output: "6030"

33. parseUnixTimestamp
----------------------

Parses a Unix timestamp and returns an ISO 8601 date string.

.. code-block:: javascript

    parseUnixTimestamp(`0`)  // Seconds

Output: "1970-01-01T01:00:00.000+01:00"

.. code-block:: javascript

    parseUnixTimestamp(`1589756000000`, `ms`) // Milliseconds 

Output: "2020-05-19T03:00:00.000+01:00"

