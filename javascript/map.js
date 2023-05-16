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
