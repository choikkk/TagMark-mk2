const dropdownButton = document.getElementById("profile_image");
const dropdownMenu = document.getElementById("dropdown-menu");
const closeButton = document.getElementById("close-button");

dropdownButton.addEventListener("click", () => {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});

closeButton.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
});

document.addEventListener("click", (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
    }
});
