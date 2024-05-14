const checkboxes = document.querySelectorAll(".checboxAttendance")
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            checkbox.previousElementSibling.firstElementChild.classList.replace("fa-plus", "fa-x");
            checkbox.previousElementSibling.firstElementChild.classList.replace("text-success", "text-error");
        } else {
            checkbox.previousElementSibling.firstElementChild.classList.replace("fa-x", "fa-plus");
            checkbox.previousElementSibling.firstElementChild.classList.replace("text-error", "text-success");
        }
    })
})