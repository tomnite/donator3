const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Donations collection and inserts the donations below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/donations"
);

const donationSeed = [
  {
    item: "T-shirt",
    category: "Clothing",
    type: "Men's",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "T-shirt",
    category: "Clothing",
    type: "Men's",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "T-shirt",
    category: "Clothing",
    type: "Men's",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "T-shirt",
    category: "Clothing",
    type: "Men's",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "Blue Jeans",
    category: "Clothing",
    type: "Men's",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "T-shirt",
    category: "Clothing",
    type: "Women's",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "Set of Dishes",
    category: "Household",
    type: "Kitchen",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "Sofa",
    category: "Household",
    type: "Furniture",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "Dress",
    category: "Clothing",
    type: "Women's",
    quantity: 1,
    value: ,
    date: new Date(Date.now())
  },
  {
    item: "T-shirt",
    category: "Clothing",
    type: "Children's",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "Work Boots",
    category: "Clothing",
    type: "Men's",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "Chair, Recliner",
    category: "Household",
    type: "Furniture",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "Dress Shirt",
    category: "Clothing",
    type: "Men's",
    quantity: 1,
    value: ,
    date: new Date(Date.now())
  },
  {
    item: "Blouse",
    category: "Clothing",
    type: "Women's",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  },
  {
    item: "Toaster",
    category: "Household",
    type: "Appliances",
    quantity: 1,
    value: ,
    date: new Date(Date.now())
  },
  {
    item: "Coffee Table",
    category: "Household",
    type: "Furniture",
    quantity: 1,
    value: "",
    date: new Date(Date.now())
  }
];

db.Donation
  .remove({})
  .then(() => db.Donation.collection.insertMany(donationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
