/**
 * overflow
 */
const overflow = document.querySelector("[data-overflow]");

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

/**
 * search header and search mobile
 */
const btn_mobile_search_show = document.querySelector("[data-btn-mobile-search-show]");
const search_mobile_dad = document.querySelector("[data-search-mobile-dad]");
const search_mobile = document.querySelector("[data-search-mobile]");
const btn_search_mobile = document.querySelector("[data-btn-search-mobile]");

const search_header = document.querySelector("[data-search-header]");
const btn_search_header = document.querySelector("[data-btn-search-header]");

// search mobile
btn_mobile_search_show.addEventListener("click", () => {
    search_mobile_dad.classList.toggle("active");
    overflow.classList.toggle("active");
    search_mobile.classList.toggle("active");
});

overflow.addEventListener("click", () => {
    search_mobile_dad.classList.toggle("active");
    overflow.classList.toggle("active");
    search_mobile.classList.toggle("active");
});

btn_search_mobile.addEventListener("click", () => { if (search_mobile.value) window.location = `search.html?search=${search_mobile.value.trim().toLowerCase()}`; });

search_mobile.addEventListener("keydown", (e) => { if (e.key === "Enter") btn_search_mobile.click(); });

// search header
btn_search_header.addEventListener("click", () => { if (search_header.value) window.location = `search.html?search=${search_header.value.trim().toLowerCase()}`; });

search_header.addEventListener("keydown", (e) => { if (e.key === "Enter") btn_search_header.click(); });