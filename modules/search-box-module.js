/* Resources */
import {boxList} from "../main.js";

/* Module */
export function searchBox(evt){
    let text = evt.target.value.toLowerCase();
    let items = boxList.getElementsByTagName('p');
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        itemName.toLowerCase().indexOf(text) != -1 ? item.parentElement.style.display = 'block' : item.parentElement.style.display = 'none';
    });
}
