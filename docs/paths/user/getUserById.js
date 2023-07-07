module.exports = {
  get: {
    tags: ["User"],
    summary: "Return user by id",
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
    responses: {
      200: {
        description: "Success",
      },
    },
  },
};