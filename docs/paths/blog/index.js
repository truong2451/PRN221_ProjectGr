const getAllBlog = require("./getAllBlog");
const getBlogById = require("./getBlogById");
const createBlog = require("./createBlog");
const updateBlog = require("./updateBlog");
const deleteBlog = require("./deleteBlog");

module.exports = {
  "/blog": {
    ...getAllBlog,
    ...createBlog,
    
  },
  "/blog/{blogID}": {
    ...getBlogById,
    ...deleteBlog,
    ...updateBlog,
  },

};
