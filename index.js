const express = require("express");
const connectDB = require("./config/db");
const user = require("./routes/user");
const abc = require("./routes/abc");
const cors = require("cors");

const app = express();
const PORT = 8000;

// connect to mongoDB
connectDB()
  .then(() => console.log("MongoDB conncted"))
  .catch((err) => console.log("error", err));

// middleware
 app.use(cors());
 app.use(express.json());  // ✅ This line enables parsing JSON requests

// routes
// app.use("/", user);
app.use("/auth", user);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
