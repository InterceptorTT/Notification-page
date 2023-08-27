const pvtMsg = document.querySelector(".pvt-msg");
const msg = document.querySelector(".msg");

pvtMsg.addEventListener("click", () => {
    msg.style.display = "block";
});
msg.addEventListener("click", () => {
  msg.style.display = "none";
});
