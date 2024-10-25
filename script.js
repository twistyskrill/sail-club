let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');
let articleContents = document.querySelectorAll('.blog-article');
let listButton = document.querySelector('.card-view-button-list');
let gridButton = document.querySelector('.card-view-button-grid');
let cards = document.querySelector('.cards');
let previews = document.querySelectorAll('.preview-list a');
let activePhoto = document.querySelector('.active-photo');


//переключение темы 
darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
};

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
};
//переключение шрифта
serifButton.onclick = function () {
    document.body.classList.add('serif');
    serifButton.classList.add('active');
    sansSerifButton.classList.remove('active');
};

sansSerifButton.onclick = function () {
    document.body.classList.remove('serif');
    sansSerifButton.classList.add('active');
    serifButton.classList.remove('active');
};
//расскрывает текст в ивентах
for (let articleContent of articleContents) {
    let moreButton = articleContent.querySelector('.more');
    moreButton.onclick = function () {
    articleContent.classList.remove('short');
    };
};
//смена раскладки карточек 
listButton.onclick = function () {
    cards.classList.add('list');
    listButton.classList.add('active');
    gridButton.classList.remove('active');
};
gridButton.onclick = function () {
    cards.classList.remove('list');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
};
//переключение картинки + смена отображения активной 
for (let preview of previews) {
    preview.onclick = function(evt) {
        evt.preventDefault()
        let currentActive = document.querySelector('.preview-list .active-item');
        currentActive.classList.remove('active-item');
        preview.classList.add('active-item');
        activePhoto.src = preview.href;
    }
};
