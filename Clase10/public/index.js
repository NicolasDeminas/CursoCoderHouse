const socket = io();

socket.on("message_client", (data) => {
  render(data);

  socket.emit("message_back", "Mensaje desde el front");
});

const render = (data) => {
  let html = data
    .map((x) => {
      return `<p> ${x.msn} </p>`;
    })
    .join(" ");

  document.querySelector("#caja").innerHTML = html;
};

const addMessage = () => {
  let objmsn = {
    msn: document.getElementById("msn").value,
  };
  console.log(objmsn);

  socket.emit("msn_client", objmsn);
  msn: document.getElementById("msn").value = "";
  return false;
};
