const { Router } = require("express");
const restaurantsController = require("../controllers/restaurantsControllers");
const router = Router();

router.get("/restaurants", restaurantsController.get_restaurants);
router.post("/restaurants", restaurantsController.post_restaurants);
router.put("/restaurants/:id", restaurantsController.update_restaurants);
router.delete("/restaurants/:id", restaurantsController.delete_restaurants);

module.exports = router;
