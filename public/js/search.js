const input = document.querySelector("#search")
const searchButton = document.querySelector("#searchButton")
input.addEventListener("keypress", (event) => {
    if (input.value.trim().length + 1 > 2) {
        searchButton.disabled = false;
    } else {
        searchButton.disabled = true;
    }
})