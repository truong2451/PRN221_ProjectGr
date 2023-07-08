module.exports = {
  post: {
    tags: ["Product"],
    summary: "create product",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              product: {
                type: "object",
                properties: {
                  productName: {
                    type: "string",
                  },
                  image: {
                    type: "string",
                  },
                  categoryID: {
                    type: "string",
                  },
                  quantity: {
                    type: "number",
                  },
                  description: {
                    type: "string",
                  },
                  price: {
                    type: "number",
                  },
                  weight: {
                    type: "number",
                  },
                  categoryID: {
                    type: "string",
                    format: "objectId",
                  },
                },
              },
            },
          },
          example: {
            product: {
              productName: "New Product",
              image: "product-image.jpg",
              categoryID: "categoryid",
              quantity: 10,
              description: "Product description",
              price: 99.99,
              weight: 0.5,
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