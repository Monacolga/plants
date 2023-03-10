//burger

(function () {
  const burgerItem = document.querySelector(".header-burger");
  const menu = document.querySelector(".header-nav");
  const menuCloseItem = document.querySelector(".nav-close");
  const menuLinks = document.querySelectorAll(".nav-link");
  const menuCloseBurger = document.querySelector(".header-nav");

  burgerItem.addEventListener("click", () => {
    menu.classList.add("header-nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header-nav_active");
  });
  if (window.innerWidth <= 768) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header-nav_active");
      });
    }
    menu.addEventListener("click", () => {
      menu.classList.remove("header-nav_active");
    });
  }
})();

//service blur

const allServiceButtons = document.querySelectorAll(".service-btn");
const buttonGarden = document.querySelector(".garden-btn");
const buttonPlanting = document.querySelector(".planting-btn");
const buttonLawn = document.querySelector(".lawn-btn");
const contentGarden = document.querySelectorAll(".garden-item");
const contentPlanting = document.querySelectorAll(".planting-item");
const contentLawn = document.querySelectorAll(".lawn-item");

for (let item of allServiceButtons) {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
}

buttonGarden.addEventListener("click", function () {
  contentPlanting.forEach(function (item) {
    item.classList.toggle("active");
  });
  contentLawn.forEach(function (item) {
    item.classList.toggle("active");
  });
});

buttonPlanting.addEventListener("click", function () {
  contentGarden.forEach(function (item) {
    item.classList.toggle("active");
  });
  contentLawn.forEach(function (item) {
    item.classList.toggle("active");
  });
});

buttonLawn.addEventListener("click", function () {
  contentPlanting.forEach(function (item) {
    item.classList.toggle("active");
  });
  contentGarden.forEach(function (item) {
    item.classList.toggle("active");
  });
});

//

//accordion

const accordion = document.querySelector(".prices-box");
const accordionHeaders = accordion.querySelectorAll(".accordion-head");
const dropButton = accordion.querySelector(".img-arrow");

accordion.addEventListener("click", toggleAccordion);

function toggleAccordion(element) {
  const itemHeader = element.target.closest(".accordion-head");
  if (itemHeader) {
    itemHeader.parentNode.classList.toggle("active");
    itemHeader.nextElementSibling.classList.toggle("active");
    itemHeader.lastElementChild.classList.toggle("active");
  }
  toggleAllItems(itemHeader);
}

function toggleAllItems(accordionHeader) {
  accordionHeaders.forEach((item) => {
    if (item != accordionHeader) {
      item.parentNode.classList.remove("active");
      item.nextElementSibling.classList.remove("active");
      item.lastElementChild.classList.remove("active");
    }
  });
}

//contacts block

const contactHeader = document.querySelector(".menu-header");
// const contactHeaderActive = document.querySelector(".menu-header.active");
const dropMenu = document.querySelector(".drop-menu");
const itemMenu = document.querySelectorAll(".city-item");
const cityText = document.querySelector(".city-text");
const cityPlate = document.querySelectorAll(".adresses-block");

contactHeader.addEventListener("click", showMenu);

function showMenu() {
  this.classList.add("active");
  this.nextElementSibling.classList.add("active");
  this.lastElementChild.classList.add("active");
}

// contactHeader.addEventListener("click", removeMenu);

// function removeMenu() {
//   if (contactHeader.classList.contains("active")) {
//     this.classList.remove("active");
//     this.nextElementSibling.classList.remove("active");
//     this.lastElementChild.classList.remove("active");
//   }
// }

itemMenu.forEach(function (listItem) {
  listItem.addEventListener("click", function () {
    cityText.innerText = this.innerText;
    dropMenu.classList.remove("active");
  });
});

itemMenu.forEach(function (listItem) {
  listItem.addEventListener("click", (listItem) => {
    const cityName = listItem.currentTarget.dataset.path;
    document.querySelectorAll(".adresses-block").forEach((e) => {
      if (
        !document
          .querySelector(`[data-target=${cityName}]`)
          .classList.contains("open")
      ) {
        document
          .querySelector(`[data-target=${cityName}]`)
          .classList.add("active");
      }
    });
  });
});
