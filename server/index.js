require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());

app.use(cookieParser());

connectDB();

const userRoutes = require("./route/user");

app.use("/api/user", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server listening to requests on port ${PORT}`);
});
