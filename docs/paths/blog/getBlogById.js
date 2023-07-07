module.exports = {
    get: {
      tags: ["Blog"],
      summary: "Return blog by id",
      parameters: [
        {
          in: "path",
          name: "blogID",
          description: "blogID",
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