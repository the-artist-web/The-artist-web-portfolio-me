/**
 * header
 */
const headerLeft = document.querySelector("[data-header-left]");

window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        headerLeft.classList.add("active");
    } else {
        headerLeft.classList.remove("active");
    };
});

/**
 * tags
 */
const Projects = document.querySelector("[data-Projects]");
const skills = document.querySelector("[data-skills]");
const contact = document.querySelector("[data-contact]");

const list_projects = document.querySelector("[data-list-projects]");
const list_skills = document.querySelector("[data-list-skills]");
const list_contact = document.querySelector("[data-list-contact]");

const push_projects_json = document.querySelector("[data-push-projects-json]");
const push_skills = document.querySelector("[data-push-skills]");
const push_contact = document.querySelector("[data-push-contact]");

/* skill */
let skills_push = `
<div class="skill-box">
    <img src="./assets/image/html.png" alt="html" loading="lazy" class="skill-img img-cover">
    <h1 class="skill-title">html</h1>
</div>
<div class="skill-box">
    <img src="./assets/image/css.png" alt="css" loading="lazy" class="skill-img img-cover">
    <h1 class="skill-title">css</h1>
</div>
<div class="skill-box">
    <img src="./assets/image/bootstrap.png" alt="bootstrap" loading="lazy" class="skill-img img-cover">
    <h1 class="skill-title">bootstrap</h1>
</div>
<div class="skill-box">
    <img src="./assets/image/javaScript.png" alt="javaScript" loading="lazy" class="skill-img img-cover">
    <h1 class="skill-title">java script</h1>
</div>
<div class="skill-box">
    <img src="./assets/image/api.png" alt="api" loading="lazy" class="skill-img img-cover">
    <h1 class="skill-title">api</h1>
</div>
<div class="skill-box">
    <img src="./assets/image/git.png" alt="git" loading="lazy" class="skill-img img-cover">
    <h1 class="skill-title">git</h1>
</div>
<div class="skill-box">
    <img src="./assets/image/github.png" alt="github" loading="lazy" class="skill-img img-cover">
    <h1 class="skill-title">github</h1>
</div>
`;

/* contact */
let contact_push = `
<form action="#">
    <div class="input-box">
        <div class="input-field field">
            <input type="text" placeholder="Full Name" id="name" class="item" autocomplete="off">
            <div class="error-txt">Full Name can't be blank</div>
        </div>
        <div class="input-field field">
            <input type="text" placeholder="Email Address" id="email" class="item" autocomplete="off">
            <div class="error-txt">Email Address can't be blank</div>
        </div>
    </div>

    <div class="input-box">
        <div class="input-field field">
            <input type="text" placeholder="Phone Number" id="phone" class="item" autocomplete="off">
            <div class="error-txt">Phone Number can't be blank</div>
        </div>
        <div class="input-field field">
            <input type="text" placeholder="Subject" id="subject" class="item" autocomplete="off">
            <div class="error-txt">Subject can't be blank</div>
        </div>
    </div>

    <div class="textarea-field field">
        <textarea id="massage" cols="30" rows="10" class="item" placeholder="Your Massage" autocomplete="off"></textarea>
        <div class="error-txt">Massage can't be blank</div>
    </div>

    <button class="btn-contact" data-btn-contact>Send Massage</button>
</form>

<div class="contact-box-list">
    <div class="box-item">
        <i class="fa-solid fa-location-dot"></i>
        <h1>Cairo</h1>
    </div>

    <div class="box-item">
        <i class="fa-solid fa-envelope"></i>
        <h1>mohamedyasserxd449@gamil.com</h1>
    </div>

    <div class="box-item">
        <i class="fa-solid fa-phone"></i>
        <h1>+20 1064710784</h1>
    </div>
</div>
`;

Projects.addEventListener("click", () => {
    Projects.classList.add("active");
    skills.classList.remove("active");
    contact.classList.remove("active");

    list_projects.style.display = "grid";
    list_skills.style.display = "none";
    list_contact.style.display = "none";

    push_skills.innerHTML = "";
    push_contact.innerHTML = "";
    RunningProjects();
});

skills.addEventListener("click", () => {
    skills.classList.add("active");
    Projects.classList.remove("active");
    contact.classList.remove("active");

    list_skills.style.display = "grid";
    list_projects.style.display = "none";
    list_contact.style.display = "none";

    push_projects_json.innerHTML = "";
    push_contact.innerHTML = "";

    list_skills.innerHTML = skills_push;
});

contact.addEventListener("click", () => {
    contact.classList.add("active");
    Projects.classList.remove("active");
    skills.classList.remove("active");

    list_contact.style.display = "grid";
    list_projects.style.display = "none";
    list_skills.style.display = "none";

    push_projects_json.innerHTML = "";
    push_skills.innerHTML = "";

    list_contact.innerHTML = contact_push;

    /**
     * contact
     */
    const btn_contact = document.querySelector("[data-btn-contact]");
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#massage");
    const errorTxt = document.querySelector("#error-txt");
    
    btn_contact.addEventListener("click", () => {
        const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const phoneRegex = /^\d{10}$/;

        let errors = [];
    
        if (name.value.trim().toLowerCase() === "") {
            errors.push("Name cannot be empty");
            name.classList.add("active");
        } else {
            name.classList.remove("active");
            name.value = "";
        }
    
        if (!emailRegex.test(email.value)) {
            errors.push("Invalid email address");
            email.classList.add("active");
        } else {
            email.classList.remove("active");
            email.value = "";
        }
    
        if (!phoneRegex.test(phone.value)) {
            errors.push("Invalid phone number");
            phone.classList.add("active");
        } else {
            phone.classList.remove("active");
            phone.value = "";
        }
    
        if (subject.value.trim() === "") {
            errors.push("Subject cannot be empty");
            subject.classList.add("active");
        } else {
            subject.classList.remove("active");
            subject.value = "";
        }
    
        if (message.value.trim() === "") {
            errors.push("Message cannot be empty");
            message.classList.add("active");
        } else {
            message.classList.remove("active");
            message.value = "";
        }
    
        if (errors.length > 0) {
            errorTxt.textContent = errors.join(", ");
            errorTxt.classList.add("active");
        } else {
            errorTxt.textContent = "";
            errorTxt.classList.remove("active");
        }
    });    
});

/**
 * push projects json
 */
push_projects_json.innerHTML = `
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

function RunningProjects() {
    fetch("./assets/json/data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        push_projects_json.innerHTML = "";

        const itemsPerPage = 11;
        let currentPage = 0;
    
        function displayItems() {
            let start = currentPage * itemsPerPage;
            let end = start + itemsPerPage;
            let items = data.cards.slice(start, end);
    
            items.forEach(item => {
                let skills = '';
                item.skills.forEach(skill => {
                    skills += `<p class="skill-item">${skill}</p>`;
                });
    
                const cardHTML = `
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
                loadMoreButton.insertAdjacentHTML('beforebegin', cardHTML);
            });
    
            currentPage++;
            if (currentPage * itemsPerPage >= data.cards.length) {
                loadMoreButton.style.display = 'none';
            }
        }
    
        push_projects_json.innerHTML = `
            <button class="load-more" data-load-more>
                <i class="fa-solid fa-spinner spinner"></i>
                <span class="span">LOAD MORE</span>
            </button>
        `;
    
        const loadMoreButton = document.querySelector('.load-more');
        loadMoreButton.addEventListener('click', displayItems);
    
        displayItems();

        /**
         * search home
         */
        const home_search = document.querySelector("[data-home-search]");
        const search_header = document.querySelector("[data-search-header]");
        const btn_home_search = document.querySelector("[data-btn-home-search]");
        const btn_search_header = document.querySelector("[data-btn-search-header]");

        const card_box = document.querySelectorAll("[data-card-box]");
        const title_card = document.querySelectorAll("[data-title-card]");

        home_search.addEventListener("keyup", (e) => {
            search_header.value = home_search.value;

            btn_home_search.addEventListener("click", () => {
                for (let i = 0; i < title_card.length; i++) {
                    if (title_card[i].innerHTML.trim().toLowerCase().indexOf(home_search.value.trim().toLowerCase()) >= 0) {
                        card_box[i].style.display = "";
                    } else {
                        card_box[i].style.display = "none";
                    };
                };
                btn_search_header.click();
            });
            if (e.key === "Enter") btn_home_search.click();
        });

        search_header.addEventListener("keyup", (e) => { 
            home_search.value = search_header.value;

            btn_search_header.addEventListener("click", () => {
                for (let i = 0; i < title_card.length; i++) {
                    if (title_card[i].innerHTML.trim().toLowerCase().indexOf(search_header.value.trim().toLowerCase()) >= 0) {
                        card_box[i].style.display = "";
                    } else {
                        card_box[i].style.display = "none";
                    };
                };
                btn_home_search.click();
            });
            if (e.key === "Enter") btn_search_header.click();
        });
    });
};
RunningProjects();