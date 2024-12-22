const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

/**
 * App's Middleware
 * (Application-level middleware)
 */
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));
app.disable("x-powered-by");

/**
 * App's Routes
 */
app.use(require("./routes"));

/**
 * Start server simplified
 */
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
