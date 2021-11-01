const express = require("express");
const multer = require("multer");
const app = express();
const port = process.env.PORT || 8080;

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "fileStorage");
  },
  filename: function (req, file, cb) {
    cb(null, `_coder${file.originalname}`);
  },
});

let update = multer({ storage }); // Middleware

app.post("/multer", update.single("myfile"), (req, res) => {
  console.log(req.file);
  res.send("Hola mundo");
});

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
