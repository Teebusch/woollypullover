
document.addEventListener("DOMContentLoaded", onDOMLoaded, false);



function onDOMLoaded() {
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(e => {
        e.onclick = scrollToSection;
    });
}



function scrollToSection(evt) {
    let target = evt.srcElement.getAttribute("href");
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
    return false;
}



let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
