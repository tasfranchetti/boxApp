
/* Imported Resources */
import {addBox} from "./modules/add-box-module.js"
import {removeBox} from "./modules/remove-box-module.js"
import {searchBox} from "./modules/search-box-module.js"
import {changeLanguage, retreiveLangSetting} from "./modules/laguage-module.js"

/* Local Resources */
const form = document.querySelector("#main form");
const boxList = document.querySelector("#boxList");
const filterSpace = document.querySelector("#filter");
const languageBtn = document.querySelector("#language");
const mainTitle = document.querySelector("#header-title");
const titleAdd = document.querySelector("#titleAdd");
const titleList = document.querySelector("#titleList");
const exampleText = document.querySelector("#exampleText");
const nameField = document.querySelector('#input-title');
const contentField = document.querySelector('#input-content');
const example = document.querySelector("#exampleTitle");
//Arrays
const boxes = [];
//Objects 
class Box {
    constructor(boxName, content) {
        this.boxName  = boxName;
        this.content  = content;
    }
}

/* Export */
export {form, boxList, filterSpace, boxes, languageBtn, mainTitle, titleAdd, titleList, exampleText, nameField, example, contentField, Box}

/* Event listeners */
form.addEventListener('submit', addBox);
boxList.addEventListener('click', removeBox);
filterSpace.addEventListener('keyup', searchBox);
languageBtn.addEventListener('click', changeLanguage);
document.addEventListener("DOMContentLoaded", retreiveLangSetting);

