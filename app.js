const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));
app.get("/version", (req, res) => {
  res.send("Version number is: 7");
});

app.get("/health", (req, res) => {
  res.send("Health check is: OK");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
