module.exports = {
    post: {
      tags: ["User"],
      security: [{ BearerAuth: [] }],
      summary: "Create user",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                userName: {
                  type: "string",
                  example: "dragoncute",
                },
                role: {
                  type: "string",
                  example: "user/admin",
                },
                address: {
                  type: "string",
                  example: "125/21/3 Nguyễn Đình Chiểu",
                },
                phone: {
                  type:"string",
                  example: "0123456789"
                },
                email: {
                  type:"string",
                  example: "dargoncute@gmail.com"
                },
                password:{
                  type:"string",
                  example:"12"
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