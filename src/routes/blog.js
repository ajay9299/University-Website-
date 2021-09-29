const express = require("express");
const app = express();
const router = new express.Router();

router.get("/blog", (req, res) => {
  res.render("blog");
});

module.exports = router;
