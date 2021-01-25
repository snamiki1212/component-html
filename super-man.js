// import {defineCustomElement} from './webComponent';

// try {
//   console.log("b4");
//   console.log("HH");  

//   fetch("super-man.html")
//     .then((stream) => {
//       console.log("stream", stream);
//       return stream.text();
//     })
//     .then((text) => {
//       console.log("then ", text);
//       define(text);
//     });

//   console.log("YYY-super-man");

//   function define(html) {
//     console.log("start define", html);
//     class XCounter extends HTMLElement {
//       constructor() {
//         super();

//         console.log("start:constructor");
//         const shadow = this.attachShadow({ mode: "open" });
//         shadow.innerHTML = html;
//           // shadow.appendChild(html);

//         // const id = 'super-man'
//         // const elem = document.getElementById(id);
//         // if (!elem) return console.error(`cannot find element by id: ${id}`);
//         // const content = elem.content;
//         // const clone = content.cloneNode(true);
//         // this.attachShadow({ mode: "open" }).appendChild(clone);
//       }
//     }

//     customElements.define("super-man", XCounter);
//   }

// //   defineCustomElement('my-paragraph')
// // defineCustomElement('your-paragraph')
//   console.log("--")
// } catch (e) {
//   console.error(e);
// }
