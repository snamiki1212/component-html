import {process} from './lib.js';

const componentNameList = [
  "super-man",
  "my-paragraph",
  "your-paragraph",
]

componentNameList.forEach(name => {
  process(name);
})


