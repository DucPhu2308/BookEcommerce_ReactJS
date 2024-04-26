const fileInput = document.getElementById('imageFile');
const imageInput = document.getElementById('imageInput');

imageInput.addEventListener('click', function () {
    fileInput.click();
});

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            imageInput.src = reader.result;
        }
        reader.readAsDataURL(file);
    }
    else {
        imageInput.src = "";
    }
});