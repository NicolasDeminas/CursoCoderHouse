const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    database: "ecommerce",
  },
  pool: { min: 2, max: 8 },
});

knex.schema
  .createTableIfNotExists("usuarios", (table) => {
    table.increments("id").primary(),
      table.string("name"),
      table.string("email", 128),
      table.string("role").defaultTo("admin"),
      table.string("password");
  })
  .then((res) => {
    console.log("Tabla creada");
  })
  .catch((err) => {
    console.log(err);
  });

knex.schema
  .createTableIfNotExists("articulos", (table) => {
    table.increments("id").primary(),
      table.string("nombre", 15),
      table.string("codigo", 10),
      table.float("precio"),
      table.integer("stock");
  })
  .then(() => {
    console.log("Tabla creada con exito");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = knex;
