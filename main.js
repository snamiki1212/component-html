import {process} from './lib.js';

const list = [{
  html: "./components/super-man.html",
  id: "super-man",
}];

list.forEach(p => {
  process(p);
})


