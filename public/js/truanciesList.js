let clickedElementIds = [];

const storedClickedElementIds = localStorage.getItem("clickedElementIds");
if (storedClickedElementIds) {
    clickedElementIds = JSON.parse(storedClickedElementIds);
}

const addIcons = document.querySelectorAll(".add");

document.addEventListener("DOMContentLoaded", () => {
    const clickedElementIdsString = localStorage.getItem("clickedElementIds");
    if (clickedElementIdsString) {
        clickedElementIds = JSON.parse(clickedElementIdsString);
        clickedElementIds.forEach(studentId => {
            addIcons.forEach(icon => {
                if (parseInt(icon.id) === studentId) {
                    icon.classList.replace("fa-plus", "fa-x");
                    icon.classList.replace("text-success", "text-error");
                }
            });
        });
    }
});

addIcons.forEach(addIcon => {
    addIcon.addEventListener("click", function (event) {
        const clickedElementId = parseInt(event.target.id);
        if (!clickedElementIds.includes(clickedElementId)) {
            clickedElementIds.push(clickedElementId);
            event.target.classList.replace("fa-plus", "fa-x");
            event.target.classList.replace("text-success", "text-error");
        } else {
            const indexToRemove = clickedElementIds.indexOf(clickedElementId);
            clickedElementIds.splice(indexToRemove, 1);
            event.target.classList.replace("fa-x", "fa-plus");
            event.target.classList.replace("text-error", "text-success");
        }
        localStorage.setItem("clickedElementIds", JSON.stringify(clickedElementIds));
    });
});
