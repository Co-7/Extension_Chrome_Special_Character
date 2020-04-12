storageGet()
var body = document.querySelector('body');
var letter = document.getElementsByTagName('td');
let numberLetterByLine = 8; //Number of Letters displayed per line

//ouvrir la page option d'un une onglet chrome
document.querySelector('#btn-setting').addEventListener('click', function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});

function updateStyleHtmlPopup() {
    body.style.backgroundColor = valueBgColor;
    body.style.color = valueTextColor;
}

function storageGet() {
    clearArray();
    chrome.storage.sync.get(null, function (result) {
        setValueVariable(result);
        updateStyleHtmlPopup();
        makeArray();
    });
}




