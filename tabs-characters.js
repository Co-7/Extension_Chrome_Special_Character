let allCharactersTabs = document.querySelectorAll('*[id^="characters-tab-"]');
let tabsAlphabetCharacters = document.querySelector("#characters-tab-alphabet");
let tabsGreekCharacters = document.querySelector("#characters-tab-greek");
let tabsCyrillicCharacters = document.querySelector("#characters-tab-cyrillic");
let arrayTabsCharacters = [tabsAlphabetCharacters, tabsGreekCharacters, tabsCyrillicCharacters];
let arrayArrayCharacters = [arrayAlphabetDefault, arrayGreekCharactersDefault, arrayCyrillicCharactersDefault];
let i = 0;

for (let tabCharacter of arrayTabsCharacters) {
    let j = i;
    tabCharacter.addEventListener('click', function () {
        removeActiveCharactersTab();
        tabCharacter.classList.add("active");
        arraySelect = arrayArrayCharacters[j];
        clearArray();
        makeArray(arraySelect);
        console.log(tabCharacter);
        console.log(arrayArrayCharacters[j]);
        console.log(j);

    });
    i++;
}

function removeActiveCharactersTab() {
    for (let content of allCharactersTabs) {
        content.classList.remove("active");
    }
}
