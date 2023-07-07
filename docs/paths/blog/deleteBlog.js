module.exports = {
    delete: {
      tags: ["Blog"],
      summary: "Delete blog by ID",
      parameters: [
        {
          in: "path",
          name: "blogID",
          security: [{ BearerAuth: [] }],
          description: "blogID",
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