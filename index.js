
let arrow1 = document.getElementById('arrow1')
let arrow2 = document.getElementById('arrow2')
arrow1?.addEventListener('click', arrowRotate1);
arrow2?.addEventListener('click', arrowRotate2);
function arrowRotate1() {
    if (arrow1.classList.contains('arrow-active')) {
        arrow1.classList.remove('arrow-active')
    }
    else {
        arrow1.classList.add('arrow-active')
    }
}
function arrowRotate2() {
    if (arrow2.classList.contains('arrow-active')) {
        arrow2.classList.remove('arrow-active')
    }
    else {
        arrow2.classList.add('arrow-active')
    }
}

let arrow3 = document.getElementById('arrow3')
let navigation1 = document.getElementById('navigation1')
let navigation2 = document.getElementById('navigation2')
arrow3?.addEventListener('click', arrowRotate3);

function arrowRotate3() {
    if (arrow3.classList.contains('arrow-active')) {
        arrow3.classList.remove('arrow-active')
        navigation1.classList.remove('inactive')
        navigation2.classList.remove('inactive')
    }
    else {
        arrow3.classList.add('arrow-active')
        navigation1.classList.add('inactive')
        navigation2.classList.add('inactive')
    }
}


let arrow4 = document.getElementById('arrow4')
let textarea = document.getElementById('textarea')
let textareaBtn = document.getElementById('textarea-btn')
arrow4?.addEventListener('click', arrowRotate4);

function arrowRotate4() {
    if (arrow4.classList.contains('arrow-active')) {
        arrow4.classList.remove('arrow-active')
        textarea.classList.remove('inactive')
        textareaBtn.classList.remove('inactive')
    }
    else {
        arrow4.classList.add('arrow-active')
        textarea.classList.add('inactive')
        textareaBtn.classList.add('inactive')
    }
}

function init(){
    let map = new ymaps.Map('map', {
        center: [57.626559, 39.893813],
        zoom: 10
    });
    let placemark = new ymaps.Placemark([57.626559, 39.893813], {}, {});
    map.geoObjects.add(placemark);
}

let loader = document.getElementById('loader');
function loaderFn() {
    loader.classList.add('inactive')
}

ymaps.ready(setTimeout(init, 1000));
ymaps.ready(setTimeout(loaderFn, 1000));
