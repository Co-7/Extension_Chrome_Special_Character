storageGet();
let btnBgColorInput = document.querySelector("#btn-bg-color-input");
let btnBgColorSpan = document.querySelector("#btn-bg-color-span");
let btnTextColorInput = document.querySelector("#btn-text-color-input");
let btnTextColorSpan = document.querySelector("#btn-text-color-span");
let designPreview = document.querySelector("#design-preview");
let reset = document.querySelector('#reset');
let valueBgColor;
let valueTextColor;
let arrayLetter = [];

btnBgColorInput.addEventListener('change', function () {
    console.log("Couleur Selectionné : " + btnBgColorInput.value);
    let valueBgColor = btnBgColorInput.value;
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
    chrome.storage.sync.clear();
    console.log("Storage clear");
    clearArray();
    storageGet();
});

function clearArray() {
    let tr = document.querySelectorAll('tr');
    for (let i = 0; i < tr.length; i++) {
        letterBox.removeChild(tr[i]);
    }
}

function storageSetBgColor() {
    console.log("Exec storageSet()");
    chrome.storage.sync.set({storageBgColor: valueBgColor}, function () {
        console.log('valueBgColor est defini sur : ' + valueBgColor);
    });
}

function storageSetTextColor() {
    console.log("Exec storageSet()");
    chrome.storage.sync.set({storageTextColor: valueTextColor}, function () {
        console.log('valueTextColor est defini sur : ' + valueTextColor);
    });
}

function storageSetArrayLetter() {
    console.log("Exec storageSet()");
    chrome.storage.sync.set({storageLetter: arrayLetter}, function () {
        console.log('arrayLetter est defini sur : ' + arrayLetter);
    });
    storageGet();
}

function storageGet() {
    clearArray();
    chrome.storage.sync.get(null, function (result) {

        valueBgColor = result.storageBgColor === undefined ? "#000000" : result.storageBgColor;
        valueTextColor = result.storageTextColor === undefined ? "#ffffff" : result.storageTextColor;
        arrayLetter = result.storageLetter === undefined || result.storageLetter.length === 0 ? ['À', 'É', 'È', 'Ù', 'Æ', 'æ', 'Œ', 'œ'] : result.storageLetter;
        btnBgColorInput.value = valueBgColor;
        btnBgColorSpan.style.backgroundColor = valueBgColor;
        designPreview.style.backgroundColor = valueBgColor;
        btnTextColorInput.value = valueTextColor;
        btnTextColorSpan.style.backgroundColor = valueTextColor;
        designPreview.style.color = valueTextColor;
        makeArray()
    });
}

let letterBox = document.querySelector('#letter-box');
let btnDelete = document.querySelector('#btn-delete');
let btnAdd = document.querySelector('#btn-add');
let inputTextAdd = document.querySelector('#input-text-add');


let btnCleanListner = document.querySelector('#btn-cleanListner');

function makeArray() {
    let nb = Math.ceil(arrayLetter.length) / 4;
    for (let i = nb; i > 0; i--) {
        let tr = document.createElement('tr');
        letterBox.appendChild(tr);
    }
    let j = 0;
    let y = 0;
    for (let letter of arrayLetter) {
        if (j === 4) {
            y++;
            j = 0;
        }
        j++;
        let tr = document.querySelectorAll('tr')[y];
        let td = document.createElement('td');
        td.textContent = letter;
        tr.appendChild(td);
    }
}


btnDelete.addEventListener('click', function () {
    let nbTd = document.querySelectorAll("td");
    btnDelete.classList.add("d-none");
    btnCleanListner.classList.remove("d-none");

    for (let i = 0; i < nbTd.length; i++) {
        let td = document.querySelectorAll("td")[i];
        td.addEventListener('click', del)
    }

});

btnAdd.addEventListener('click', function () {
    arrayLetter.push(inputTextAdd.value);
    storageSetArrayLetter()
});


btnCleanListner.addEventListener('click', function () {
    let newArray = [];
    let nbTd = document.querySelectorAll("td")
    btnDelete.classList.remove("d-none");
    btnCleanListner.classList.add("d-none");

    for (let i = 0; i < nbTd.length; i++) {
        let td = document.querySelectorAll("td")[i];
        console.log(td);
        td.removeEventListener('click', del);
        newArray.push(td.innerText);
    }
    arrayLetter = newArray;
    storageSetArrayLetter()
});


function del() {
    console.log("delete has been Delete");
    this.remove();
}
