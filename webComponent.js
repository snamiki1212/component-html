const defineCustomElement = (id) =>
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

defineCustomElement("my-paragraph");
defineCustomElement("your-paragraph");
