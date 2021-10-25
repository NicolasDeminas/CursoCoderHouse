const express = require("express");
const Contenedor = require("../contenedor");
const { Router } = express;

const router = new Router();
const c = new Contenedor();

router.get("/", (req, res) => {
  c.getAll().then((data) => {
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  c.getById(req.params.id)
    .then((data) => {
      if (!data) {
        res.send(`Producto no encontrado`);
      }
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

router.post("/", (req, res) => {
  c.save(req.body).then((data) => {
    res.send(data);
  });
});

router.put("/:id", (req, res) => {
  c.update(req.params.id, req.body);
  res.send(`Producto actualizado`);
});

router.delete("/:id", (req, res) => {
  c.delete(req.params.id);
  res.send(`Producto eliminado correctamente`);
});

module.exports = router;
