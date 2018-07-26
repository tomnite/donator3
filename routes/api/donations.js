const router = require("express").Router();
const donationsController = require("../../controllers/donationsController");

// Matches with "/api/donations"
router.route("/")
  .get(donationsController.findAll)
  .post(donationsController.create);

// Matches with "/api/donations/:id"
router
  .route("/:id")
  .get(donationsController.findById)
  .put(donationsController.update)
  .delete(donationsController.remove);

module.exports = router;
