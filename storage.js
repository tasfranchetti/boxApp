/* Storage related functions */
function storeNewBox() {
    localStorage.clear("boxList");
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
    boxes.splice(index, 1);
    storeNewBox();
}

//localStorage.clear();

