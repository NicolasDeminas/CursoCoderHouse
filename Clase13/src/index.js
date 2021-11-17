const msj1 = require("./mensaje1");
const msj2 = require("./mensaje2");
const msj3 = require("./mensaje3");

setTimeout(() => {
  console.log(msj1);
}, 1000);
setTimeout(() => {
  console.log(msj2);
}, 2000);
setTimeout(() => {
  console.log(msj3);
}, 3000);
