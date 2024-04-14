const toggle = document.querySelector("#themeChanger");
const label = document.querySelector("#themeChangerLabel");
const htmlElement = document.querySelector("html");

document.addEventListener("DOMContentLoaded", function () {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
        toggle.checked = false;
        htmlElement.setAttribute("data-theme", "light");
        htmlElement.setAttribute("style", "color-scheme: light");
        label.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        toggle.checked = true;
        htmlElement.setAttribute("data-theme", "dark");
        htmlElement.setAttribute("style", "color-scheme: dark");
        label.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});

toggle.addEventListener("change", function () {
    if (!toggle.checked) {
        htmlElement.setAttribute("data-theme", "light");
        htmlElement.setAttribute("style", "color-scheme: light");
        label.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        localStorage.setItem("theme", "light");
    } else {
        htmlElement.setAttribute("data-theme", "dark");
        htmlElement.setAttribute("style", "color-scheme: dark");
        label.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        localStorage.setItem("theme", "dark");
    }
});
