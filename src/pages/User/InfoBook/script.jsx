// const btnLike = document.querySelector('.btn_like_book');

// btnLike.addEventListener('click', () => {
//     console.log('Like book');
// });
const timeCreate = document.querySelectorAll('.title_bold');
console.log(timeCreate);
timeCreate.forEach((item) => {
    const newTime = new Date(item.textContent);
    const formatTime = newTime.toLocaleDateString();
    item.textContent = formatTime;
});
