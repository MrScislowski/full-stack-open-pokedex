const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));
app.get("/version", (req, res) => {
  // remove this comment later

  // and this one...

  // and this one also
  res.send(
    "I don't even know any more... check on github"
  );
});

app.get("/health", (req, res) => {
  res.send("Health check is: OK");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
