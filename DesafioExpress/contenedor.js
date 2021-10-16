import { promises } from "fs";

const readProductFile = async () => {
  let file = await promises.readFile("./productos.txt", "utf-8");
  return file;
};

export default class Contenedor {
  constructor() {
    this.product = [];
  }

  async getById(id) {
    try {
      let fileExists = await readProductFile();
      //console.log(JSON.parse(fileExists));
      if (fileExists && fileExists.length >= 0) {
        let fileData = JSON.parse(fileExists);
        let pos = 0;
        fileData.find((el, index, array) => {
          if (el.id === id) {
            pos = index;

            return pos;
          }
        });
        return fileData[pos];
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getAll() {
    let fileExists = await readProductFile();
    if (fileExists && fileExists.length >= 0) {
      let fileData = JSON.parse(fileExists);
      //console.log(fileData.length);
      return fileData;
    }
  }
}

// const contenedor = new Contenedor();
// const getId = (id) => {
//   contenedor.getById(id);
// };
// const getAll = contenedor.getAll();
