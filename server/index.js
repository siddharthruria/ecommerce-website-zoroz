require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://ecommerce-zoroz.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

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
