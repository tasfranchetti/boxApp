/* Resources */
import {form, boxes, Box, boxList, nameField, contentField} from "../main.js";

/* Module */
export function addBox(evt) {
    evt.preventDefault();
    let boxName = nameField.value;
    let content = contentField.value;
    if (!boxName || !content) {
        emptyInput();
    } else {
        createHTMLBox(boxName, content);
        boxes.push(new Box(boxName,content));
        storeNewBox();
        form.reset();
    }
}

function emptyInput(){
    if (localStorage.getItem("language") == "Espanol")  {
    Swal.fire({
        title: 'Por favor, completa ambos campos',
        icon: 'warning',
    })
   } else {
    Swal.fire({
        title: 'Please fill both, title and content.',
        icon: 'warning',
    })
   }
}

export function createHTMLBox(boxName, content) {
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.innerText = boxName;

    let pLi = document.createElement('p');
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

