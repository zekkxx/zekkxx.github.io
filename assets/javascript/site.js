var projects = [
    {"name": "Word Guessing Game", "img": "word_guess_game", "link": "https://zekkxx.github.io/word-guess-game/"},
    {"name": "Memory Game", "img": "memory_game", "link": "https://shielded-ridge-15296.herokuapp.com/"},
    {"name": "Trivia Game", "img": "trivia_game", "link": "https://zekkxx.github.io/trivia-game/"},
    {"name": "Basic Game", "img": "star_wars_game", "link": "https://zekkxx.github.io/basic-game/"},
    {"name": "LIRI", "img": "liri", "link": "https://github.com/zekkxx/liri"},
    {"name": "Bamazon", "img": "bamazon", "link": "https://github.com/zekkxx/bamazon"},
    {"name": "Soccer Fan Central", "img": "soccer_fan_central", "link": "https://iwijetunge.github.io/project1/"},
    {"name": "Giddy App", "img": "giddy_app", "link": "https://cryptic-tor-78469.herokuapp.com/"},
    {"name": "Prota", "img": "prota", "link": "prota.herokuapp.com"},
    {"name": "NYT Search App", "img": "nyt_search", "link": "https://zekkxx.github.io/new-york-times-app/"}
];

function applySmoothScrolling(){
    $("#logo-link").on("click", function(){
        $('html, body').animate({
            scrollTop: $("#aboutImg").offset().top
          }, 800);
    });
}

function loadProjectsToContent(){
    var projectContent = document.getElementById("projectContent");
    for(let i=0; i<projects.length;i++){
        var projectContainer = document.createElement("div");
        projectContainer.setAttribute("class", "imgContainer");

        var projectLink = document.createElement("a");
        projectLink.setAttribute("target", "_blank");
        projectLink.setAttribute("href", projects[i].link);

        var projectImg = document.createElement("img");
        projectImg.setAttribute("src", "assets/images/projects/"
            + projects[i].img + ".png");
        projectImg.setAttribute("alt", projects[i].name);

        var projectSpan = document.createElement("span");
        projectSpan.setAttribute("class", "imgText");
        projectSpan.textContent = projects[i].name;

        projectLink.append(projectImg);
        projectLink.append(projectSpan);

        projectContainer.append(projectLink);

        projectContent.append(projectContainer);
    }
}

function onSiteLoaded() {
    applySmoothScrolling();
    loadProjectsToContent();
}

window.onload = onSiteLoaded;