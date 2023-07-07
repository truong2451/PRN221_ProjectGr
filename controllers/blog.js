const fs = require("fs");
const _ = require("lodash");
const Blog = require("../models/blog");

// lấy tất cả danh sách blog
exports.allBlogs = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    let totalItems;

    const countDocuments = await Blog.find().countDocuments();
    totalItems = countDocuments;

    const blogs = await Blog.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage)
      .sort({ created: -1 });

    res.status(200).json({
      totalPage: Math.ceil(totalItems / perPage),
      totalItems,
      perPage,
      currentPage,
      list: blogs
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs', errorMessage: error.message });
  }
};

// lấy id của blog
//   req.profile.hashed_password = undefined;
//   req.profile.salt = undefined;
//   return res.json(req.profile);
// };

// Trả về user dựa trên ID
exports.getBlogById = async (req, res) => {
  try {
    const blogId = req.params.blogID;
    console.log(blogId);
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog", errorMessage: error.message });
  }
};


exports.createBlog = async (req, res, next) => {
  const blogExists = await Blog.findOne({ name: req.body.title });
  if (blogExists)
    return res.status(403).json({
      message: "BlogId is taken!",
    });
  const {title, content, image,userID} = req.body;
  console.log(title, content, image,userID);

  await Blog.create({title, content, image,userID});
  res.status(200).json({ message: "Create Successfully!!!" });
};


//sửa product
exports.updateBlog = async (req, res) => {
  try {
     const { blog } = req.body;
    // if (blog.userID !== req.auth._id) {
    //   return res.status(400).json({ error: "Invalid user ID" });
    // }
    const existingBlog = await Blog.findById(req.params.blogID);
    if (!existingBlog) {
      return res.status(400).json({ error: "Invalid blog ID" });
    }

    

    
    existingBlog. title = blog.title;
    existingBlog.content = blog.content;
    existingBlog.image = blog.image;
    //existingBlog.userID = blog.userID;
    
    
    

    const updatedBlog = await existingBlog.save();

    res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog", errorMessage: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    //const { user } = req.body;
    const blogID = req.params.blogID;

    // if (userID != req.auth._id) {
    //   return res.status(400).json({ error: "Invalid user ID" });
    // }

    const existingBlog = await Blog.findById(blogID);
    if (!existingBlog) {
      return res.status(400).json({ error: "Invalid blog ID" });
    }

    await existingBlog.remove();

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog", errorMessage: error.message });
  }
};







