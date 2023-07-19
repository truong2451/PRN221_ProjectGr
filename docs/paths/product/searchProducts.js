module.exports = {
    get: {
      tags: ["Product"],
      summary: "Return product by name",
      parameters: [
        {
          in: "query",
          name: "keyword",
          description: "Keyword to search by product name",
          schema: {
            type: "string",
          },
        },
        {
          in: "query",
          name: "page",
          description: "Page number",
          schema: {
            type: "integer",
          },
        },
        {
          in: "query",
          name: "perPage",
          description: "Number of items per page",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Success",
        },
      },
    },
  };