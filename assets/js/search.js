/**
 * push hero display
 */
const push_search_json = document.querySelector("[data-push-search-json]");

if (push_search_json) {
    push_search_json.innerHTML = `
    <div class="card-box-skeleton">
        <div class="img-skeleton"></div>
        <div class="card-box-body">
            <p class="time-skeleton"></p>
            <h1 class="title-card-skeleton"></h1>
            <div class="skills-list-skeleton">
                <p class="skill-item-skeleton"></p>
                <p class="skill-item-skeleton"></p>
                <p class="skill-item-skeleton"></p>
            </div>
        </div>
    </div>
    `.repeat(9);

    fetch("./assets/json/data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        push_search_json.innerHTML = "";

        const urlParams = new URLSearchParams(window.location.search);
        const search = urlParams.get('search') ? decodeURIComponent(urlParams.get('search')).toLowerCase() : '';
        const tags = urlParams.get('tags') ? decodeURIComponent(urlParams.get('tags')).toLowerCase() : '';

        const filterAndDisplayCards = (filterFunction) => {
            const filteredSurahs = data.cards.filter(filterFunction);

            filteredSurahs.forEach(item => {
                let skills = '';
                item.skills.forEach(skill => {
                    skills += `<p class="skill-item">${skill}</p>`;
                });

                push_search_json.innerHTML += `
                <a href="display.html?search=${item.title}" class="card-box">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" class="img-cover">
                    <div class="card-box-body">
                        <p class="time">
                            <i class="fa-regular fa-clock clock"></i>
                            <span class="span">${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}</span>
                        </p>
                        <h1 class="title-card">${item.title}</h1>
                        <div class="skills-list">
                            ${skills}
                        </div>
                    </div>
                </a>
                `;
            });
        };

        if (search) {
            filterAndDisplayCards(cards => cards.title.toLowerCase().includes(search));
        }
        if (tags) {
            filterAndDisplayCards(cards => cards.skills.some(skill => skill.toLowerCase().includes(tags)));
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
};