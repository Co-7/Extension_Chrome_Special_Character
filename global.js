//Variable
let valueBgColor;
let valueTextColor;
let letterBox = document.querySelector('#letter-box');
let arrayLetter = [];
let arrayGreekCharacters = [];
let arrayCyrillicCharacters = [];
let arrayHebrewCharacters = [];
let arrayPhoneticCharacters = [];
let arrayBrailleCharacter = [];
let arrayOghamCharacters = [];
let arrayRunesCharacters = [];
let arrayThaiCharacters = [];
let arrayMathCharacters = [];

//Variable Default Value
let valueBgColorDefault = "#4b4b4b";
let valueTextColorDefault = "#ffffff";
let arrayLetterDefault = ["À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Œ", "Š", "þ", "Ù", "Ú", "Û", "Ü", "Ý", "Ÿ"];
let arrayGreekCharactersDefault = ["α", "Α", "β", "Β", "γ", "Γ", "ε", "ϵ", "θ", "ϑ", "κ", "ϰ", "π", "ϖ", "ρ", "ϱ", "σ", "ς", "ϕ", "φ", "ω", "Ω", "℧", "ϝ", "Ϝ"];
let arrayCyrillicCharactersDefault = ["Ѐ", "Ё", "Ђ", "Ѓ", "Є", "Ѕ", "І", "Ї", "Ј", "Љ", "Њ"];
let arrayPhoneticCharactersDefault = ["ɐ", "ɑ", "ɒ", "ɓ", "ɔ", "ɕ", "ɖ", "ɗ", "ɘ", "ə", "ɚ"];
let arrayBrailleCharacterDefault = ["⠀", "⠁", "⠂", "⠃", "⠄", "⠅", "⠆", "⠇"];
let arrayOghamCharactersDefault = [" ", "ᚁ", "ᚂ", "ᚃ", "ᚄ", "ᚅ", "ᚆ", "ᚇ", "ᚈ", "ᚉ", "ᚊ", "ᚋ", "ᚌ", "ᚍ", "ᚎ", "ᚏ", "ᚐ", "ᚑ", "ᚒ", "ᚓ", "ᚔ", "ᚕ", "ᚖ", "ᚗ", "ᚘ", "ᚙ", "ᚚ", "᚛", "᚜"];
let arrayRunesCharactersDefault = ["ᚠ", "ᚡ", "ᚢ", "ᚣ", "ᚤ", "ᚥ", "ᚦ", "ᚧ", "ᚨ", "ᚩ", "ᚪ", "ᚫ"];
let arrayThaiCharactersDefault = ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช"];
let arrayMathCharactersDefault = ["¼", "½", "¾", "↉", "⅓", "⅔", "⅕", "⅖", "⅗", "⅘", "⅙", "⅚", "⅛", "⅜", "⅝", "⅞", "⅟", "⅐", "⅑", "⅒", "Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ", "Ⅺ", "Ⅻ", "Ⅼ", "Ⅽ", "Ⅾ", "Ⅿ", "ↀ", "ↁ", "ↂ", "Ↄ", "ↇ", "ↈ", "ⅰ", "ⅱ", "ⅲ", "ⅳ", "ⅴ", "ⅵ", "ⅶ", "ⅷ", "ⅸ", "ⅹ", "ⅺ", "ⅻ", "ⅼ", "ⅽ", "ⅾ", "ⅿ", "ↄ", "ℂ", "ℍ", "ℕ", "ℙ", "ℚ", "ℝ", "ℤ", "∅"];

//Function For Clear Array in HTML
function clearArray() {
    let tr = document.querySelectorAll('tr');
    for (let i = 0; i < tr.length; i++) {
        letterBox.removeChild(tr[i]);
    }
}

function makeArray() {
    let nb = Math.ceil(arrayLetter.length) / numberLetterByLine;
    for (let i = nb; i > 0; i--) {
        let tr = document.createElement('tr');
        letterBox.appendChild(tr);
    }
    let j = 0;
    let y = 0;
    for (let letter of arrayLetter) {

        if (j === numberLetterByLine) {
            y++;
            j = 0;
        }
        j++;
        let tr = document.querySelectorAll('tr')[y];
        let td = document.createElement('td');
        td.addEventListener('click', function () {
            let textarea = document.createElement("textarea");
            textarea.value = this.textContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        });
        td.textContent = letter;
        tr.appendChild(td);
    }
}

function setValueVariable(result) {
    valueBgColor = result.storageBgColor === undefined ? valueBgColorDefault : result.storageBgColor;
    valueTextColor = result.storageTextColor === undefined ? valueTextColorDefault : result.storageTextColor;
    arrayLetter = result.storageLetter === undefined || result.storageLetter.length === 0 ? arrayLetterDefault : result.storageLetter;
}
