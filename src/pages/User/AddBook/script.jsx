const addImageBook = document.querySelector('.image_form');
const imageTitle =document.querySelector('.image_form span');
addImageBook.addEventListener('click', ()=>{
    //hiện lên file thư mục nếu mà có ảnh rồi thì xóa ảnh đi thêm ảnh mới vào
    const input = document.createElement('input');
    input.type = 'file';
    input.click();
    input.onchange = e =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        //Nếu có ảnh thì xóa ảnh đi
        if(document.querySelector('.design_imageBook')){
            document.querySelector('.design_imageBook').remove();
        }
        reader.onload = function(){
            const dataURL = reader.result;
            const img = document.createElement('img');
            img.classList.add('design_imageBook')
            img.src = dataURL;
            document.querySelector('.image_form').appendChild(img);
        }
        reader.readAsDataURL(file);
        imageTitle.style.display = 'none';
    }

})