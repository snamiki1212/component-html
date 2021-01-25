export const defineCustomElement = (id) => {
  customElements.define(
    id,
    class extends HTMLElement {
      constructor() {
        super();

        const elem = document.getElementById(id);
        if (!elem) return console.error(`cannot find element by id: ${id}`);
        const content = elem.content;
        const clone = content.cloneNode(true);
        this.attachShadow({ mode: "open" }).appendChild(clone);
      }
    } 
  );
};

// defineCustomElement('my-paragraph')
// defineCustomElement('your-paragraph')


// import {defineCustomElement} from './webComponent';

try {
  console.log("b4");
  console.log("HH");  

  fetch("super-man.html")
    .then((stream) => {
      // console.log("stream", stream);
      return stream.text();
    })
    .then((text) => {
      console.log("then ", text);
      const node=  converStringToNode(text)
      document.body.appendChild(node);
      // define(text);
      defineCustomElement('super-man');
    });

    const converStringToNode = (html) => {
      const elem = document.createElement('div');
      elem.innerHTML = html;
      return elem.firstChild;
    }
  // console.log("YYY-super-man");

  // function define(html) {
  //   // console.log("start define", html);
  //   class XCounter extends HTMLElement {
  //     constructor() {
  //       super();
  //       const shadow = this.attachShadow({ mode: "open" });
  //       shadow.innerHTML = html;
  //     }
  //   }
    

  //   // customElements.define("super-man", XCounter);
  // }

//   defineCustomElement('my-paragraph')
// defineCustomElement('your-paragraph')
  console.log("--")
} catch (e) {
  console.error(e);
}
