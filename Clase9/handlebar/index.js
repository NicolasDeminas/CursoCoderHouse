const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const port = process.env.PORT || 8080;

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

app.set("views", "./views");
app.set("view engine", "hbs");

// Configuracion de la plantilla Handlebars
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "index",
    partialsDir: __dirname + "/views/partials",
  })
);

// Rutas
app.get("/", (req, res) => {
  res.render("main");
});

app.get("/productos", (req, res) => {
  res.render("productos", { layout: "home", data: arr });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
