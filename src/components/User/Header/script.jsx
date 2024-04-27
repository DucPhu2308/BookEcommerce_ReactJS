const inputSearch = document.querySelector(".header_search input");
const keyBox = document.querySelector(".header_search_keybox");
if (inputSearch) {
    inputSearch.addEventListener("focus", () => {
        keyBox.style.display = "block";
    });
    inputSearch.addEventListener("blur", () => {
        keyBox.style.display = "none";
    });
}

inputSearch.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const searchItems = document.querySelectorAll(".header_search_keybox li");
    searchItems.forEach((item) => {
        if (item.textContent.toLowerCase().indexOf(searchValue) > -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});