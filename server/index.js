require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

connectDB();

const userRoutes = require("./route/user");
const productRoutes = require("./route/product");

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

const PORT = process.env.PORT;

app.get("/", (_req, res) => {
  res.send("welcome to the application backend service");
});

app.listen(PORT, () => {
  console.log(`server listening to requests on port ${PORT}`);
});
