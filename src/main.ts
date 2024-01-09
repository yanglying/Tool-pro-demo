import { addNumber } from '../core/main.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>这是个工具库<h1/>
  </div>
`;
const res = addNumber(1, 2);
console.log(res);
