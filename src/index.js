import DropDownMenu from "./MenuDropDown";
const helloWord = "Hello World!";

const items = ["Home", "News", "Contact", "About"];
const menu = DropDownMenu(items, (id) => {
  console.log(id + "clicked");
});
document.body.append(menu);
