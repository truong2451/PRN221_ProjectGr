module.exports = {
    delete: {
      tags: ["User"],
      summary: "Delete user by ID",
      parameters: [
        {
          in: "path",
          name: "userID",
          security: [{ BearerAuth: [] }],
          description: "userID",
          schema: {
            type: "string",
            format: "ObjectId",
          },
        },
        // {
        //     in: "query",
        //     name: "status",
        //     description: "User status",
        //     schema: {
        //         type: "string",
        //       },
        // },
      ],
      responses: {
        200: {
          description: "Success",
        },
      },
    },
  };