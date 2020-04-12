storageGet();
let btnBgColorInput = document.querySelector("#btn-bg-color-input");
let btnBgColorSpan = document.querySelector("#btn-bg-color-span");
let btnTextColorInput = document.querySelector("#btn-text-color-input");
let btnTextColorSpan = document.querySelector("#btn-text-color-span");
let designPreview = document.querySelector("#design-preview");
let reset = document.querySelector('#reset');
let btnDelete = document.querySelector('#btn-delete');
let btnAdd = document.querySelector('#btn-add');
let inputTextAdd = document.querySelector('#input-text-add');
let btnStopDelete = document.querySelector('#btn-stop-delete');
let numberLetterByLine = 10; //Number of Letters displayed per line


btnBgColorInput.addEventListener('change', function () {
    console.log("Couleur Selectionné : " + btnBgColorInput.value);
    valueBgColor = btnBgColorInput.value;
    btnBgColorSpan.style.backgroundColor = valueBgColor;
    designPreview.style.backgroundColor = valueBgColor;
    storageSetBgColor();
});

btnTextColorInput.addEventListener('change', function () {
    console.log("Couleur Selectionné : " + btnTextColorInput.value);
    valueTextColor = btnTextColorInput.value;
    btnTextColorSpan.style.backgroundColor = valueTextColor;
    designPreview.style.color = valueTextColor;

    storageSetTextColor();
});

reset.addEventListener('click', function () {

    let result = confirm("Attention tous les parametres y compris les caractères ajouter vont être supprimer et reinitialisé à l'etat d'origine ! Etes vous certains ?");

    if (result) {
        chrome.storage.sync.clear();
        console.log("Storage clear");
        clearArray();
        storageGet();
    }
});

function storageSetBgColor() {
    chrome.storage.sync.set({storageBgColor: valueBgColor}, function () {
        console.log('valueBgColor est defini sur : ' + valueBgColor);
    });
}

function storageSetTextColor() {
    chrome.storage.sync.set({storageTextColor: valueTextColor}, function () {
        console.log('valueTextColor est defini sur : ' + valueTextColor);
    });
}

function storageSetArrayLetter() {
    chrome.storage.sync.set({storageLetter: arrayLetter}, function () {
        console.log(arrayLetter);
    });
    storageGet();
}

function updateStyleHtmlOption() {
    btnBgColorInput.value = valueBgColor;
    btnBgColorSpan.style.backgroundColor = valueBgColor;
    designPreview.style.backgroundColor = valueBgColor;
    btnTextColorInput.value = valueTextColor;
    btnTextColorSpan.style.backgroundColor = valueTextColor;
    designPreview.style.color = valueTextColor;
}

function storageGet() {
    clearArray();
    chrome.storage.sync.get(null, function (result) {
        setValueVariable(result);
        updateStyleHtmlOption();
        makeArray();
    });

}


btnDelete.addEventListener('click', function () {
    let nbTd = document.querySelectorAll("td");
    btnDelete.classList.add("d-none");
    btnAdd.classList.add("d-none");
    inputTextAdd.classList.add("d-none");
    btnStopDelete.classList.remove("d-none");

    for (let i = 0; i < nbTd.length; i++) {
        let td = document.querySelectorAll("td")[i];
        td.addEventListener('click', del)
    }
});

btnAdd.addEventListener('click', function () {
    if (inputTextAdd.value !== "" && inputTextAdd.value !== " " && inputTextAdd.value.length === 1) {
        let j = false;

        for (let letter of arrayLetter) {
            j = letter === inputTextAdd.value ? j = true : j;
        }

        if (j !== true) {
            arrayLetter.push(inputTextAdd.value);
            inputTextAdd.value = "";
            storageSetArrayLetter()
        }


    }
});

btnStopDelete.addEventListener('click', function () {
    let newArray = [];
    let nbTd = document.querySelectorAll("td")
    btnDelete.classList.remove("d-none");
    btnAdd.classList.remove("d-none");
    inputTextAdd.classList.remove("d-none");
    btnStopDelete.classList.add("d-none");

    for (let i = 0; i < nbTd.length; i++) {
        let td = document.querySelectorAll("td")[i];
        td.removeEventListener('click', del);
        newArray.push(td.innerText);
    }
    arrayLetter = newArray;
    storageSetArrayLetter()
});


function del() {
    console.log("Letter has been Delete");
    this.remove();
}
