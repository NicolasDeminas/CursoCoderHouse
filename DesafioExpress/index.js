import express from "express";
import Contenedor from "./contenedor.js";

const app = express();
const port = process.env.PORT || 8080;
const contenedor = new Contenedor();

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// const randomId = async () => {
//   const array = await contenedor.getAll();
//   const largoArray = Array.from(array);
//   console.log(getRandomInt(1, largoArray.length));
// };

// randomId();

app.get("/", (req, res) => {
  res.send("testing....");
});

app.get("/productos", async (req, res) => {
  res.send(await contenedor.getAll());
});
app.get("/productosRandom", async (req, res) => {
  const array = await contenedor.getAll();
  const largoArray = Array.from(array);
  //console.log(getRandomInt(1, largoArray.length));
  //console.log(await contenedor.getById(getRandomInt(1, largoArray.length)));
  res.send(await contenedor.getById(getRandomInt(1, largoArray.length + 1)));
});

app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
