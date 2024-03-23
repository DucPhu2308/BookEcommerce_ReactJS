const select_write = document.querySelector('.header_nav_select_title');
const select_box = document.querySelector('.header_nav_select_body');
const select_icon = document.querySelector('.header_nav_select_title i');

select_write.addEventListener('click', () => {
    if (select_icon.classList.contains('rotate')) {
        select_icon.classList.remove('rotate');
        select_icon.classList.add('rev_rotate');
    } else {
        select_icon.classList.add('rotate');
        select_icon.classList.remove('rev_rotate');
    }
});
select_write.addEventListener('click', () => {
    if (select_box.classList.contains('fade_in')) {
        select_box.classList.remove('fade_in');
        select_box.classList.add('fade_down');
    } else {
        select_box.style.display = 'block';
        select_box.classList.add('fade_in');
        select_box.classList.remove('fade_down');
    }
});




const user = document.querySelector('.header_nav_user');
const icon =document.querySelector('.header_nav_user i')
user.addEventListener('click', () => {
    
    if(icon.classList.contains('rotate')) {
        icon.classList.remove('rotate');
        icon.classList.add('rev_rotate');
    } else {
        icon.classList.add('rotate');
        icon.classList.remove('rev_rotate');
    }
    
});

const user_box= document.querySelector('.header_nav_user_box');
user.addEventListener('click', () => {
    if(user_box.classList.contains('fade_in')) {
        user_box.classList.remove('fade_in');
        user_box.classList.add('fade_down');

    } else {
        user_box.style.display = 'block';
        user_box.classList.add('fade_in');
        user_box.classList.remove('fade_down');
    }
});
user.addEventListener('mouseover', () => {
    console.log('mouse over');
    

});