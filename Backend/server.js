const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/item");
const cartRoutes = require("./routes/cart");
const restaurantRoutes = require("./routes/restaurant");

//"mongodb+srv://backend:backend@cluster0.wrdws.mongodb.net/cluster0?retryWrites=true&w=majority"
//mongodb+srv://backend:backend@cluster0.3mflu.mongodb.net/cluster0?retryWrites=true&w=majority

const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", itemRoutes);
app.use("/api", cartRoutes);
app.use("/api", restaurantRoutes);

const dbURI = config.get("dbURI");
const port = process.env.PORT || 4000;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(port, () => {
      console.log(`server is running on port: ${port}`);
      console.log("MongoDB database connection established successfully");
    })
  )
  .catch((err) => console.log(err));
