let mobileNavBtn = document.getElementById("mobileNavBtn")
let navMenu = document.getElementById("navMenu");
let navClose = document.getElementById("navClose");

mobileNavBtn.addEventListener("click", toggleActive);
navClose.addEventListener("click", toggleActive);

function toggleActive() {
    console.log("hello");
    navMenu.classList.toggle("active");
}