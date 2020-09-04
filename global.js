//Variable
let valueBgColor;
let valueTextColor;
let letterBox = document.querySelector('#letter-box');

//Variable Default Value
let valueBgColorDefault = "#4b4b4b";
let valueTextColorDefault = "#ffffff";
var arrayFavorisCharacters = [];
var arrayAlphabetCharacters = ["À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Œ", "Š", "þ", "Ù", "Ú", "Û", "Ü", "Ý", "Ÿ"];
var arrayGrecCharacters = ["α", "Α", "β", "Β", "γ", "Γ", "Ϝ", "δ", "Δ", "ε", "Ε", "ϵ", "ζ", "Ζ", "η", "Η", "θ", "Θ", "ϑ", "ι", "Ι", "κ", "Κ", "ϰ", "λ", "Λ", "μ", "Μ", "ν", "Ν", "ξ", "Ξ", "ο", "Ο", "π", "Π", "ϖ", "ρ", "Ρ", "σ", "Σ", "ϛ", "τ", "Τ", "υ", "Υ", "φ", "Φ", "ϕ", "ϝ", "χ", "Χ", "ψ", "Ψ", "ω", "Ω"];
var arrayCyrilliqueCharacters = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", "«", "»", "„", "“", "—", "…", "́", "І", "Ѣ", "Ѳ", "Ѵ", "і", "ѣ", "ѳ", "ѵ"];
var arrayHebraiqueCharacters = ["כּ", "כ", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "בּ", "ב", "א", "ך", "ת", "שׂ", "שׁ", "ש", "ר", "ק", "צ", "פּ", "פ", "ע", "ס", "נ", "מ", "ל", "ץ", "ף", "ן", "ם", "וּ", "וֹ", "ּ", "ֻ", "ֹ", "ָ", "ַ", "ֶ", "ֵ", "ִ", "ֳ", "ֲ", "ֱ", "ְ", "ֽ", "֫", "֔", "֑", "׃", "׀", "־", "״", "׳", "₪"];
var arrayPhonetiqueCharacters = ["ɑ", "ɐ", "ɒ", "æ", "ɓ", "ʙ", "β", "ɔ", "ɕ", "ç", "ɗ", "ɖ", "ð", "ʤ", "ə", "ɘ", "ɚ", "ɛ", "ɜ", "ɝ", "ɞ", "ɟ", "ʄ", "ɡ", "ɠ", "ɢ", "ʛ", "ɦ", "ɧ", "ħ", "ɥ", "ʜ", "ɨ", "ɪ", "ʝ", "ɭ", "ɬ", "ɫ", "ɮ", "ʟ", "ɱ", "ɯ", "ɰ", "ŋ", "ɳ", "ɲ", "ɴ", "ø", "ɵ", "ɸ", "θ", "œ", "ɶ", "ʘ", "ɹ", "ɺ", "ɾ", "ɻ", "ʀ", "ʁ", "ɽ", "ʂ", "ʃ", "ʈ", "ʧ", "ʉ", "ʋ", "ʊ", "ʌ", "ɣ", "ɤ", "ʍ", "χ", "ʎ", "ʏ", "ʑ", "ʐ", "ʒ", "ʔ", "ʡ", "ʕ", "ʢ", "ǀ", "ǁ", "ǂ", "ǃ", "ˈ", "ˌ", "ː", "ˑ", "ʼ", "ʴ", "ʰ", "ʱ", "ʲ", "ʷ", "ˠ", "ˤ", "˞"];
var arrayBrailleCharacters = ["⠀", "⠁", "⠂", "⠃", "⠄", "⠅", "⠆", "⠇", "⠈", "⠉", "⠊", "⠋", "⠌", "⠍", "⠎", "⠏", "⠐", "⠑", "⠒", "⠓", "⠔", "⠕", "⠖", "⠗", "⠘", "⠙", "⠚", "⠛", "⠜", "⠝", "⠞", "⠟", "⠠", "⠡", "⠢", "⠣", "⠤", "⠥", "⠦", "⠧", "⠨", "⠩", "⠪", "⠫", "⠬", "⠭", "⠮", "⠯", "⠰", "⠱", "⠲", "⠳", "⠴", "⠵", "⠶", "⠷", "⠸", "⠹", "⠺", "⠻", "⠼", "⠽", "⠾", "⠿"];
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
    let ul = document.querySelector("#characters-list-name");

    for (let nav of navTabCharacter) {
        let li = document.createElement("li");
        li.classList.add("nav-item");
        ul.appendChild(li);
        let a = document.createElement("a");
        a.classList.add("nav-link");
        a.innerText = nav;
        a.href = "#";
        a.id = "characters-tab-" + nav.toLowerCase();
        li.appendChild(a);
        arrayTabsCharacters.push(window["tabs" + nav + "Characters"] = (document.getElementById(a.id)));
        arrayArrayCharacters.push(window["array" + nav + "Characters"]);
    }
    document.getElementById("characters-tab-favoris").classList.add("active");
}

function changeTabCharacters() {
    let i = 0;
    for (let tabCharacter of arrayTabsCharacters) {
        let j = i;
        tabCharacter.addEventListener('click', function () {
            removeActiveCharactersTab();
            tabCharacter.classList.add("active");
            arraySelect = j === 0 ? arrayFavorisCharacters : arrayArrayCharacters[j];
            let p = document.createElement("p");
            p.innerText = "Ajouter un Favoris en Double Cliquant sur un Caractere et Idem pour pouvoir le Supprimer des Favoris";
            p.style.fontStyle = "italic";
            p.style.opacity = "0.5";
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

function tabCharacter() {
    createNavTabCharacter();
    changeTabCharacters();
}

function clearTabCharacters() {
    console.log("clearTabCharacters()");
    let ul = document.querySelector("#characters-list-name");
    let li = ul.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        ul.removeChild(li[i]);
    }

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
    console.log(array);

    let nb = Math.ceil(array.length) / numberLetterByLine;
    for (let i = nb; i > 0; i--) {
        let tr = document.createElement('tr');
        letterBox.appendChild(tr);
    }
    let j = 0;
    let y = 0;
    //Verification si l'array affiché est suis des favoris
    let favArray = array === arrayFavorisCharacters;
    console.log(favArray);
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
                    console.log("Ajouts du Caractere au Favoris");
                    arrayFavorisCharacters.push(td.innerText);
                    storageSetArrayLetter();
                } else console.log("Deja en Favoris");
            });
        } else {
            td.addEventListener('dblclick', function () {
                let tempArray = [];
                let letterBox = document.getElementById("letter-box");
                td.remove();
                let allTd = letterBox.querySelectorAll("td");
                for (let x of allTd) {
                    tempArray.push(x.innerText);
                }
                arrayFavorisCharacters = tempArray;
                storageSetArrayLetter();
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
    chrome.storage.sync.set({storageLetter: arrayFavorisCharacters}, function () {
    });
}
