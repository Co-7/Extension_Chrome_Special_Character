let body = document.querySelector('body');
let letter = document.getElementsByTagName('td');
storageGet();

let numberLetterByLine = 17; //Number of Letters displayed per line

//Ouvrir la page option d'un une onglet chrome
document.querySelector('#btn-setting').addEventListener('click', function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});

//Update Les couleurs
function updateStyleHtmlPopup() {
    body.style.backgroundColor = valueBgColor;
    body.style.color = valueTextColor;
    let a = document.querySelectorAll('a');
    console.log(a);
    for (let i of a) {
        i.style.color = valueTextColor;
    }

}

function storageGet() {
    console.log("storageGet() popup");
    clearArray();
    chrome.storage.sync.get(null, function (result) {
        setValueVariable(result);
        arraySelect = arrayFavorisCharacters;
        makeArray(arraySelect);
        tabCharacter();
        updateStyleHtmlPopup();
    });
}



