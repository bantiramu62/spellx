// ✅ server.js (CommonJS version – works directly)

const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const FILE_PATH = "./counter.json";

app.use(cors());
app.use(express.static("public")); // serve website files

// API endpoint to get and increment the count
app.get("/api/visit", (req, res) => {
  let data = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
  data.visits += 1;
  fs.writeFileSync(FILE_PATH, JSON.stringify(data));
  res.json({ count: data.visits });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
