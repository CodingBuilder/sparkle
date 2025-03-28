"use strict";
function getScrollInfo(section) {
    let sectionOffset = section.offsetTop;
    let sectionHeight = section.offsetHeight;
    let pageHeight = window.innerHeight;
    return sectionOffset + sectionHeight - pageHeight;
}
let statsSection = document.querySelector(".stats");
let stats = document.querySelectorAll(".stats .box .goal");
let scrolled = false;
let skillsSection = document.querySelector(".services .container .bottom");
let skills = document.querySelectorAll(".services .container .bottom .skill .progress span");
window.addEventListener("scroll", () => {
    let skillsScroll = getScrollInfo(skillsSection);
    if (window.scrollY >= skillsScroll + 1500) {
        skills.forEach((skill) => {
            skill.style.width = `${skill.dataset.goal}%`;
        });
    }
    if (!scrolled) {
        let statsScroll = getScrollInfo(statsSection);
        if (window.scrollY >= statsScroll - 100) {
            stats.forEach((state) => {
                count(state);
            });
            scrolled = true;
        }
    }
});
function count(countElement) {
    let goal = Number(countElement.dataset.goal);
    let counter = setInterval(() => {
        let currentValue = parseInt(countElement.textContent || "0");
        countElement.textContent = (currentValue + 1).toString();
        if (Number(countElement.textContent) === goal) {
            clearInterval(counter);
        }
    }, 30);
}
let year = document.querySelector(".year");
year.textContent = new Date().getFullYear().toString();
