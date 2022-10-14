var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// header liner graydian 
let colorDeg = 0;
var backgroundColorHeader = function () {
    var header = $('.header');
    header.style = `--deg:${colorDeg}deg`;
    colorDeg += 10;
    if (colorDeg == 360) {
        colorDeg = 0;
    }
}
setInterval(backgroundColorHeader, 1000);

// render img 
let index = 1;
var onChange = function () {
    var imgs = ["./css/img/ip-14-5.webp", "./css/img/ip14-8.jpg"]
    document.getElementById('img').src = imgs[index];
    index++;
    if (index == 2) {
        index = 0;
    }
}
setInterval(onChange, 4000);


//js animation video
function animationVideo() {
    let widthScroll = $$('.scrol-item');
    let active = $('.active');
    let listVideo = $$('.video');
    let count = 0;
    function renderVideo() {
        let video = listVideo[count];
        const newWidth = widthScroll[count].offsetWidth;
        const newLeft = widthScroll[count].offsetLeft;
        active.style.width = newWidth + 'px';
        active.style.left = newLeft + 'px';
        $('.video.active-page').classList.remove('active-page');
        video.classList.add('active-page');
        count++;
        if (count == 5) {
            count = 0;
        }
    }
    setInterval(renderVideo, 10000);

    widthScroll.forEach((element, index) => {
        let video = listVideo[index];
        element.onclick = function () {
            const newWidth = this.offsetWidth;
            const newLeft = this.offsetLeft;
            active.style.width = newWidth + 'px';
            active.style.left = newLeft + 'px';

            $('.video.active-page').classList.remove('active-page');
            video.classList.add('active-page');
        }
    });
}
animationVideo();

// js menu 
let clickMenu = $('.mobile-menu');
let listMenu = $('.menu-list');
let closeMenu = $('.close_menu_left');
closeMenu.addEventListener('click', function () {
    if (!(listMenu.style.transform == 'translateX(-100%)')) {
        listMenu.style.transform = 'translateX(-100%)';
        clickMenu.innerHTML = ' <i class="fa-solid fa-bars"></i>'
    }
})
clickMenu.addEventListener('click', function () {
    if ((listMenu.style.transform == 'translateX(-100%)')) {
        listMenu.style.transform = 'translateX(0)'
        clickMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    } else if (!(listMenu.style.transform == 'translateX(-100%)')) {
        listMenu.style.transform = 'translateX(-100%)';
        clickMenu.innerHTML = ' <i class="fa-solid fa-bars"></i>'
    }
});

// js click heart red 
function clickHeart() {
    let listHeart = $$('.fa-solid.fa-heart')
    listHeart.forEach(element => {
        element.onclick = function () {
            this.classList.toggle('red');
        }
    })
}
clickHeart();

// js modal log in

let lognIn = $('.js_lognIn');
let lognUp = $('.js_lognUp');
let modal = $('.modal');
let modalLognUp = $('.modal-lognUp');
let modalLognIn = $('.modal-lognIn');
let btnUp = $('.js-btn-Up');
let btnIn = $('.js-btn-In');

function ShowLogIn() {
    modal.style.display = 'flex';
    modalLognIn.style.display = 'flex';
    modalLognUp.style.display = 'none';
}
function ShowLogUp() {
    modal.style.display = 'flex';
    modalLognUp.style.display = 'flex';
    modalLognIn.style.display = 'none';

}
lognIn.addEventListener('click', ShowLogIn);
lognUp.addEventListener('click', ShowLogUp);
btnUp.addEventListener('click', ShowLogIn);
btnIn.addEventListener('click', ShowLogUp);
modal.addEventListener('click', function () {
    modal.style.display = 'none';
    modalLognUp.style.display = 'none';
    modalLognIn.style.display = 'none';
});
modalLognUp.addEventListener('click', function (e) {
    e.stopPropagation();
})
modalLognIn.addEventListener('click', function (e) {
    e.stopPropagation();
})

// listening even scroll bar  product 

function scrollBar() {
const scrolls = $$('.scroll-box');
const btnLeftIp = $('.js-left-iphone');
const btnRightIP = $('.js-right-iphone');
const btnLeftSS = $('.js-left-samsung')
const btnRightSS = $('.js-right-samsung')

scrolls.forEach((scroll)=>{
    scroll.onscroll = function () {

        console.log(this.scrollLeft);
        if (this.scrollLeft > 24) {
            btnLeftIp.classList.add('btn-active');
            btnLeftSS.classList.add('btn-active');
        } else {
            btnLeftIp.classList.remove('btn-active');
            btnLeftSS.classList.remove('btn-active');
        }
        if (this.scrollLeft == 800  || this.scrollLeft == 1016 || this.scrollLeft == 1356 || this.scrollLeft == 2000) {
            btnRightIP.classList.remove('btn-active');
            btnRightSS.classList.remove('btn-active');
        } else {
    
            btnRightIP.classList.add('btn-active');
            btnRightSS.classList.add('btn-active');
        }
    
    }
})

}
scrollBar();
// footer js

