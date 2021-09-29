const express = require("express");
const app = express();
const router = new express.Router();

router.get("/course", (req, res) => {
  res.render("course");
});

module.exports = router;
