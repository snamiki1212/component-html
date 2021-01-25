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

## Usage

1. Create component file like `/components/xxx-xxx.html`.

   ```html
   <div>Hello World!</div>
   ```

2. Add component name(`xxx-xxx`) in `main.js`.
3. Use `xxx-xxx` component in `index.html`.

   ```html
   <html>
     <xxx-xxx></xxx-xxx>
   </html>
   ```

4. Open `index.html` and then render 'Hello World!'.

## Why Use `http-server`

We cannot open .js file via .html because of security feature in browser.

- REF: https://qiita.com/terufumi1122/items/39b2a3659bc585c07f64

## REF

- [javascript - How to separate web components to individual files and load them? - Stack Overflow](https://stackoverflow.com/a/55081177/8842333)
- [CodePen - example webcomponet template/define](https://codepen.io/snamiki1212/pen/rNMEjrm?editors=1010)
