export const process = (componentName) => {
  const htmlDir = convertComponentNameToDir(componentName)
  fetch(htmlDir)
    .then((stream) => {
      return stream.text();
    })
    .then((text) => {
      const node = converStringHtmlToNode(text);
      document.body.appendChild(node);
      defineCustomElement(componentName);
    });
};

const convertComponentNameToDir = (name) => `./components/${name}.html`

const converStringHtmlToNode = (html) => {
  const elem = document.createElement("div");
  elem.innerHTML = html;
  return elem.firstChild;
};

const defineCustomElement = (id) => {
  customElements.define(
    id,
    class extends HTMLElement {
      constructor() {
        super();
        const elem = document.getElementById(id);
        if (!elem) return console.error(`Cannot find element by id: ${id}`);
        const content = elem.content;
        const clone = content.cloneNode(true);
        this.attachShadow({ mode: "open" }).appendChild(clone);
      }
    }
  );
};