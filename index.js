require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require('./src/config/db')

// Import Router
const pizzasRoute = require("./src/routes/pizzasRoute")
const userRoute = require("./src/routes/userRoute")
const orderRoute = require("./src/routes/orderRoute")

// Import Auth middleware for check user login or not~
// const { loginCheck } = require("./src/middleware/auth");

// Database Connection
connectDB()

// Config
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// Routes
app.use("/api", pizzasRoute);
app.use("/api", userRoute)
app.use("/api", orderRoute)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}


// Run Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});