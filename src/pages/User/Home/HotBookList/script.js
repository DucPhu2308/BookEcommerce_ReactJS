const listBook = document.querySelector('.container_nav_1_listBooks_box')
const books = document.querySelectorAll('.container_nav_1_listBooks_box li')
const dots = document.querySelectorAll('.circle')
const btnPre = document.querySelector('.btn_nav_1_listBooks.left')
const btnNext = document.querySelector('.btn_nav_1_listBooks.right')
let active = 0;
let length = books.length - 1;

btnNext.onclick = function () {
    if (active + 3 > length) {
        active = 0;
    }
    else {
        active += 3;
    }
    reloadSlide();
}
btnPre.onclick = function () {
    if (active - 3 < 0) {
        active = length - 1;
    }
    else {
        active -= 3;
    }
    reloadSlide();
}
let refreshSlide = setInterval(() => { btnNext.click() }, 5000);
function reloadSlide() {
    let checkLeft = books[active].offsetLeft;
    checkLeft = checkLeft - 70;
    listBook.style.left = -checkLeft + 'px';

    let activeDot = document.querySelector('.circle.been');
    activeDot.classList.remove('been');
    dots[active / 3].classList.add('been');

    clearInterval(refreshSlide);
    refreshSlide = setInterval(() => { btnNext.click() }, 5000);
}

dots.forEach((dot, index) => {
    dot.onclick = function () {
        let activeDot = document.querySelector('.circle.been');
        activeDot.classList.remove('been');
        dot.classList.add('been');
        active = index * 3;
        reloadSlide();
    }
})