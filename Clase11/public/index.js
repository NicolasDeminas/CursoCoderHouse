const socket = io();

socket.on("message_back", (data) => {
  console.log(data);
  render(data);
  socket.emit("message_from_client", "Soy el Front");
});

const render = (data) => {
  let html = data
    .map((x) => {
      return `<p> <strong>${x.nombre}: </strong> ${x.mensaje} </p>`;
    })
    .join(" ");

  document.querySelector("#caja").innerHTML = html;
};

const addInfo = () => {
  let dataobj = {
    nombre: document.querySelector("#nombre").value,
    mensaje: document.querySelector("#mensaje").value,
  };
  socket.emit("data_msn", dataobj);
  document.querySelector("#mensaje").value = "";
  return false;
};
