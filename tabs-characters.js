let ul = document.querySelector("#navbar-tab-character");
let navTabCharacter = ['Alphabet', 'Grec', 'Cyrillique', 'Hebraique', 'Phonetique' , 'Braille' , 'Oghamique' , 'Runique' , 'Thai' , 'Math'];
let arrayTabsCharacters = [];
let arrayArrayCharacters = [];
createNavTabCharacter();
let allCharactersTabs = document.querySelectorAll('*[id^="characters-tab-"]');

let i = 0;

function createNavTabCharacter() {

    for (let nav of navTabCharacter) {
        let li = document.createElement("li");
        li.classList.add("nav-item");
        ul.appendChild(li);
        let a = document.createElement("a");
        a.classList.add("nav-link");
        a.innerText = nav;
        let nameVarInArrayTabsCharacters = window["tabs" + nav + "Characters"];
        let nameVarInArrayArrayCharacters = window["array" + nav + "Characters"];
        console.log(nameVarInArrayArrayCharacters);
        nav = nav.toLowerCase();
        a.id = "characters-tab-" + nav;
        a.href = "#";
        li.appendChild(a);
        nameVarInArrayTabsCharacters = document.querySelector("#" + `${a.id}`);
        arrayTabsCharacters.push(nameVarInArrayTabsCharacters);
        arrayArrayCharacters.push(nameVarInArrayArrayCharacters);
    }
    console.log(arrayArrayCharacters);
    document.querySelector("#characters-tab-alphabet").classList.add("active");
}

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

function removeActiveCharactersTab() {
    for (let content of allCharactersTabs) {
        content.classList.remove("active");
    }
}
