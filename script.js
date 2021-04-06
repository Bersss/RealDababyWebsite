"use strict";

const modal = document.querySelector(".modal");
const audio = new Audio("dababy.mp3");
const overlay = document.querySelector(".overlay");
const dbbyImg = document.querySelector("#dbbyimg");
let inter;
const urlArray = [
  "https://pbs.twimg.com/media/ExibMNsXMAE7orJ.jpg",
  "https://media.makeameme.org/created/da-baby.jpg",
  "https://media.makeameme.org/created/when-dababy-comes.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQK0vcSa8dTq8XmPQy8v3hzrQFUTPA2lnXA&usqp=CAU",
  "https://i.ytimg.com/vi/WfUQq0cWp5Q/maxresdefault.jpg",
];
function showmodal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closemodal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 69) {
    if (modal.classList.contains("hidden")) {
      showmodal();
      audio.play();
      let i = 0;
      inter = setInterval(function () {
        dbbyImg.src = urlArray[i];
        i < urlArray.length - 1 ? i++ : (i = 0);
      }, 100);
    } else {
      clearInterval(inter);
      audio.pause();
      closemodal();
    }
  }
});
