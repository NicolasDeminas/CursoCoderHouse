const express = require("express");
const http = require("http");
const app = express();
const router = require("./routes/index");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.port || 8080;

let msn = [];

//Archivos estaticos
app.use(express.static(__dirname + "/public"));

app.use("/api", router);

//Sockets
io.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.on("data_msn", (data) => {
    msn.push(data);
    //socket.emit("message_back", msn);
    io.sockets.emit("message_back", msn);
    console.log(msn);
  });
  socket.on("message_from_client", (data) => {
    console.log(data);
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
