const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 8080;
const io = require("socket.io")(server);

let msn = [];

//Configurar cliente
app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

//WebSocket
io.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.on("message_back", (data) => {
    console.log(data);
  });
  socket.on("msn_client", (data) => {
    console.log(data);
    msn.push(data);
    socket.emit("message_client", msn);
  });
});

server.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
