/* Resources */
import {boxes, boxList} from "../main.js";
import {storeNewBox} from "./add-box-module.js";

/* Module */
export function removeBox(evt){
    let li = evt.target.parentElement;
    let targetBox = evt.target.previousSibling.data;
    //remove from HTML and storage 
    confirmation(li, targetBox);
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

function removeStoredItem(targetBox) {
    const index = boxes.findIndex(box => {
        return box.boxName === targetBox;
    });
    index != -1 && boxes.splice(index, 1);
    storeNewBox();
}


