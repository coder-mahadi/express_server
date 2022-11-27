// Require Files (default)
const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  //All Business Logic Start here

}, {
  timestapms: true,
  versionkey: false
})

// Collection crete in database(Default)
const User = mongoose.model("User".userSchema)

// Modules Exports (Default)
module.exports = User