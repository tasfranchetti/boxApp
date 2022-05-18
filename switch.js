
//Language change

const languageBtn = document.querySelector("#language");
const mainTitle = document.querySelector("#header-title");
const titleAdd = document.querySelector("#titleAdd");
const titleList = document.querySelector("#titleList");
const exampleText = document.querySelector("#exampleText");


languageBtn.addEventListener('click', changeLanguage);

function changeLanguage(){
    (localStorage.getItem("language") == "Espanol") ? switchToEnglish(): switchToSpanish();
}

document.addEventListener("DOMContentLoaded", retreiveLanguage);

function retreiveLanguage(){
    (localStorage.getItem("language") == "Espanol") ? switchToSpanish() : switchToEnglish();
}

function switchToEnglish(){
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
    exampleTitle.firstChild.data = "Box 1";
    exampleText.firstChild.data  = "This is just an example of a box, remove it and create yours!";

    localStorage.setItem("language", "English")
}

function switchToSpanish(){
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
    exampleTitle.firstChild.data = "Caja 1";
    exampleText.firstChild.data  = "Esta es solo un ejemplo, borralo y agregá tus cajas!";

    localStorage.setItem("language", "Espanol");
}






