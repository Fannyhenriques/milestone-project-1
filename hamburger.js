const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    console.log("clicked")
    navMenu.classList.toggle('hidden');
});