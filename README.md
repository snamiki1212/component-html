## Overview

Example WebComponent feature.

- Split html file
- Reuseble component
- Scoped CSS

## Installation

```zsh
$ yarn install
$ yarn http-server
$ open http://127.0.0.1:8080/
```

## Explanation

1. Create component file like `/components/xxx-xxx.html`.

   ```html
   <div>Hello World!</div>
   ```

2. Add component name(`xxx-xxx`) in `main.js`.

   - Working on `customElements.define(...)` in logic

3. Use `xxx-xxx` component in `index.html`.

   ```html
   <html>
     <xxx-xxx></xxx-xxx>
   </html>
   ```

4. Open `index.html` and then render 'Hello World!'.

## Pros and cons

### Pros

- Easy way to use component as custom element.
- No need 3rd party library.
- Vanilla JavaScript and HTML.

### Cons

- Network latency would happen in this way because JavaScript try to fetch each component html files. If we bundled files into one file, such a problem wouldn't happen.

  > <img width="610" alt="Screen Shot 2021-01-29 at 15 29 08" src="https://user-images.githubusercontent.com/26793088/106337724-c6f35280-6246-11eb-8a10-59f98c8387eb.png">

- Waiting time happen untill custome element load and render.

## Why Use `http-server`

We cannot open .js file via .html because of security feature in browser.

- REF: https://qiita.com/terufumi1122/items/39b2a3659bc585c07f64

## REF

- [javascript - How to separate web components to individual files and load them? - Stack Overflow](https://stackoverflow.com/a/55081177/8842333)
- [CodePen - example webcomponet template/define](https://codepen.io/snamiki1212/pen/rNMEjrm?editors=1010)
- [Web Components のリアル/ Realistic Web Components - Speaker Deck](https://speakerdeck.com/aggre/realistic-web-components)
