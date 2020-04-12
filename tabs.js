let tabsSetting = document.querySelector("#tab-setting");
let contentTabsSetting = document.querySelector("#content-tab-setting");
let tabsCharacter = document.querySelector("#tab-character");
let contentTabsCharacter = document.querySelector("#content-tab-character");
let tabsDoc = document.querySelector("#tab-doc");
let contentTabsDoc = document.querySelector("#content-tab-doc");
let allContents = document.querySelectorAll('*[id^="content-"]');
let allTabs = document.querySelectorAll('*[id^="tab-"]');

tabsSetting.addEventListener('click', function () {
    removeActiveTab();
    tabsSetting.classList.add("active");
    displayNoneAllContents();
    contentTabsSetting.classList.remove("d-none");
});

tabsCharacter.addEventListener('click', function () {
    removeActiveTab();
    tabsCharacter.classList.add("active");
    displayNoneAllContents();
    contentTabsCharacter.classList.remove("d-none");
});

tabsDoc.addEventListener('click', function () {
    removeActiveTab();
    tabsDoc.classList.add("active");
    displayNoneAllContents();
    contentTabsDoc.classList.remove("d-none");
});

function displayNoneAllContents() {
    for (let content of allContents) {
        content.classList.add("d-none");
    }
}
function removeActiveTab() {
    for (let content of allTabs) {
        content.classList.remove("active");
    }
}
