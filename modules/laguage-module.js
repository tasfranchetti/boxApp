/* Resources */
import {filterSpace, languageBtn, mainTitle, titleAdd, titleList, exampleText, nameField, example, contentField} from "../main.js";

/* Module */
export function changeLanguage(){
    (localStorage.getItem("language") == "Espanol") ? switchToEnglish(): switchToSpanish();
}

export function retreiveLangSetting(){
    (localStorage.getItem("language") == "Espanol") ? switchToSpanish() : switchToEnglish();
}

export function switchToEnglish(){
     //button
    languageBtn.innerText = "Español";
    //header
    mainTitle.innerText = "The amazing box list";
    filterSpace.setAttribute("placeholder", "Search boxes by content..."); 
    //Add a box
    titleAdd.innerText = "Add a box";
    nameField.setAttribute("placeholder", "Title");
    contentField.setAttribute("placeholder", "Content");

    //Box list
    titleList.innerText = "Your boxes";
    example.firstChild.data = "Box 1";
    exampleText.firstChild.data  = "This is just an example of a box, remove it and create yours!";

    localStorage.removeItem("language");
    localStorage.setItem("language", "English")
}

export function switchToSpanish(){
    //button
    languageBtn.innerText = "English";
    //header
    mainTitle.innerText = "La genial lista de cajas";
    filterSpace.setAttribute("placeholder", "Buscar por contenido..."); 
    //Add a box
    titleAdd.innerText = "Agregar una caja";
    nameField.setAttribute("placeholder", "Nombre");
    contentField.setAttribute("placeholder", "Contenido");

    //Box list
    titleList.innerText = "Tus cajas";
    example.firstChild.data = "Caja 1";
    exampleText.firstChild.data  = "Esta es solo un ejemplo, borralo y agregá tus cajas!";

    localStorage.removeItem("language");
    localStorage.setItem("language", "Espanol");
}

