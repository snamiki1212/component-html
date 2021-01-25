import {process} from './lib.js';

const list = [{
  html: "./components/super-man.html",
  id: "super-man",
}, {
  html: "./components/my-paragraph.html",
  id: "my-paragraph",
}, {
  html: "./components/your-paragraph.html",
  id: "your-paragraph",
}];

list.forEach(p => {
  process(p);
})


