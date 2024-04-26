const searchInput = document.querySelector("#search");
const names = document.querySelectorAll(".name");

searchInput.addEventListener("input", filter);

function filter() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    names.forEach(name => {
        const nameValue = name.textContent.trim().toLowerCase();

        if (nameValue.includes(searchTerm)) {
            name.parentElement.classList.remove("hidden");
        } else {
            name.parentElement.classList.add("hidden");
        }
    });
}
