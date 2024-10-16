export const QUERY_SCHEMA = {
  type: "object",
  properties: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    dataSource: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["remote", "local"],
        },
        endpoint: {
          type: "string",
        },
        schema: {
          description: "Name of schema (used for local DB queries)",
          type: "string",
        },
      },
    },
    mapping: {
      type: "string",
    },
    output: {
      type: "object",
      properties: {
        type: { type: "string", enum: ["grid", "chart"] },
        columnDefs: {
          type: "array",
          items: {
            type: "object",
            properties: {
              headerName: { type: "string" },
              field: { type: "string" },
              sortable: { type: "boolean" },
              filter: { type: "boolean" },
              pinned: { type: "string", enum: ["left", "right"] },
              valueGetter: { type: "string" },
              resizable: { type: "boolean" },
            },
          },
        },
      },
    },
  },
};
