/**
 * push hero display
 */
const push_hero_display = document.querySelector("[data-push-hero-display]");
const card_list = document.querySelector("[data-card-list]");

push_hero_display.innerHTML = `
<div class="img-skeleton"></div>

<div class="hero-display-content">
    <p class="description-skeleton text-1"></p>
    <p class="description-skeleton text-2"></p>
    <p class="description-skeleton text-3"></p>
    <p class="description-skeleton text-4"></p>
    <p class="description-skeleton text-5"></p>
    <h3 class="title-display-skeleton"></h3>
    <div class="kills-list">
        <p class="skill-item-skeleton"></p>
        <p class="skill-item-skeleton"></p>
        <p class="skill-item-skeleton"></p>
    </div>
    <h3 class="title-display-skeleton"></h3>
    <div class="link-skeleton"></div>
</div>
`;

fetch("./assets/json/data.json")
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    push_hero_display.innerHTML = "";

    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search') ? decodeURIComponent(urlParams.get('search')).toLowerCase() : '';

    const filteredSurahs = data.cards.filter(cards => cards.title.toLowerCase().includes(search));

    filteredSurahs.forEach(item => {
        let skills = '';
        item.skills.forEach(skill => {
            skills += `<p class="skill-item">${skill}</p>`;
        });

        push_hero_display.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy" class="img-cover">

        <div class="hero-display-content">
            <h3 class="title-display">${item.title}</h3>
            <p class="description">${item.description}</p>
            <h3 class="title-display">skills:</h3>
            <div class="kills-list">${skills}</div>
            <h3 class="title-display">project link:</h3>
            <a href="${item.link}" target="_blank" class="link">${item.link}</a>
        </div>
        `;
    });

    data.cards.forEach(item => {
        let skills = '';
        item.skills.forEach(skill => {
            skills += `<p class="skill-item">${skill}</p>`;
        });

        card_list.innerHTML += `
        <a href="display.html?search=${item.title}" class="card-box" data-card-box>
            <img src="${item.image}" alt="${item.title}" loading="lazy" class="img-cover">
            <div class="card-box-body">
                <p class="time">
                    <i class="fa-regular fa-clock clock"></i>
                    <span class="span">${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}</span>
                </p>
                <h1 class="title-card" data-title-card>${item.title}</h1>
                <div class="skills-list">
                    ${skills}
                </div>
            </div>
        </a>
        `;
    });
});