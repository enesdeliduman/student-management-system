        const selected = document.querySelector("#selected")
selected.addEventListener("change", () => {
    newURL(selected.value)
})
function newURL(value) {
    console.log(window.location)
    let url = new URL(window.location.href);
    newURL = window.location.href = window.location.origin + window.location.pathname + "?filter=" + value
}
