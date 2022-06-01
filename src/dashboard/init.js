export default function init() {
  let menu, animate;
  let layoutMenuEl = document.querySelectorAll("#layout-menu");
  layoutMenuEl.forEach(function (element) {
    menu = new window.Menu(element, {
      orientation: "vertical",
      closeChildren: false,
    });

    window.Helpers.scrollToActive((animate = false));
    window.Helpers.mainMenu = menu;
  });

  let menuToggler = document.querySelectorAll(".layout-menu-toggle");
  menuToggler.forEach((item) => {
    item.addEventListener("click", (event) => {
      // console.log(event);
      event.preventDefault();
      window.Helpers.toggleCollapsed(true, false);
    });
  });
}
