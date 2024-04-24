var input = document.getElementById('inputFilter');
var list = document.querySelectorAll('.container_admin_option_content_table table tr');
console.log(list);
input.addEventListener('keyup', function () {
    const value = input.value.toLowerCase().trim();
    list.forEach(function (item) {
        if (item.textContent.toLowerCase().includes(value)) {
            item.style.display = 'table-row';
        } else {
            item.style.display = 'none';
        }
    });
});