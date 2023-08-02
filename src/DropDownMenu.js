import "./style.css";
export default function DropDownMenu(menuItems, callback) {
  const items = [];
  const nav = document.createElement("nav");
  const button = document.createElement("button");
  button.classList.add("drop-down-button");
  nav.appendChild(button);
  nav.classList.add("drop-down-menu");
  const ul = document.createElement("ul");
  nav.appendChild(ul);

  button.addEventListener("click", () => {
    buttonFlow();
  });

  (() => {
    updateButtonText(menuItems[0]);
    menuItems.forEach((item) => {
      addItem(item);
    });
  })();

  function addItem(text) {
    const menuItem = MenuItem(text);
    items.push(menuItem);
    items[0].disable();
    ul.appendChild(menuItem.li);
  }

  function updateButtonText(text) {
    button.textContent = text;
  }

  function buttonFlow() {
    button.classList.toggle("active");
    ul.classList.toggle("visible");
  }

  function resetMenuItem() {
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      if (item.getText() === button.textContent) {
        item.show();
      }
    }
  }

  function MenuItem(text) {
    const li = document.createElement("li");
    li.classList.add("drop-down-item");
    li.textContent = text;
    li.addEventListener("click", function () {
      buttonFlow();
      callback(text);
      resetMenuItem();
      updateButtonText(text);
      disable();
    });

    function disable() {
      li.style.display = "none";
    }

    function show() {
      li.style.display = "block";
    }

    return {
      li,
      getText() {
        return text;
      },
      show,
      disable,
    };
  }

  return nav;
}
