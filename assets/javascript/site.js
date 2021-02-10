var projects = [
    {"name": "Game Collection", "img":"trivia_game", "link": "https://zekkxx.github.io/games/", "repo": "https://github.com/zekkxx/games"},
    {"name": "LIRI", "img": "liri", "link": "https://github.com/zekkxx/liri", "repo":"https://github.com/zekkxx/liri"},
    {"name": "Bamazon", "img": "bamazon", "link": "https://github.com/zekkxx/bamazon", "repo":"https://github.com/zekkxx/bamazon"},
    {"name": "Giddy App", "img": "giddy_app", "link": "https://giddyapp.herokuapp.com/", "repo":"https://github.com/zekkxx/giddy-app"},
    {"name": "Prota", "img": "prota", "link": "prota.herokuapp.com", "repo":"https://github.com/zekkxx/prota"},
    {"name": "NYT Search App", "img": "nyt_search", "link": "https://zekkxx.github.io/new-york-times-app/", "repo":"https://github.com/zekkxx/new-york-times-app"}
];

function loadProjectSection(){
    const projectSection = document.createElement("section");

    const title = document.createElement("h1");
    title.textContent="Projects"
    
    const description = document.createElement("p");
    description.textContent= "A few of these projects are fully back-end applications, clicking on one of these projects will bring you to the Github repository for the project."
        +"Additionally, due to the constraints of my wallet, the projects hosted by the free tier of Heroku may have a higher than average loading time when selected.";
    
        const breakBar = document.createElement("div");
    breakBar.setAttribute("class", "breakBar");
    
    const projectContent = document.createElement("div");
    projectContent.setAttribute("class", "projectContent")
    projects.forEach(project => {
        const projectContainer = createProjectContainer(project);
        projectContent.appendChild(projectContainer);
    });

    projectSection.appendChild(title);
    projectSection.appendChild(description);
    projectSection.appendChild(breakBar);
    projectSection.appendChild(projectContent)
    document.getElementById("main").appendChild(projectSection);
}

function createProjectContainer(project){
    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("class", "imgContainer");

    const projectLink = document.createElement("a");
    projectLink.setAttribute("target", "_blank");
    projectLink.setAttribute("href", project.link);

    const projectImg = document.createElement("img");
    projectImg.setAttribute("src", "assets/images/projects/"
        + project.img + ".png");
    projectImg.setAttribute("alt", project.name);

    const projectSpan = document.createElement("span");
    projectSpan.setAttribute("class", "imgText");
    projectSpan.textContent = project.name;

    projectLink.appendChild(projectImg);
    projectLink.appendChild(projectSpan);

    projectContainer.appendChild(projectLink);
    return projectContainer;
}

function loadAboutMeSection(){
    const aboutSection = document.createElement("section");
    aboutSection.setAttribute("id", "aboutMe");

    const myImg = document.createElement("img");
    myImg.setAttribute("id", "aboutImg");
    myImg.setAttribute("src", "assets/images/KieranAnthony2.jpg");
    myImg.setAttribute("alt", "Kieran Anthony");

    const title = document.createElement("h1");
    title.textContent="Kieran Anthony"
    
    const breakBar = document.createElement("div");
    breakBar.setAttribute("class", "breakBar");

    const description = document.createElement("p");
    description.textContent= "Full Stack Developer with skills in backend architecture and design. Versed in error prevention, code refinement, and quality assurance testing for multi-platform projects. Effective communicator with strengths in problem solving, lateral and analytical thinking. Proven ability to work collaboratively in a diverse and fast moving environment to deliver solutions at and above project expectations."
    
    const location = document.createElement("p");
    location.textContent= "Based out of Minnesota, I'm currently looking for jobs in and around the Twin Cities Metro Area.";

    const contact = document.createElement("h3");
    contact.setAttribute("class", "centered");
    const contactLink = document.createElement("a");
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
    // This raises the ending point by 75 pixels. Check on this later
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
        for(let i=startY; i<=stopY; i+=step){
            setTimeout("window.scrollTo(0, "+leapY+")", timer*speed);
            leapY += step;
            if(leapY>stopY) leapY=stopY;
            timer++;
        }
        return;
    }
    for(let i=startY; i>=stopY; i-=step){
        setTimeout("window.scrollTo(0, "+leapY+")", timer*speed);
        leapY -= step;
        if(leapY<stopY) leapY=stopY;
        timer++;
    }
}

function applySmoothScrolling(clickTargetID, scrollTargetID){
    document.getElementById(clickTargetID).addEventListener("click", ()=> smoothScroll(scrollTargetID));
}

function onSiteLoaded() {
    loadProjectSection();
    loadAboutMeSection();
    //applyUpdatedSmoothScrolling is semi-functional on Firefox
    applySmoothScrolling("logoLink", "aboutMe");
}

window.onload = onSiteLoaded;