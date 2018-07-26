const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { 
      type: String, 
      unique: true,
      required: true
    },
  category: { type: String, required: true },
  type: String,
  quantity: { type: Number, required: true },
  value: { type: Number},
  date: { type: Date, default: Date.now }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;