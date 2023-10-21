import "./index.css";
//Panel 相關
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

//左側 bar
const leftList = document.getElementById("left-list");
const renderLeftItem = function (title, img) {
  const item = `<div class="mb-1 flex w-full cursor-pointer items-center justify-items-center rounded p-2 hover:bg-fb-input">
  <div class="mr-4 w-[32px] overflow-hidden rounded-full">
    <img src="${img}" />
  </div>
  <div>
    <p class="text-[.9rem] text-white">${title}</p>
  </div>
</div>`;
  return item;
};
const lists = function () {
  const listArray = [
    { title: "Kim", img: "https://bruce-fe-fb.web.app/image/avator.png" },
    {
      title: "活動",
      img: "https://bruce-fe-fb.web.app/image/left/activity.svg",
    },
    {
      title: "Marketplace",
      img: "https://bruce-fe-fb.web.app/image/left/store.svg",
    },
    {
      title: "Watch",
      img: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg",
    },
    {
      title: "活動",
      img: "https://bruce-fe-fb.web.app/image/left/facemask.svg",
    },
    {
      title: "朋友",
      img: "https://bruce-fe-fb.web.app/image/left/friend.svg",
    },
    {
      title: "工作",
      img: "https://bruce-fe-fb.web.app/image/left/job.png",
    },
    {
      title: "Messenger",
      img: "https://bruce-fe-fb.web.app/image/left/messenger.svg",
    },
    {
      title: "近期廣告動態",
      img: "https://bruce-fe-fb.web.app/image/left/pay.png",
    },
    {
      title: "朋友名單",
      img: "https://bruce-fe-fb.web.app/image/left/sale.png",
    },
    {
      title: "最愛",
      img: "https://bruce-fe-fb.web.app/image/left/star.svg",
    },
  ];
  let str = "";
  listArray.forEach((obj) => {
    str = str + renderLeftItem(obj.title, obj.img);
  });
  /*for (let i = 0; i < 5; i++) {
    str =
      str +
      renderLeftItem("Kim", "https://bruce-fe-fb.web.app/image/avator.png");
  }*/
  leftList.innerHTML = str;
};

lists();
