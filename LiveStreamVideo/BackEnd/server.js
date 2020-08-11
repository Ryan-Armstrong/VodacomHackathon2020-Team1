const express = require("express");
const app = express();

let broadcaster;
const port = 4000;

const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server);
app.use(express.static(__dirname + "/public"));

io.sockets.on("error", e => console.log(e));
io.sockets.on("connection", socket => {
  socket.on("broadcaster", () => {
    broadcaster = socket.id;
    socket.broadcast.emit("broadcaster");
  });
  socket.on("peerview", () => {
    socket.to(broadcaster).emit("peerview", socket.id);
  });
  socket.on("offerid", (id, message) => {
    socket.to(id).emit("offerid", socket.id, message);
  });
  socket.on("peeranswer", (id, message) => {
    socket.to(id).emit("peeranswer", socket.id, message);
  });
  socket.on("candidate", (id, message) => {
    socket.to(id).emit("candidate", socket.id, message);
  });
  socket.on("disconnect", () => {
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });
});
server.listen(port, () => console.log(`Server: ${port}`));
