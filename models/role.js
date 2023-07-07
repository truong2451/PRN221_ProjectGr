const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
roleName: {
    type: String,
    trim: true,
    required: true,
  },
});
module.exports = mongoose.model("Role", roleSchema);
