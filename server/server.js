const express = require("express");
const dbConnect = require("./config/db.config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth.route");
const articleRoute = require("./routes/article.route");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
require("dotenv").config();
dbConnect();

app.use(authRoute);
app.use(articleRoute);

app.listen(4000, () => {
    console.log("server is running on port 4000!");
});
