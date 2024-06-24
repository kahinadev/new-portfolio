// SIDEBAR 

document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.getElementById("open-sidenav");
    const closeButton = document.getElementById("close-sidenav");
    const sidenav = document.getElementById("sidenav");

    openButton.addEventListener("click", () => {
        sidenav.classList.add("open");
    });

    closeButton.addEventListener("click", () => {
        sidenav.classList.remove("open");
    });

});


// CHANGE BACKGROUND OF THE HEADER

document.addEventListener("scroll", function () {

    const header = document.getElementById("header");
    const sections = document.querySelectorAll(".section");
    let currentSection = null;

    sections.forEach(section => {

        const rect = section.getBoundingClientRect();

        if (rect.top <= 60 && rect.bottom >= 60) {

            currentSection = section;

        }

    });

    if (window.scrollY === 0) {

        header.style.background = "transparent";
        header.classList.remove("light-header");
        header.classList.remove("dark-header");

    } else if (currentSection) {

        if (currentSection.classList.contains("bg-light")) {

            header.classList.add("light-header");
            header.classList.remove("dark-header");
            header.classList.remove("transparent-header");

        } else if (currentSection.classList.contains("bg-dark")) {

            header.classList.add("dark-header");
            header.classList.remove("light-header");
            header.classList.remove("transparent-header");

        } 
    }


}); 
