const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const socket = require("./socket");

const routes = require("./routes");

const PORT = 3001;
const app = express();

const http = socket(app);

app.use(express.json());

// view engine setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routing
app.use("/", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

http.listen(PORT || process.env.PORT, function() {
  console.log(`listening on *: ${PORT || process.env.PORT}`);
});

module.exports = app;
