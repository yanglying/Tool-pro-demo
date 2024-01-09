import { addNumber as e } from "./core/main.js";
document.querySelector("#app").innerHTML = `
  <div>
     <h1>这是个工具库<h1/>
  </div>
`;
let o = e(1, 2);
console.log(o);
