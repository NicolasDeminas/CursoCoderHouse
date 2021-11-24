const express = require("express");
const knex = require("./db");

const app = express();
const port = process.env.port || 8080;

app.use(express.json());

app.get("/all", (req, res) => {
  knex
    .from("usuarios")
    .select("name", "email")
    .then((json) => {
      console.log(json);
      res.send({ data: json });
    });
});

app.get("/:id", (req, res) => {
  knex
    .from("usuarios")
    .where({ id: req.params.id })
    .then((response) => {
      res.json({ data: response });
    })
    .catch((err) => {
      res.send("Error al buscar usuario");
    });
});

app.post("/", (req, res) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  knex("usuarios")
    .insert(data)
    .then(() => {
      res.send("Registro Ok");
    })
    .catch((err) => {
      res.send("Error al guardar");
    });
});

app.put("/updateUser/:id", (req, res) => {
  knex("usuarios")
    .where({ id: req.params.id })
    .update({ name: req.body.name }) // solo actualizo los valores que me interesa
    .then((json) => {
      res.json({ data: json });
    })
    .catch((err) => {
      res.send("Error al actualizar");
    });
});

app.delete("/deleteUser/:id", (req, res) => {
  knex("usuarios")
    .where({ id: req.params.id })
    .del()
    .then((json) => {
      res.json({ data: "Usuario Eliminado" });
    })
    .catch((err) => {
      res.send("Error al eliminar");
    });
});

app.get("/articulos", (req, res) => {
  knex
    .from("articulos")
    .then((data) => {
      console.log(data);
      res.json({ data: data });
    })
    .catch((err) => {
      res.send("Error al mostrar articulos");
    });
});

app.post("/articulos", (req, res) => {
  let data = {
    nombre: req.body.nombre,
    codigo: req.body.codigo,
    precio: req.body.precio,
    stock: req.body.stock,
  };
  knex("articulos")
    .insert(data)
    .then(res.send("Articulo guardado correctamente"))
    .catch((err) => {
      res.send("Error al guardar articulo");
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
