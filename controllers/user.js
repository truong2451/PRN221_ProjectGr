const fs = require("fs");
const _ = require("lodash");
const User = require("../models/user");

exports.userByLogin = (req, res, next, accountID) => {
  User.findOne({ userID }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
     req.profile = user;
    next();
  });
};
exports.hasAuthorization = (req, res, next) => {
  let sameUser = req.profile && req.auth && req.profile._id == req.auth._id;
  let adminUser = req.profile && req.auth && req.auth.role === "admin";
  const authorized = sameUser || adminUser;
  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized to perform this action",
    });
  }
  next();
};

// lấy tất cả danh sách user
exports.allUsers = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    let totalItems;

    const countDocuments = await User.find().countDocuments();
    totalItems = countDocuments;

    const users = await User.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage)
      .sort({ created: -1 });

    res.status(200).json({
      totalPage: Math.ceil(totalItems / perPage),
      totalItems,
      perPage,
      currentPage,
      list: users
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products', errorMessage: error.message });
  }
};

// exports.getUser = (req, res) => {
//   req.profile.hashed_password = undefined;
//   req.profile.salt = undefined;
//   return res.json(req.profile);
// };

// Trả về user dựa trên ID
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userID;
    console.log(userId);
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user", errorMessage: error.message });
  }
};


exports.createUser = async (req, res, next) => {
  const userExists = await User.findOne({ userName: req.body.userName });
  if (userExists)
    return res.status(403).json({
      message: "Username is taken!",
    });
  const user = new User(req.body);
  await user.save();
  res.status(200).json({ message: "Create Successfully!!!" });
};


//sửa product
exports.updateUser = async (req, res) => {
  try {
     const { user } = req.body;
    // if (product.accountID !== req.auth._id) {
    //   return res.status(400).json({ error: "Invalid user ID" });
    // }
    const existingUser = await User.findById(req.params.userID);
    if (!existingUser) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    

    
    existingUser.userName = user.userName;
    existingUser.role = user.role;
    existingUser.address = user.address;
    existingUser.phone = user.phone;
    existingUser.email = user.email;
    existingUser.password = user.password;
    
    

    const updatedUser = await existingUser.save();

    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user", errorMessage: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    //const { user } = req.body;
    const userID = req.params.userID;

    // if (userID != req.auth._id) {
    //   return res.status(400).json({ error: "Invalid user ID" });
    // }

    const existingUser = await User.findById(userID);
    if (!existingUser) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    await existingUser.remove();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user", errorMessage: error.message });
  }
};







