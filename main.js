//pending language switch

/* Values */
const form = document.querySelector("#main form");
const boxList = document.querySelector("#boxList");
const filterSpace = document.querySelector("#filter");
const boxes = [];
const example = document.querySelector("#exampleTitle");
const nameField = document.querySelector('#input-title');
const contentField = document.querySelector('#input-content');

/* Objects */
class Box {
    constructor(boxName, content) {
        this.boxName  = boxName;
        this.content  = content;
    }
}

/* Event listeners */
form.addEventListener('submit', addItem);
boxList.addEventListener('click', removeItem);
//Lesson learned: I tried to apply the above event listener to the button instead of the ul. It worked, but I was only able to delete the first item. Maybe because I was using the same ID in all the buttons and IDs are unique! But also there seems to be a issue with the scope. 
//The eventListener for this case must be applied to the whole Ul list, not only the button.
filterSpace.addEventListener('keyup', searchItem);

/* Event listener functions */
function addItem(evt) {
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

function removeItem(evt){
    let li = evt.target.parentElement;
    let targetBox = evt.target.previousSibling.data;
    //remove from storage 
    removeStoredItem(targetBox);
    //remove from HTML
    evt.target.classList.contains('delete') && confirm('Are you sure?') && boxList.removeChild(li);
}

function searchItem(evt){
    let text = evt.target.value.toLowerCase();
    let items = boxList.getElementsByTagName('p');
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        itemName.toLowerCase().indexOf(text) != -1 ? item.parentElement.style.display = 'block' : item.parentElement.style.display = 'none';
        console.log(Array);
    });
}


