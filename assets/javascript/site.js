var projects = [
    {"name": "Word Guessing Game", "img": "word_guess_game", "link": "https://zekkxx.github.io/word-guess-game/", "repo":"https://github.com/zekkxx/word-guess-game"},
    {"name": "Memory Game", "img": "memory_game", "link": "https://shielded-ridge-15296.herokuapp.com/", "repo":"https://github.com/zekkxx/memory-game"},
    {"name": "Trivia Game", "img": "trivia_game", "link": "https://zekkxx.github.io/trivia-game/", "repo":"https://github.com/zekkxx/trivia-game"},
    {"name": "Basic Game", "img": "star_wars_game", "link": "https://zekkxx.github.io/basic-game/", "repo":"https://github.com/zekkxx/basic-game"},
    {"name": "LIRI", "img": "liri", "link": "https://github.com/zekkxx/liri", "repo":"https://github.com/zekkxx/liri"},
    {"name": "Bamazon", "img": "bamazon", "link": "https://github.com/zekkxx/bamazon", "repo":"https://github.com/zekkxx/bamazon"},
    {"name": "Giddy App", "img": "giddy_app", "link": "https://giddyapp.herokuapp.com/", "repo":"https://github.com/zekkxx/giddy-app"},
    {"name": "Prota", "img": "prota", "link": "prota.herokuapp.com", "repo":"https://github.com/zekkxx/prota"},
    {"name": "NYT Search App", "img": "nyt_search", "link": "https://zekkxx.github.io/new-york-times-app/", "repo":"https://github.com/zekkxx/new-york-times-app"}
];

function applySmoothScrolling(){
    $("#logo-link").on("click", function(){
        $('html, body').animate({
            scrollTop: $("#aboutImg").offset().top
          }, 800);
    });
}

function loadProjectSection(){
    var projectSection = document.createElement("section");
    var title = document.createElement("h1");
    title.textContent="Projects"
    var description = document.createElement("p");
    description.textContent= "A few of these projects are fully back-end applications, clicking on one of these projects will bring you to the Github repository for the project."
        +"Additionally, due to the constraints of my wallet, the projects hosted by the free tier of Heroku may have a higher than average loading time when selected.";
    var breakBar = document.createElement("div");
    breakBar.setAttribute("class", "breakBar");
    var projectContent = document.createElement("div");
    projectContent.setAttribute("class", "projectContent")
    projects.forEach(project => {
        var projectContainer = createProjectContainer(project);
        projectContent.appendChild(projectContainer);
    });

    projectSection.appendChild(title);
    projectSection.appendChild(description);
    projectSection.appendChild(breakBar);
    projectSection.appendChild(projectContent)
    document.getElementById("main").appendChild(projectSection);
}

function createProjectContainer(project){
    var projectContainer = document.createElement("div");
    projectContainer.setAttribute("class", "imgContainer");

    var projectLink = document.createElement("a");
    projectLink.setAttribute("target", "_blank");
    projectLink.setAttribute("href", project.link);

    var projectImg = document.createElement("img");
    projectImg.setAttribute("src", "assets/images/projects/"
        + project.img + ".png");
    projectImg.setAttribute("alt", project.name);

    var projectSpan = document.createElement("span");
    projectSpan.setAttribute("class", "imgText");
    projectSpan.textContent = project.name;

    projectLink.appendChild(projectImg);
    projectLink.appendChild(projectSpan);

    projectContainer.appendChild(projectLink);
    return projectContainer;
}

function onSiteLoaded() {
    loadProjectSection();
    applySmoothScrolling();
}

window.onload = onSiteLoaded;