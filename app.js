var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const mongoose = require("mongoose");
const URL = "mongodb+srv://database:3033@cloud-data.0r5orgy.mongodb.net/test?retryWrites=true&w=majority&appName=cloud-data";

const connectDB = async () => {
  try {
    await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://database:3033@cloud-data.0r5orgy.mongodb.net/test?retryWrites=true&w=majority&appName=cloud-data")
  .then(() => {
    console.log("Connect to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
