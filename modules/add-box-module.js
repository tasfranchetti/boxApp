/* Resources */
import {form, boxes, Box, boxList, nameField, contentField} from "../main.js";

/* Module */
export function addBox(evt) {
    evt.preventDefault();
    let boxName = nameField.value;
    let content = contentField.value;
    (!boxName || !content) && alert("Please fill both, title and content.");
    createHTMLBox(boxName, content);
    boxes.push(new Box(boxName,content));
    storeNewBox();
    //clear the input fields
    form.reset();
}

function createHTMLBox(boxName, content) {
    let li = !boxName ? false : document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.innerText = boxName;
    let pLi = !boxName ? false : document.createElement('p');
    pLi.setAttribute('class', 'boxContent');
    pLi.innerText = content;
    let removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger btn-sm float-right delete');
    removeButton.innerText = 'X';
    li.appendChild(removeButton);
    li.appendChild(pLi);
    boxList.appendChild(li);
}

export function storeNewBox() {
    localStorage.removeItem("boxList");
    const storeBoxes = (key, value) => {localStorage.setItem(key, value)};
    storeBoxes("boxList", JSON.stringify(boxes));
}

