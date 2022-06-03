/* Resources */
import {boxes, Box, example} from "../main.js";


/* Module */
export function retreiveStoredBox(){
    let stored = JSON.parse(localStorage.getItem("boxList"));
    stored.forEach(box => {      
        createHTMLBox(box.boxName, box.content);
        boxes.push(new Box(box.boxName, box.content));
    }); 
    //The example should not be displayed if there's stored data
    (stored.length !== 0) && (example.style.display = 'none');
}
//retreiveStoredBox();

import {createHTMLBox} from "./add-box-module.js";