const express = require("express");
const cors = require("cors");
var path = require("path");

const connectToMongo = require("./db.js");
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("onvoice-notes-frontend/build"));
  app.get("/*", function (req, res) {
    res.sendFile(
      path.join(__dirname, "./onvoice-notes-frontend/build/index.html")
    );
  });
}

app.listen(port, () => {
  console.log(
    `onvoice-notes-frontend backend listening at http://localhost:${port}`
  );
});
