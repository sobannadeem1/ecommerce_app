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
    origin: "https://ecommerce-app-two-murex.vercel.app",
    credentials: true,
    methods: "PUT,POST,GET,DELETE,PATCH,HEAD",
  })
);
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/user/", userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
