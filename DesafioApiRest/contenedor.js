const fs = require("fs");

const writeProductFile = async (arr) => {
  await fs.promises.writeFile("./products.txt", JSON.stringify(arr, null, 2), {
    encoding: "utf-8",
  });
};

const readProductFile = async () => {
  let file = await fs.promises.readFile("./products.txt", {
    encoding: "utf-8",
  });
  return file;
};

class Contenedor {
  constructor() {
    this.product = [];
  }

  async save(product) {
    let fileExits = await readProductFile(); //String
    if (fileExits && fileExits.length >= 0) {
      let dataFile = JSON.parse(fileExits);
      product.id = dataFile.length + 1;
      dataFile.push(product);
      this.pr = dataFile;
      writeProductFile(this.pr);
    } else {
      product.id = 1;
      this.pr.push(product);
      writeProductFile(this.pr);
    }
  }

  async getById(id) {
    let fileExists = await readProductFile();
    if (fileExists && fileExists.length >= 0) {
      let fileData = JSON.parse(fileExists);
      let pos;
      fileData.find((el, index, array) => {
        if (el.id == id) {
          pos = index;
          return pos;
        }
      });

      return fileData[pos];
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

  async update(id, arr) {
    let fileExists = await readProductFile();
    if (fileExists && fileExists.length >= 0) {
      let fileData = JSON.parse(fileExists);
      let pos;
      fileData.find((el, index, array) => {
        if (el.id == id) {
          pos = index;
          return pos;
        }
      });

      fileData[pos].title = arr.title;
      fileData[pos].price = arr.price;
      fileData[pos].Thumbnail = arr.thumbnail;
      console.log(fileData);
      writeProductFile(fileData);
      //return fileData;
    }
  }

  async delete(id) {
    let fileExists = await readProductFile();
    if (fileExists && fileExists.length >= 0) {
      let fileData = JSON.parse(fileExists);
      let arr = [];
      fileData.filter((x) => {
        if (x.id != id) {
          arr.push(x);
        }
        writeProductFile(arr);
      });
    }
  }
}

const p = {
  title: "Fanta",
  price: 140,
  thumbnail: "c",
};

module.exports = Contenedor;
