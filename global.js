//Variable
let valueBgColor;
let valueTextColor;
let letterBox = document.querySelector('#letter-box');

//Variable Default Value
let valueBgColorDefault = "#4b4b4b";
let valueTextColorDefault = "#ffffff";
var arrayFavorisCharacters = [];
var arrayAlphabetCharacters = ["À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Œ", "Š", "þ", "Ù", "Ú", "Û", "Ü", "Ý", "Ÿ"];
var arrayGrecCharacters = ["α", "Α", "β", "Β", "γ", "Γ", "ε", "ϵ", "θ", "ϑ", "κ", "ϰ", "π", "ϖ", "ρ", "ϱ", "σ", "ς", "ϕ", "φ", "ω", "Ω", "℧", "ϝ", "Ϝ"];
var arrayCyrilliqueCharacters = ["Ѐ", "Ё", "Ђ", "Ѓ", "Є", "Ѕ", "І", "Ї", "Ј", "Љ", "Њ"];
var arrayHebraiqueCharacters = ["א", "ב", "ג", "ד"];
var arrayPhonetiqueCharacters = ["ɐ", "ɑ", "ɒ", "ɓ", "ɔ", "ɕ", "ɖ", "ɗ", "ɘ", "ə", "ɚ"];
var arrayBrailleCharacters = ["⠁", "⠂", "⠃", "⠄", "⠅", "⠆", "⠇"];
var arrayOghamiqueCharacters = [" ", "ᚁ", "ᚂ", "ᚃ", "ᚄ", "ᚅ", "ᚆ", "ᚇ", "ᚈ", "ᚉ", "ᚊ", "ᚋ", "ᚌ", "ᚍ", "ᚎ", "ᚏ", "ᚐ", "ᚑ", "ᚒ", "ᚓ", "ᚔ", "ᚕ", "ᚖ", "ᚗ", "ᚘ", "ᚙ", "ᚚ", "᚛", "᚜"];
var arrayRuniqueCharacters = ["ᚠ", "ᚡ", "ᚢ", "ᚣ", "ᚤ", "ᚥ", "ᚦ", "ᚧ", "ᚨ", "ᚩ", "ᚪ", "ᚫ"];
var arrayThaiCharacters = ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช"];
var arrayMathCharacters = ["¼", "½", "¾", "↉", "⅓", "⅔", "⅕", "⅖", "⅗", "⅘", "⅙", "⅚", "⅛", "⅜", "⅝", "⅞", "⅟", "⅐", "⅑", "⅒", "Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ", "Ⅺ", "Ⅻ", "Ⅼ", "Ⅽ", "Ⅾ", "Ⅿ", "ↀ", "ↁ", "ↂ", "Ↄ", "ↇ", "ↈ", "ⅰ", "ⅱ", "ⅲ", "ⅳ", "ⅴ", "ⅵ", "ⅶ", "ⅷ", "ⅸ", "ⅹ", "ⅺ", "ⅻ", "ⅼ", "ⅽ", "ⅾ", "ⅿ", "ↄ", "ℂ", "ℍ", "ℕ", "ℙ", "ℚ", "ℝ", "ℤ", "∅"];
var arraySelect = [];
//Tableau contenant les Noms des Differents Onglets dans un tableau "navTabCharacter"
let navTabCharacter = ['Favoris', 'Alphabet', 'Grec', 'Cyrillique', 'Hebraique', 'Phonetique', 'Braille', 'Oghamique', 'Runique', 'Thai', 'Math'];
//Tableau qui va stocker la balise a des onglets de navTabCharacter
let arrayTabsCharacters = [];
//Tableau qui va stocker les variables des tableaux stockant les caracteres de la liste de navTabCharacter
let arrayArrayCharacters = [];

function createNavTabCharacter() {
    //balise ul où vont etres mit la liste des onglets
    let ul = document.querySelector("#characters-list-name");

    // Pour toutes les valeurs (nav) dans navTabCharacter
    for (let nav of navTabCharacter) {
        //Création d'une balise li
        let li = document.createElement("li");
        //Ajout d'une class à la balise li
        li.classList.add("nav-item");
        //Ajoute la balise li dans la balise ul
        ul.appendChild(li);

        //Création d'une balise a
        let a = document.createElement("a");
        //Ajout d'une class à la balise a
        a.classList.add("nav-link");
        //Ajout d'un text dans la balise a correspondant a une valeur du tableau navTabCharacter
        a.innerText = nav;
        //Ajout d'un href à la balise a
        a.href = "#";
        //Ajout d'un id à la balise a
        a.id = "characters-tab-" + nav.toLowerCase();
        //Ajoute la balise a dans la balise li
        li.appendChild(a);

        arrayTabsCharacters.push(window["tabs" + nav + "Characters"] = (document.getElementById(a.id)));
        arrayArrayCharacters.push(window["array" + nav + "Characters"]);
    }
    //Definit l'onglet Favoris avec la class active
    document.getElementById("characters-tab-favoris").classList.add("active");
}

function changeTabCharacters() {
    let i = 0;
    for (let tabCharacter of arrayTabsCharacters) {
        let j = i;
        tabCharacter.addEventListener('click', function () {
            removeActiveCharactersTab();
            tabCharacter.classList.add("active");
            arraySelect = arrayArrayCharacters[j];
            clearArray();
            makeArray(arraySelect);
        });
        i++;
    }
}

function removeActiveCharactersTab() {
    let allCharactersTabs = document.querySelectorAll('*[id^="characters-tab-"]');
    for (let content of allCharactersTabs) {
        content.classList.remove("active");
    }
}

function favorisEmpty() {

    if (arrayFavorisCharacters.length === 0) {
        console.log("empty");
    } else {
        console.log("noempty");
    }
}

function tabCharacter() {
    createNavTabCharacter();
    changeTabCharacters();
    favorisEmpty();
}

function clearArray() {
    console.log("clearArray()");
    let tr = document.querySelectorAll('tr');
    for (let i = 0; i < tr.length; i++) {
        letterBox.removeChild(tr[i]);
    }
}

function makeArray(array) {
    console.log("makeArray()");

    let nb = Math.ceil(array.length) / numberLetterByLine;
    for (let i = nb; i > 0; i--) {
        let tr = document.createElement('tr');
        letterBox.appendChild(tr);
    }
    let j = 0;
    let y = 0;
    //Verification si l'array affiché est suis des favoris
    let favArray = array === arrayFavorisCharacters;
    console.log(array);
    for (let letter of array) {

        if (j === numberLetterByLine) {
            y++;
            j = 0;
        }
        j++;
        let tr = document.querySelectorAll('tr')[y];
        let td = document.createElement('td');

        //Event Copié quand on clique sur une lettre
        td.addEventListener('click', function () {
            let textarea = document.createElement("textarea");
            textarea.value = this.textContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        });

        //si c'est FavArray affiché nous ne mettons pas au lettre la possibilité d'etre mis en favoris
        if (favArray !== true) {
            td.addEventListener('dblclick', function () {
                let j = false;

                for (let letter of arrayFavorisCharacters) {
                    j = letter === td.innerText ? j = true : j;
                }

                if (j !== true) {
                    arrayFavorisCharacters.push(td.innerText);
                    storageSetArrayLetter()
                }
            });
        } else {
            td.addEventListener('dblclick', function () {
                let tempArray = [];
                let letterBox = document.getElementById("letter-box");
                td.remove();
                let allTd = letterBox.querySelectorAll("td");
                console.log(allTd);
                for (let x of allTd) {
                    console.log(x.innerText);
                    tempArray.push(x.innerText);
                }
                console.log(tempArray);
                arrayFavorisCharacters = tempArray;
                storageSetArrayLetter();

                console.log(arrayFavorisCharacters);
            });
        }

        td.textContent = letter;
        tr.appendChild(td);
    }
}

function setValueVariable(result) {
    console.log("setValueVariable()");
    valueBgColor = result.storageBgColor === undefined ? valueBgColorDefault : result.storageBgColor;
    valueTextColor = result.storageTextColor === undefined ? valueTextColorDefault : result.storageTextColor;
    arrayFavorisCharacters = result.storageLetter === undefined ? [] : result.storageLetter;
}

function storageSetArrayLetter() {
    console.log("storageSetArrayLetter()");
    chrome.storage.sync.set({storageLetter: arrayFavorisCharacters}, function () {

    });
    console.log(arrayFavorisCharacters);
}

// function storageGetArrayFav() {
//     console.log("storageSetArrayLetter()");
//
//     chrome.storage.sync.get(null, function (result) {
//         arrayFavorisCharacters = result.storageLetter === undefined ? [] : result.storageLetter;
//
//     });
//
// }


//
// chrome.storage.sync.get(null, function (result) {
//     setValueVariable(result);
//     arraySelect = arrayFavorisCharacters;
//     makeArray(arraySelect);
//     tabCharacter();
//     updateStyleHtmlOption();
// });
