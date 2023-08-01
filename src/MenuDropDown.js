import "./style.css";
export default function DropDownMenu(menuItems, f) {
  const nav = document.createElement("nav");
  const button = document.createElement("button");
  button.classList.add("drop-down-button");
  nav.appendChild(button);
  nav.classList.add("drop-down-menu");
  const ul = document.createElement("ul");
  nav.appendChild(ul);

  button.addEventListener("click", () => {
    button.classList.toggle("active");
    ul.classList.toggle("visible");
  });
  (() => {
    updateButtonText(menuItems[0]);
    menuItems.forEach((item) => {
      addItem(item);
    });
  })();

  function addItem(text) {
    const menuItem = MenuItem(text, f);
    ul.appendChild(menuItem);
  }

  function updateButtonText(text) {
    button.textContent = text;
  }
  function MenuItem(text) {
    const li = document.createElement("li");
    li.classList.add("drop-down-item");
    li.textContent = text;
    li.addEventListener("click", () => {
      f(text);
    });

    return li;
  }

  return nav;
}
