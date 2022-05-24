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
form.addEventListener('submit', addBox);
boxList.addEventListener('click', removeBox);
//The eventListener for this case must be applied to the whole Ul list, not only the button. 
filterSpace.addEventListener('keyup', searchBox);

/* Event listener functions */
function addBox(evt) {
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

function removeBox(evt){
    let li = evt.target.parentElement;
    let targetBox = evt.target.previousSibling.data;
    //remove from HTML and storage 
    confirmation(li, targetBox) //&& boxList.removeChild(li);
}

function confirmation(li, targetBox) {
    if (localStorage.getItem("language") == "Espanol")  {
        Swal.fire({
            title: 'Seguro queres borrar?',
            text: "Esto no podrá revertirse!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí,borrar'
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Listo!', 'La caja fue eliminada','success');
              boxList.removeChild(li);
              removeStoredItem(targetBox);
            }
        })    
    } else {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Deleted!', 'Your file has been deleted.','success');
              boxList.removeChild(li);
              removeStoredItem(targetBox);
            }
        })        
    } 
}

function searchBox(evt){
    let text = evt.target.value.toLowerCase();
    let items = boxList.getElementsByTagName('p');
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        itemName.toLowerCase().indexOf(text) != -1 ? item.parentElement.style.display = 'block' : item.parentElement.style.display = 'none';
        console.log(Array);
    });
}



