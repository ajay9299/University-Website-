const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Universitydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connection successfuly");
  })
  .catch((err) => {
    console.log(err);
  });
