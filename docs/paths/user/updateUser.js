module.exports = {
  put: {
    tags: ["User"],
    summary: "update information of User",
    parameters: [
      {
        in: "path",
        name: "userID",
        description: "userID",
        schema: {
          type: "String",
          format: "objectId",
        },
      },
    ],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              user: {
                type: "object",
                properties: {
                  userName: {
                    type: "string",
                  },
                  role: {
                    type: "string",
                  },
                  address: {
                    type: "string",
                  },
                  phone: {
                    type: "string",
                  },
                  email: {
                    type: "string",
                  },
                  password: {
                    type: "string",
                  },
                },
              },
            },
          },
          example: {
            user: {
              userName: "New user",
              role: "user",
              address: "Hà Tây",
              phone: "0911919991",
              email: "duy123@gmail.com",
              password: "123",
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