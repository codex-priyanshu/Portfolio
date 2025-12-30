const text = "Frontend Developer | React & Tailwind CSS | Creative UI Builder";
let i = 0;
function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 80);
    }
}
typingEffect();

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function toggleNav() {
    document.querySelector(".nav-links").classList.toggle("show");
}

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 220) {
            sec.classList.add("show");
        }
    });
});