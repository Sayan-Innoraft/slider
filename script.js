let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
    itemActive++;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 3000);
}
prev.onclick = function () {
    itemActive--;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 3000);
}
let refreshInterval = setInterval(() => {
    next.click();
}, 3000);
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 3000);
})
function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}
