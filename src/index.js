import x from "./x.js";
import png from "./assets/1.png";

console.log("hi");
const div = document.createElement("div");
div.innerHTML = `<img src=${png}>`;
document.body.appendChild(div);

const button = document.createElement("button");
button.textContent = "懒加载";
button.onclick = () => {
  const promise = import("./lazy.js");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {}
  );
};
document.body.appendChild(button);
