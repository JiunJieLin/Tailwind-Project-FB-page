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

//右側 bar
const rightList = document.getElementById("right-list");
const renderRightList = function (name, img) {
  const items = `<div
          class="flex w-full cursor-pointer items-center justify-center rounded py-2 px-1 hover:bg-fb-input"
        >
          <div class="w-[45px]">
            <div class="relative w-[32px]">
              <div class="overflow-hidden rounded-full">
                <img src="${img}" />
              </div>
              <div
                class="absolute bottom-0 right-0 h-[8px] w-[8px] rounded-full bg-green-500 ring-2 ring-black"
              ></div>
            </div>
          </div>
          <div><p class="text-[.9rem] text-white">${name}</p></div>
        </div>`;
  return items;
};
let str = `<p class="mb-2 w-full text-gray-400 text-md text-center">聯絡人</p>`;
for (let i = 0; i < 10; i++) {
  str =
    str +
    renderRightList("Kim", "https://bruce-fe-fb.web.app/image/avator.png");
}
rightList.innerHTML = str;

//動態牆的複製
const storyList = document.getElementById("story-list");
const randomStoryItem = function () {
  for (let i = 0; i < 5; i++) {
    const divBox = document.createElement("div");
    divBox.classList.add(
      "min-w-[120px]",
      "flex-1",
      "cursor-pointer",
      "px-[4px]"
    );
    divBox.innerHTML = `<!-- 布的按鈕 -->
              <div class="relative overflow-hidden">
              <div id="story-mask-${i}" class="absolute left-0 top-0 h-full w-full bg-black/20 hidden"
                ></div>
                <div
                  class="absolute left-4 top-4 z-10 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-fb-card ring ring-fb"
                >
                  <p class="text-sm text-white">布</p>
                </div>

                <!-- 覆蓋一層背景漸層的效果 -->
                <div
                  class="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black/30 to-transparent z-20"
                ></div>
                <img id="story-img-${i}"
                  class="h-full w-full duration-300"
                  src="https://bruce-fe-fb.web.app/image/story.png"
                />
                <p class="absolute bottom-2 left-2 text-white">Kim</p></div>`;
    divBox.addEventListener("mouseover", function () {
      //to delete
      const mask = document.getElementById(`story-mask-${i}`);
      const img = document.getElementById(`story-img-${i}`);
      mask.classList.remove("hidden");
      img.classList.add("scale-105");
    });

    divBox.addEventListener("mouseout", function () {
      //to add
      const mask = document.getElementById(`story-mask-${i}`);
      const img = document.getElementById(`story-img-${i}`);
      mask.classList.add("hidden");
      img.classList.remove("scale-105");
    });

    storyList.appendChild(divBox);
  }
};
randomStoryItem();

//包廂頭像的複製
//Initialize Swiper
const renderLiveItem = function () {
  for (let i = 0; i < 15; i++) {
    const swiperWrapperLive = document.getElementById("swiper-wrapper-live");
    const divBox = document.createElement("div");
    divBox.classList.add("swiper-slide");
    const item = `<div class="w-[55px]">
                  <div class="relative w-[40px] cursor-pointer">
                    <div class="overflow-hidden rounded-full">
                      <img src="https://bruce-fe-fb.web.app/image/avator.png" />
                      <div
                        class="absolute bottom-0 right-0 h-[10px] w-[10px] rounded-full bg-green-500 ring ring-gray-900"
                      ></div>
                    </div>
                  </div>
                </div>`;
    divBox.innerHTML = item;
    swiperWrapperLive.appendChild(divBox);
  }

  new Swiper(".fb-live", {
    slidesPerView: "auto",
    spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
};
renderLiveItem();
