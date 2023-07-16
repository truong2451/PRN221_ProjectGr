module.exports = {
  post: {
    tags: ["Order"],
    summary: "create order",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              order: {
                type: "object",
                properties: {
                  accountID: {
                    type: "string",
                    format: "objectId",
                  },
                  shippingAddress: {
                    type: "string",
                  },
                  fullName: {
                    type: "string",
                  },
                  phone: {
                    type: "string",
                  },
                  note: {
                    type: "string",
                  },
                },
              },
            },
          },
          example: {
            order: {
              accountID: "123123",
              shippingAddress: "ngã 5 chuồng bò",
              fullName: "levoanhduy",
              phone: "09121209",
              note: "ship sang mỹ nhưng đừng lấy phí",
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