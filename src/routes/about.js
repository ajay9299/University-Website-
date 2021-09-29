const express = require("express");
const app = express();
const router = new express.Router();

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
