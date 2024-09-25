const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));
app.get("/version", (req, res) => {
  res.send(
    "Version number is: now defined by anothrNick's gh action script... 1"
  );
});

app.get("/health", (req, res) => {
  res.send("Health check is: OK");
});

app.get("/debug-delete-me-later", (req, res) => {
  res.send("direct push commit... (done in two commits)");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
