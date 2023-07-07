const getAllUser = require("./getAllUser");
const getUserById = require("./getUserById");
const createUser = require("./createUser");
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser");

module.exports = {
  "/user": {
    ...getAllUser,
    ...createUser,
    
  },
  "/user/{userID}": {
    ...getUserById,
    ...deleteUser,
    ...updateUser,
  },

};
