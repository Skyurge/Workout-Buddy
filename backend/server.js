const express = require("express");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//middleware
app.use(express.json());
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connecting to db and listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("There's an error");
  });
