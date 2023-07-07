module.exports = {
    post: {
      tags: ["Blog"],
      security: [{ BearerAuth: [] }],
      summary: "Create blog",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                  example: "CÁM CHÍCH CHOÈ ANH",
                },
                content: {
                  type: "string",
                  example: "Thành phần: đậu tổng hợp, trứng gà, bột tôm, bột nhộng tằm, ngọc kê, thịt ếch, sâu khô",
                },
                image: {
                  type:"string",
                  example: "https://runghoangda.com/top-12-thuc-an-chim-canh/"
                },
                userID:{
                  type:"string",
                  format: "objectId",
                }
                
                
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