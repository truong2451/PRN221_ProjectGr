const auth = require("./auth");
const post = require("./post");
const user = require("./user");
const blog = require("./blog");
const category = require("./category");
const product = require("./product");
const order = require("./order");
const orderDetail = require("./orderDetail");

module.exports = {
  paths: {
    ...auth,
    ...user,
    ...blog,
    ...category,
    ...product,
    ...order,
    ...orderDetail,

  },
};
