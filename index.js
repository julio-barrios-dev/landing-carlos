const buttonClick = document.querySelector("button");
const div = document.querySelector("#sticker");

buttonClick.addEventListener("click", function() {
  div.classList.remove("off");
  div.classList.add("on");
})

