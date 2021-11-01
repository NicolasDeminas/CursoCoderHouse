const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "pug");
app.set("views", "./views");

let arr = [
  {
    product: "coca",
    price: 150,
  },
  {
    product: "fanta",
    price: 140,
  },
  {
    product: "sprite",
    price: 145,
  },
  {
    product: "quilmes",
    price: 200,
  },
];

app.get("/", (req, res) => {
  res.render("index", { data: arr });
});

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
