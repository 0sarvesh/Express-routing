const express = require("express");
const path = require("path");
const app = express(); // this can be used by it
//MIDDLEWARE//accepts array of request handler // it will be called for every req
app.set('view engine','pug');
app.set('views','views')
const adminRoutes = require("./routes/admin");
const shoproutes = require("./routes/shop");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(shoproutes);
app.use("/admin", adminRoutes.routes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./", "views", "pnf.html"));
});
app.listen(3000);
