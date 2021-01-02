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

function applyUpdatedSmoothScrolling(){
    document.getElementById("logo-link").addEventListener("click", ()=> smoothScroll("aboutImg"));
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

function loadAboutMeSection(){
    var aboutSection = document.createElement("section");

    var myImg = document.createElement("img");
    myImg.setAttribute("id", "aboutImg");
    myImg.setAttribute("src", "assets/images/KieranAnthony2.jpg");
    myImg.setAttribute("alt", "Kieran Anthony");

    var title = document.createElement("h1");
    title.textContent="Kieran Anthony"
    
    var breakBar = document.createElement("div");
    breakBar.setAttribute("class", "breakBar");

    var description = document.createElement("p");
    description.textContent= "Full Stack Developer with skills in backend architecture and design. Versed in error prevention, code refinement, and quality assurance testing for multi-platform projects. Effective communicator with strengths in problem solving, lateral and analytical thinking. Proven ability to work collaboratively in a diverse and fast moving environment to deliver solutions at and above project expectations."
    
    var location = document.createElement("p");
    location.textContent= "Based out of Minnesota, I'm currently looking for jobs in and around the Twin Cities Metro Area.";

    var contact = document.createElement("h3");
    contact.setAttribute("class", "centered");
    var contactLink = document.createElement("a");
    contactLink.setAttribute("href", "mailto:anthony.kieran.r@gmail.com");
    contactLink.textContent = "Contact me by email";
    contact.appendChild(contactLink);

    aboutSection.appendChild(myImg);
    aboutSection.appendChild(title);
    aboutSection.appendChild(breakBar);
    aboutSection.appendChild(description);
    aboutSection.appendChild(location)
    aboutSection.appendChild(contact);
    document.getElementById("main").appendChild(aboutSection);
}

function onSiteLoaded() {
    loadProjectSection();
    loadAboutMeSection();
    //applyUpdatedSmoothScrolling is semi-functional on Firefox
    applyUpdatedSmoothScrolling();
}

function currentYPosition(){
    // For Firefox, Chrome, Opera, Safari
    if(self.pageYOffset) return self.pageYOffset;
    // IE 6 - standards mode
    if(document.documentElement && document.documentElement.scrollTop){
        return document.documentElement.scrollTop
    }
    // IE 6/7/8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eId){
    const elm=document.getElementById(eId)
    let yPos=elm.offsetTop;
    let node=elm;
    while(node.offsetParent && node.offsetParent != document.body){
        node = node.offsetParent;
        yPos += node.offsetTop;
    }
    return yPos;
}

function smoothScroll(eId){
    const startY = currentYPosition();
    const stopY = elmYPosition(eId);
    const distance = stopY > startY ? stopY-startY : startY-stopY;
    if(distance<100){
        scrollTo(0, stopY);
        return;
    }
    let speed = Math.round(distance/100);
    if(speed>=20) speed=20;
    const step = Math.round(distance/25);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;
    if(stopY>startY){
        for(let i=startY; i<stopY; i+=step){
            setTimeout("window.scrollTo(0, "+leapY+")", timer*speed);
            leapY += step;
            if(leapY>stopY) leapY=stopY;
            timer++;
        }
        return;
    }
    for(let i=startY; i>stopY; i-=step){
        setTimeout("window.scrollTo(0, "+leapY+")", timer*speed);
        leapY -= step;
        if(leapY<stopY) leapY=stopY;
        timer++;
    }
}

window.onload = onSiteLoaded;