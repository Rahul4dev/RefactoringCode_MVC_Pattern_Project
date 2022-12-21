const path = require("path");

const express = require("express");
const session = require("express-session");

const csrf = require("csurf");

const sessionConfig = require("./config/session");
const db = require("./data/database");
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./custom-middleware/auth-mid");

const mongodbSessionStore = sessionConfig.createSessionStore(session);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(session(sessionConfig.createSessionConfig(mongodbSessionStore)));
app.use(csrf());

app.use(authMiddleware);

// register the routes here, order or placement will depend on the routes used.
app.use(blogRoutes);
app.use(authRoutes);

app.use(function (error, req, res, next) {
  res.render("500");
});

db.connectToDatabase().then(function () {
  app.listen(3000);
});
