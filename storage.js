/* Storage related functions */
//localStorage.clear();

/* Boxes */
function storeNewBox() {
    localStorage.removeItem("boxList");
    const storeBoxes = (key, value) => {localStorage.setItem(key, value)};
    storeBoxes("boxList", JSON.stringify(boxes));
}

function retreiveStored(){
    let stored = JSON.parse(localStorage.getItem("boxList"));
    stored.forEach(box => {      
        createHTMLBox(box.boxName, box.content);
        boxes.push(new Box(box.boxName, box.content));
    }); 
    //The example should not be displayed if there's stored data
    (stored.length !== 0) && (example.style.display = 'none');
}
retreiveStored();

function removeStoredItem(targetBox) {
    const index = boxes.findIndex(box => {
        return box.boxName === targetBox;
    });
    index != -1 && boxes.splice(index, 1);
    storeNewBox();
}





