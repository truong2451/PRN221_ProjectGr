module.exports = {
    put: {
      tags: ["Blog"],
      summary: "Update information of Blog",
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
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                blog: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                    },
                    content: {
                      type: "string",
                    },
                    image: {
                      type: "string",
                    },
                    // userID: {
                    //   type: "string",
                    // },
                    
                  },
                },
              },
            },
            example: {
              blog: {
                title: "GREENABC",
                content: "GREENABC là thức ăn bổ sung dinh dưỡng dành cho CHIM CẢNH: Chích Chòe Than, Chích Chòe Lửa, Chào Mào, Khướu, Hoạ Mi, Cu Gáy",
                image: "https://greenabc.vn/products/thuc-an-cho-chim",
                //userID: "0911919991",
                
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