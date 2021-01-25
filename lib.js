export const process = (params) => {
  fetch(params.html)
    .then((stream) => {
      return stream.text();
    })
    .then((text) => {
      const node = converStringHtmlToNode(text);
      document.body.appendChild(node);

      defineCustomElement(params.id);
    });
};

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
        if (!elem) return console.error(`cannot find element by id: ${id}`);
        const content = elem.content;
        const clone = content.cloneNode(true);
        this.attachShadow({ mode: "open" }).appendChild(clone);
      }
    }
  );
};