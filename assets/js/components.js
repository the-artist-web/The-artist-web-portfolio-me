/**
 * mood
 */
const HTML = document.documentElement;
const moodSun = document.querySelectorAll("[data-mood-sun]");
const moodMoon = document.querySelectorAll("[data-mood-moon]");

// localStorage
if (localStorage.length != 0) {
    HTML.dataset.theme = localStorage.theme;

    moodSun.forEach(moodSun => { moodSun.classList.toggle("active", localStorage.getItem("moodSun") === "active"); });

    moodMoon.forEach(moodMoon => { moodMoon.classList.toggle("active", localStorage.getItem("moodMoon") === "active"); });
}

for (let i = 0; i < moodSun.length; i++) {
    moodSun[i].addEventListener("click", () => {
        moodSun[i].classList.add("active");
        moodMoon[i].classList.add("active");
        HTML.dataset.theme = "light";

        localStorage.setItem("theme", "light");
        localStorage.setItem("moodSun", "active");
        localStorage.setItem("moodMoon", "active");
    });

    moodMoon[i].addEventListener("click", () => {
        moodSun[i].classList.remove("active");
        moodMoon[i].classList.remove("active");
        HTML.dataset.theme = "dark";

        localStorage.setItem("theme", "dark");
        localStorage.setItem("moodSun", null);
        localStorage.setItem("moodMoon", null);
    });
};

/**
 * #BACK TOP BTN 
 */
const back_tob_btn = document.querySelector("[data-back-tob-btn]");

window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        back_tob_btn.classList.add("active");
    } else {
        back_tob_btn.classList.remove("active");
    };
});