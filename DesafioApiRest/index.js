const express = require("express");

const app = express();
const products = require("./routes/productos");
const port = process.env.PORT || 8080;

app.use("/static", express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded(false));

app.use("/api/productos", products);

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
