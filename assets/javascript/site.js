var projects = [
    {"name": "Game Collection", "img":"trivia_game", "link": "https://zekkxx.github.io/games/", "repo": "https://github.com/zekkxx/games"},
    {"name": "Prota", "img": "prota", "link": "https://prota.herokuapp.com", "repo":"https://github.com/zekkxx/prota"}
];

var outsideLinks = [
    {"name": "LinkedIn", "link": "https://www.linkedin.com/in/kieran-anthony-415908b4/"},
    {"name": "Github", "link": "https://github.com/zekkxx"},
    {"name": "Youtube", "link": "https://www.youtube.com/channel/UC3DX7Leok4fRNvY4IXo3MTg/"},
    {"name": "Twitch", "link": "twitch.tv/mizakuma/"}
];

function loadProjectSection() {
    const projectSection = document.createElement("section");

    const title = document.createElement("h1");
    title.textContent="Projects"
    
    const description = document.createElement("p");
    description.textContent= "A small selection of my personal/independent projects.";
    
    const breakBar = document.createElement("div");
    breakBar.setAttribute("class", "breakbar");
    
    const projectContent = document.createElement("div");
    projectContent.setAttribute("class", "project-content")
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

function createProjectContainer(project) {
    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("class", "img-container");

    const projectLink = document.createElement("a");
    projectLink.setAttribute("target", "_blank");
    projectLink.setAttribute("rel", "noreferrer noopener");
    projectLink.setAttribute("href", project.link || project.repo);

    const projectImg = document.createElement("img");
    projectImg.setAttribute("src", "assets/images/projects/"
        + project.img + ".png");
    projectImg.setAttribute("alt", project.name);

    const projectSpan = document.createElement("span");
    projectSpan.setAttribute("class", "img-text");
    projectSpan.textContent = project.name;

    projectLink.appendChild(projectImg);
    projectLink.appendChild(projectSpan);

    projectContainer.appendChild(projectLink);
    return projectContainer;
}

function loadAboutMeSection() {
    const aboutSection = document.createElement("section");
    aboutSection.setAttribute("id", "aboutMe");

    const myImg = document.createElement("img");
    myImg.setAttribute("id", "aboutImg");
    myImg.setAttribute("src", "assets/images/KieranAnthony2.jpg");
    myImg.setAttribute("alt", "Kieran Anthony");

    const title = document.createElement("h1");
    title.textContent="Kieran Anthony"
    
    const breakBar = document.createElement("div");
    breakBar.setAttribute("class", "breakbar");

    const description = document.createElement("p");
    description.textContent= "Full Stack Developer with skills in backend architecture and design. Versed in error prevention, code refinement, and quality assurance testing for multi-platform projects. Effective communicator with strengths in problem solving, lateral and analytical thinking. Proven ability to work collaboratively in a diverse and fast moving environment to deliver solutions at and above project expectations."
    
    const location = document.createElement("p");
    location.textContent= "Based out of Minnesota, I'm currently looking for jobs in and around the Twin Cities Metro Area.";

    const specialLinks = document.createElement("h3");
    specialLinks.setAttribute("class", "centered");

    const contactLink = document.createElement("a");
    contactLink.setAttribute("href", "mailto:anthony.kieran.r@gmail.com");
    contactLink.textContent = "Contact me by email";
    
    const resumeLink = document.createElement("a");
    resumeLink.setAttribute("href", "https://docs.google.com/document/d/1hXVjw8xJ1YroslU6x8WRzVOR65WOAay92RGR-t5AEP8/export?format=pdf");
    resumeLink.setAttribute("download", "Kieran_Anthony-Resume.pdf");
    resumeLink.textContent = "Download my resume";
    
    specialLinks.appendChild(contactLink);
    specialLinks.append(" | ");
    specialLinks.appendChild(resumeLink);

    aboutSection.appendChild(myImg);
    aboutSection.appendChild(title);
    aboutSection.appendChild(breakBar);
    aboutSection.appendChild(description);
    aboutSection.appendChild(location)
    aboutSection.appendChild(specialLinks);
    
    document.getElementById("main").appendChild(aboutSection);
}

function loadFooterSection() {
    outsideLinks.forEach(link => {
        const newLink = document.createElement("a");
        newLink.setAttribute("href", link.link);
        newLink.setAttribute("class", "vert-align-middle no-link-decoration");
        newLink.setAttribute("target", "_blank");
        newLink.setAttribute("rel", "noreferrer noopener");
        newLink.setAttribute("style", "margin: 0 2px");

        const linkImg = document.createElement("img");
        linkImg.setAttribute("src", "assets/images/logos/logo_"+link.name+".png");
        linkImg.setAttribute("alt", link.name+" logo");
        linkImg.setAttribute("height", "25px");

        newLink.appendChild(linkImg);

        document.getElementById("pageFooter").appendChild(newLink);
    });
}

function currentYPosition(){
    // For Firefox, Chrome, Opera, Safari
    if(self.scrollY) return self.scrollY;
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
    loadFooterSection();
    //applyUpdatedSmoothScrolling is semi-functional on Firefox
    applySmoothScrolling("logoLink", "aboutMe");
}

window.onload = onSiteLoaded;