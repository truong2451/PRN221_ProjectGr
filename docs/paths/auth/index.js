const signIn = require("./signIn");
const signInAdmin = require("./signInAdmin");
const signUp = require("./signUp");
const signOut = require("./signOut");
//const verifyEmail = require("./verifyEmail");
module.exports = {
  "/signIn": {
    ...signIn,
  },
  "/signUp": {
    ...signUp,
  },
  "/signOut": {
    ...signOut,
  },
  "/signInAdmin": {
    ...signInAdmin,
  },


  // "/verifyEmail": {
  //   ...verifyEmail,
  // },
};
