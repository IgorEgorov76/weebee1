/////////////// Таймер //////////////////

let hour = 0;
let minute = 0;
let second = 0;
let textAll = null; // Переменная для вывода таймера, используется в html3 (200)

function startTimer() {
    let t1 = Math.round(performance.now()/1000);
    second++
    if (t1 % 60 === 0) {
        second = 0
        minute++
        if (minute % 60 === 0) {
            minute = 0
            hour++
        }
    }
}
// Единственное что таймер в первую минуту отстаёт на 2 секунды от реального времени на сайте, но со 2 минуты всё показывает правильно =\
setInterval(startTimer, 1000)

/////////////// Вывод секудомера на странице //////////////////

function timerSecText() {
    if (second < 10)
        document.getElementById('second').innerHTML = `${'0' + second}`
    else {
        document.getElementById('second').innerHTML = second
    }
}
function timerMinText() {
    if (minute < 10)
        document.getElementById('minute').innerHTML = `${'0' + minute}`
    else {
        document.getElementById('minute').innerHTML = minute
    }
}
function timerHourText() {
    if (hour < 10)
        document.getElementById('hour').innerHTML = `${'0' + hour}`
    else {
        document.getElementById('hour').innerHTML = hour
    }
}

/////////////// Вывод нужной страницы в зависимости от location.pathname //////////////////

window.addEventListener('popstate', (event) => {
    if (location.pathname === '/test1/map') {
        clearInterval(textAll);
        btnActive2()
        async function go() {
            await html2();
            await init();
        }
        go();
    }
    else if (location.pathname === '/test1/time') {
        btnActive3();
        html3()
    }
    else {
        clearInterval(textAll);
        btnActive1();
        html1()
    }
})

let activity1 = document.getElementById('activity1')
let map1 = document.getElementById('map1')
let time1 = document.getElementById('time1')
let container = document.querySelector('.spa-container')

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

btn1.addEventListener('click', btnActive1);
btn2.addEventListener('click', btnActive2);
btn3.addEventListener('click', btnActive3);

function btnActive1() {
    if (btn1.classList.contains('header-block__down-button_active')) {}
    else {
        btn1.classList.add('header-block__down-button_active')
        btn2.classList.remove('header-block__down-button_active')
        btn3.classList.remove('header-block__down-button_active')
    }
}
function btnActive2() {
    if (btn2.classList.contains('header-block__down-button_active')) {}
    else {
        btn2.classList.add('header-block__down-button_active')
        btn1.classList.remove('header-block__down-button_active')
        btn3.classList.remove('header-block__down-button_active')
    }
}
function btnActive3() {
    if (btn3.classList.contains('header-block__down-button_active')) {}
    else {
        btn3.classList.add('header-block__down-button_active')
        btn1.classList.remove('header-block__down-button_active')
        btn2.classList.remove('header-block__down-button_active')
    }
}

/////////////// Функции отрисовки страниц по клику //////////////////

async function html1() {
    let text = (await (await fetch('/test1/activity.html')).text());
    container.innerHTML = text;

    let arrow1 = document.getElementById('arrow1')
    let arrow2 = document.getElementById('arrow2')
    arrow1?.addEventListener('click', arrowRotate1);
    arrow2?.addEventListener('click', arrowRotate2);

    function arrowRotate1() {
        if (arrow1.classList.contains('arrow-active')) {
            arrow1.classList.remove('arrow-active')
        } else {
            arrow1.classList.add('arrow-active')
        }
    }

    function arrowRotate2() {
        if (arrow2.classList.contains('arrow-active')) {
            arrow2.classList.remove('arrow-active')
        } else {
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
        } else {
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
        } else {
            arrow4.classList.add('arrow-active')
            textarea.classList.add('inactive')
            textareaBtn.classList.add('inactive')
        }
    }
}
html1();


let routers = {
 '/test1/activity.html' : '/weebee1/activity',
 '/test1/map.html' : '/weebee1/map',
 '/test1/time.html' : '/weebee1/time'
}

activity1.addEventListener('click', function (event) {
    event.preventDefault();
    clearInterval(textAll);
    history.pushState({routers}, '', '/weebee1/activity');
    html1();
})

async function html2() {
    let text = (await (await fetch('/test1/map.html')).text());
    container.innerHTML = text;
}

function init(){
    let map = new ymaps.Map('map', {
        center: [57.626559, 39.893813],
        zoom: 10
    });
    let placemark = new ymaps.Placemark([57.626559, 39.893813], {}, {});
    map.geoObjects.add(placemark);
    let loader = document.getElementById('loader');
    function loaderFn() {
        loader.classList.add('inactive')
    }
    setTimeout(loaderFn, 1000)
}

map1.addEventListener('click', function (event) {
    event.preventDefault();
    clearInterval(textAll);
    history.pushState({routers}, '', '/weebee1/map');
    async function go() {
       await html2();
       await init();
    }
    go();
})

async function html3() {
    let text = (await (await fetch('/test1/time.html')).text());
    container.innerHTML = text;
    textAll = setInterval(function () {
        timerSecText();
        timerMinText();
        timerHourText();
    }, 1000)
}

time1.addEventListener('click', function (event) {
    event.preventDefault();
    history.pushState({routers}, '', '/weebee1/time')
    html3();
})












