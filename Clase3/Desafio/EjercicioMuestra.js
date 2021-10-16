const fs = require("fs");

const writeFileAsync = async (arr) => {
  await fs.promises.writeFile(
    "./productos.txt",
    JSON.stringify(arr, null, 2),
    "utf-8"
  );
};

const readFileAsync = async (arr) => {
  let file = await fs.promises.readFile("./productos.txt", "utf-8");
  return file;
};

class Contenedor {
  constructor() {
    this.pr = [];
  }

  async save(product) {
    let fileExits = await readFileAsync(); //String
    if (fileExits && fileExits.length >= 0) {
      let dataFile = JSON.parse(fileExits);
      product.id = dataFile.length + 1;
      dataFile.push(product);
      this.pr = dataFile;
      writeFileAsync(this.pr);
    } else {
      product.id = 1;
      this.pr.push(product);
      writeFileAsync(this.pr);
    }
  }
}

let c = new Contenedor();

c.save({ name: "MAlo" });
