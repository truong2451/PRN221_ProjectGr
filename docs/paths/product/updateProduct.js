module.exports = {
  put: {
    tags: ["Product"],
    summary: "update information of product",
    parameters: [
      {
        in: "path",
        name: "productID",
        description: "productID",
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
              productName: "New Product updated",
              image: "product-image.jpg",
              categoryID: "categoryid",
              quantity: 102,
              description: "Product description updated",
              price: 0.99,
              weight: 0.7,
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