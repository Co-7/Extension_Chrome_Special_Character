storageGet()
var body = document.querySelector('body');
var letter = document.getElementsByTagName('td');

//ouvrir la page option d'un une onglet chrome
document.querySelector('#btn-setting').addEventListener('click', function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});

for (var i = 0; i < letter.length; i++) {
    letter[i].addEventListener('click', function () {
        var textarea = document.createElement("textarea");
        textarea.value = this.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy")
        document.body.removeChild(textarea);
    });
}

let letterBox = document.querySelector('#letter-box');

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


// var val = document.querySelector("#val");
// var del = document.querySelector('#del');

// val.className = "d-none"

// del.addEventListener('click', function() {
// 	val.classList.remove("d-none");
// 	del.className = "d-none"
// 	for (var i = 0; i < letter.length; i++) {
// 		letter[i].addEventListener('click', function () {
// 			this.remove();
// 		});
// 	}
// })

function clearArray() {
    let tr = document.querySelectorAll('tr');
    for (let i = 0; i < tr.length; i++) {
        letterBox.removeChild(tr[i]);
    }
}

//------------------------------------------------------------------------------------

function storageGet() {
    clearArray();
    chrome.storage.sync.get(null, function (result) {
        console.log("Exec storageGet()");
        console.log('Result storageBgColor est : ' + result.storageBgColor);
        valueBgColor = result.storageBgColor === undefined ? "#000000" : result.storageBgColor;
        valueTextColor = result.storageTextColor === undefined ? "#ffffff" : result.storageTextColor;
        arrayLetter = result.storageLetter === undefined || result.storageLetter.length === 0 ? ['À', 'É', 'È', 'Ù', 'Æ', 'æ', 'Œ', 'œ'] : result.storageLetter;
        console.log('valueBgColor est defini sur : ' + valueBgColor);
        console.log('valueTextColor est defini sur : ' + valueTextColor);
        body.style.backgroundColor = valueBgColor;
        body.style.color = valueTextColor;
        makeArray()
    });
}




