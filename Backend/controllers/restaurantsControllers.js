const Restaurant = require("../models/Restaurant");

module.exports.get_restaurants = (req, res) => {
  Restaurant.find()
    .sort({ date: -1 })
    .then((restaurant) => res.json(restaurant));
};

module.exports.post_restaurants = (req, res) => {
  const newRestaurant = new Restaurant(req.body);
  newRestaurant.save().then((restaurant) => res.json(restaurant));
};

module.exports.update_restaurants = (req, res) => {
  Restaurant.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (
    restaurant
  ) {
    Restaurant.findOne({ _id: req.params.id }).then(function (restaurant) {
      res.json(restaurant);
    });
  });
};

module.exports.delete_restaurants = (req, res) => {
  Restaurant.findByIdAndDelete({ _id: req.params.id }).then(function (
    restaurant
  ) {
    res.json({ success: true });
  });
};
