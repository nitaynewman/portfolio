const express = require("express");
const path = require("path");

const app = express();

// Serve the static React files
app.use(express.static(path.join(__dirname, "build")));

// Catch-all handler: send back index.html for any route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Use Render’s provided port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
