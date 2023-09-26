const iconMenu = document.querySelector("#icon");

const menu = document.querySelector("#menu");

const menuState = {
  open: "bg-menu-open",
  close: "bg-menu-close",
};

iconMenu.addEventListener("click", () => {
  if (iconMenu.classList.contains(menuState.open)) {
    iconMenu.classList.remove(menuState.open);

    iconMenu.classList.add(menuState.close);
    menu.classList.remove("opacity-0", "pointer-events-none");
  } else {
    iconMenu.classList.remove(menuState.close);
    iconMenu.classList.add(menuState.open);
    menu.classList.add("opacity-0", "pointer-events-none");
  }
});

window.addEventListener("resize", () => {
  iconMenu.classList.remove(menuState.close);
  iconMenu.classList.add(menuState.open);
  menu.classList.add("opacity-0", "pointer-events-none");
});
