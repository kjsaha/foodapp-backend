const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  restaurant_type: {
    type: String,
    required: true,
  },
  hour: {
    open: String,
    close: String,
  },
  menu: [
    {
      restaurant_ID: {
        type: String,
        ref: "restaurant",
      },
      food_name: String,
      food_price: Number,
      food_type: String,
    },
  ],
  features: {
    wifi: Boolean,
    ac: Boolean,
    delivery: Boolean,
  },
  social: {
    type: String,
  },
  location: {
    location_name: String,
    coordinates: [Number],
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Restaurant = mongoose.model("restaurant", RestaurantSchema);
