module.exports = {
  post: {
    tags: ["Auth"],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              userName: {
                type: "string",
                example: "admin",
              },
              password: {
                type: "string",
                example: "123",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Success",
      },
    },
  },
};
