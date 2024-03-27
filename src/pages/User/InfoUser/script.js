const btnList= document.querySelectorAll('.container_user_page_body_function_left button');
console.log(btnList);
btnList.forEach((btn) => {
    btn.addEventListener('click', () => {
        btnList.forEach((btn) => {
            btn.classList.remove('activeButton');
        });
        btn.classList.add('activeButton');
    });
});