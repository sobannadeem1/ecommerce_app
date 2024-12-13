const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middleware/errorHandler");

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Update this with your frontend's origin
    credentials: true,
    methods: "PUT,POST,GET,DELETE,PATCH,HEAD",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/user/", userRoutes);

// Define the home route
app.get("/", (req, res) => {
  res.send("Welcome to shopping cart API!");
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
