const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));
app.get("/version", (req, res) => {
  res.send(
    "I don't even know any more... check on github"
  );
});

app.get("/health", (req, res) => {
  res.send("Health check is: OK");
});

app.get("/shutdown", (req, res) => {
  process.exit(1);
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
