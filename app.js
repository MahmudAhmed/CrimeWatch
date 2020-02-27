const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys_dev").mongoURI;
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const incidents = require("./routes/api/incidents");
const passport = require("passport");
const path = require("path");

// mongoose.set("runValidators", true);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  // app.use("/", express.static(path.join(__dirname, "/frontend/build")));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} 
debugger
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


// app.get("/", (req, res) => res.send("Welcome to CrimeWatch!!!"));

app.use(passport.initialize());
require("./config/passport")(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/incidents", incidents);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

