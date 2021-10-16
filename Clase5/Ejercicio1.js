const http = require("http");
const moment = require("moment");

let server = http.createServer((req, res) => {
  let hora = parseInt(moment().format("HH"));
  //let hora = 10;
  if (req.url === "/") {
    if (hora >= 6 && hora <= 12) {
      res.end("Buenos dias");
      return;
    }
    if (hora >= 13 && hora <= 19) {
      res.end("Buenas tardes");
      return;
    }
    res.end("Buenas noches");
  }
});

// server.listen(3002, () => {
//   console.log("Server run on port 3002");
// });
