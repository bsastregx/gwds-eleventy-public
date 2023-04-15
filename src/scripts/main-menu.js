/*************************
 MAIN MENU
*************************/
class MainMenu {
  constructor() {
    this.mainMenu = document.querySelector(".main-menu");
    this.mainMenuNav = this.mainMenu.querySelector(".main-menu__nav");
    this.mainMenuMenu = this.mainMenu.querySelector(".main-menu__menu");
    this.blog = document.querySelector("#blog");
    this.sidebar = document.querySelector(".sidebar");
    this.sidebarClose = document.querySelector(".sidebar__close");
    this.mainMenuAvailableVerticalSpace = 0;
    this.burger = this.mainMenu.querySelector("#burger");
    this.items = this.mainMenu.querySelectorAll(".main-menu__item");
    this.itemsClose = this.mainMenu.querySelectorAll(
      ".main-menu__item-wrapper-close"
    );
    this.indicatorActive = false;
    this.indicator = null;
    this.init();
  }
  init() {
    this.createIndicator();
    this.detectItemsMouseEnter();
    this.detectItemsMouseLeave();
    this.detectMenuMouseEnter();
    this.detectMenuMouseLeave();
    this.burgerFunctionality();
    this.menuItemToggleFunctionality();
    this.itemsCloseFunctionality();
    //this.sidebarFunc();
    this.setFocusToItems();
  }
  createIndicator() {
    this.indicator = document.createElement("span");
    this.indicator.classList.add("main-menu__indicator");
    this.mainMenu.appendChild(this.indicator);
    //styles on _main-menu.scss
  }
  detectItemsMouseEnter() {
    this.items.forEach((item) => {
      item.addEventListener("mouseenter", this.detectItemMouseEnter.bind(this));
    });
  }
  detectItemsMouseLeave() {
    this.items.forEach((item) => {
      item.addEventListener("mouseleave", this.detectItemMouseLeave.bind(this));
    });
  }
  detectItemMouseEnter(e) {
    this.indicator.classList.remove("main-menu__indicator--hidden");
    const itemContainer = e.target.querySelector(".main-menu__item-container");
    const mainMenuLeftPosition = this.mainMenu.getBoundingClientRect().left;
    const itemLeftPosition = itemContainer.getBoundingClientRect().left;
    const itemWidth = itemContainer.offsetWidth;
    this.indicator.style.width = itemWidth + "px";
    this.indicator.style.left = itemLeftPosition - mainMenuLeftPosition + "px";
  }
  detectItemMouseLeave(e) {
    if (!e.toElement.classList.contains("main-menu__item")) {
      this.indicator.classList.add("main-menu__indicator--hidden");
    }
  }
  detectMenuMouseEnter() {
    this.mainMenuMenu.addEventListener("mouseenter", function () {
      setTimeout(() => {
        this.classList.add("main-menu__menu--open");
      }, 100);
    });
  }
  detectMenuMouseLeave() {
    this.mainMenuMenu.addEventListener("mouseleave", function () {
      this.classList.remove("main-menu__menu--open");
    });
  }
  burgerFunctionality() {
    this.burger.addEventListener(
      "click",
      function () {
        this.burger.classList.toggle("burger--open");
        this.mainMenu.classList.toggle("main-menu--open");

        if (this.mainMenu.classList.contains("main-menu--open")) {
          document.body.classList.add("disable-scrollbar");
        } else {
          document.body.classList.remove("disable-scrollbar");
        }
      }.bind(this)
    );
  }
  menuItemToggleFunctionality() {
    this.items.forEach((item) => {
      item.addEventListener(
        "click",
        function () {
          item.classList.add("main-menu__item--open");
        }.bind(this)
      );
    });
  }
  itemsCloseFunctionality() {
    this.itemsClose.forEach((closeButton) => {
      closeButton.addEventListener("click", function (e) {
        e.stopPropagation();
        this.closest(".main-menu__item").classList.remove(
          "main-menu__item--open"
        );
      });
    });
  }
  sidebarFunc() {
    this.blog.addEventListener(
      "click",
      function () {
        this.sidebar.classList.add("sidebar--visible");
      }.bind(this)
    );

    this.sidebarClose.addEventListener(
      "click",
      function () {
        this.sidebar.classList.remove("sidebar--visible");
      }.bind(this)
    );
  }

  setFocusToItems() {
    this.items.forEach((item) => {
      const button = item.querySelector(".main-menu__item-button");
      if (button) {
        button.addEventListener("keydown", function (e) {
          if (e.which === 13) {
            //enter key was pressed
          }
        });
      }
    });
  }
}
const mainMenu = new MainMenu();
