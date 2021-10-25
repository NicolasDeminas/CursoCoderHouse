const express = require("express");
const app = express();

app.use(express.json());
//Usar archivos estatico
//Por defecto se envia el archivo index.html en la ruta principal, salvo que se defina otra ruta
app.use("/static", express.static(__dirname + "/public")); //dirname es la ruta al directorio donde se encuentra index.js

const port = process.env.PORT || 8080;

const products = require("./routes/productos");
const personas = require("./routes/personas");
const mascotas = require("./routes/mascotas");

app.use("/products", products);
app.use("/personas", personas);
app.use("/mascotas", mascotas);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
