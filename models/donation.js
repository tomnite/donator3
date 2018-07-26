const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  item: { type: String, required: true },
  category: { type: String, required: true },
  type: String,
  quantity: { type: Number, required: true },
  value: { type: Number},
  date: { type: Date, default: Date.now }
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;