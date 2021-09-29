const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyp = require("body-parser");
const port = process.env.PORT || 3000;

app.use(bodyp.urlencoded({ extended: false }));
app.use(bodyp.json());

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

const index_R_path = require("./routes/index");
const about_R_path = require("./routes/about");
const blog_R_path = require("./routes/blog");
const course_R_path = require("./routes/course");
const contact_R_path = require("./routes/contact");
const bodyParser = require("body-parser");

app.use(index_R_path);
app.use(about_R_path);
app.use(blog_R_path);
app.use(course_R_path);
app.use(contact_R_path);

app.listen(port, () => {
  console.log(`Listening port number ${port}`);
});
