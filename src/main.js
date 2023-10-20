import "./index.css";
const plus = document.getElementById("plus-btn");
const messenger = document.getElementById("messenger-btn");
const bell = document.getElementById("bell-btn");
const down = document.getElementById("down-btn");
const plusPanel = document.getElementById("plus-panel");
const messengerPanel = document.getElementById("messenger-panel");
const bellPanel = document.getElementById("bell-panel");
const downPanel = document.getElementById("down-panel");

const panels = [plusPanel, messengerPanel, bellPanel, downPanel];
const openPenal = function (index) {
  panels.forEach((p, inx) => {
    if (index === inx) {
      p.classList.remove("hidden");
      return;
    }
    if (p.classList.contains("hidden")) {
      return;
    }
    p.classList.add("hidden");
  });
};

// //btn click
plus.addEventListener("click", function (event) {
  event.stopPropagation();
  openPenal(0);
});
messenger.addEventListener("click", function (event) {
  event.stopPropagation();
  openPenal(1);
});
bell.addEventListener("click", function (event) {
  event.stopPropagation();
  openPenal(2);
});
down.addEventListener("click", function (event) {
  event.stopPropagation();
  openPenal(3);
});

window.addEventListener("click", function () {
  openPenal(-1);
});

// //panel stopPropagation
plusPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});
messengerPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});
bellPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});
downPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});
