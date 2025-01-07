/*////////////////////////////
// ONSCROLL NAVBAR EDIT DIV //
////////////////////////////*/

window.onscroll = function() {changeNavbar(), currentNavbar()};

// Async to prevent null error from assigning value of element that is not rendered yet
async function changeNavbar() {
    var aboutMeDiv = document.getElementById("about");
    var projectsDiv = document.getElementById("projects");
    var contactDiv = document.getElementById("contact");

    var aboutMeThreshold = aboutMeDiv.offsetTop;
    var projectsThreshold = projectsDiv.offsetTop;
    var contactThreshold = contactDiv.offsetTop;


    // >= because lowest point of second div is === to threshold trigger value
    // about me navbar classes
    if (window.pageYOffset >= aboutMeThreshold && window.pageYOffset < projectsThreshold) {
        document.getElementById("topNavbar").classList.remove("navbar-dark");
        document.getElementById("topNavbar").classList.add("navbar-light");
        document.getElementById("topNavbar").classList.add("bg-light");
    } // projects navbar classes
    else if (window.pageYOffset >= projectsThreshold && window.pageYOffset < contactThreshold){
        document.getElementById("topNavbar").classList.add("navbar-dark");
        document.getElementById("topNavbar").classList.remove("navbar-light");
        document.getElementById("topNavbar").classList.remove("bg-light");
    } // contact navbar classes 
    else if (window.pageYOffset >= contactThreshold) {
        document.getElementById("topNavbar").classList.remove("navbar-dark");
        document.getElementById("topNavbar").classList.add("navbar-light");
        document.getElementById("topNavbar").classList.add("bg-light");
    } // landing page classes
    else { 
        document.getElementById("topNavbar").classList.add("navbar-dark");
        document.getElementById("topNavbar").classList.remove("bg-light");
    }
}

/*/////////////////////////////
// CURRENT NAVBAR ANCHOR DIV //
/////////////////////////////*/
async function currentNavbar() {
    var aboutMeDiv = document.getElementById("about");
    var projectsDiv = document.getElementById("projects");
    var contactDiv = document.getElementById("contact");

    var aboutMeThreshold = aboutMeDiv.offsetTop;
    var projectsThreshold = projectsDiv.offsetTop;
    var contactThreshold = contactDiv.offsetTop;

    // About me anchor
    if (window.pageYOffset >= aboutMeThreshold && window.pageYOffset < projectsThreshold) {
        document.getElementById("navbarAbout").classList.add("navbarUnderline");
        document.getElementById("aboutAnchor").classList.add("currentNavbarAnchor");
        document.getElementById("navbarProjects").classList.remove("navbarUnderline");
        document.getElementById("projectsAnchor").classList.remove("currentNavbarAnchor");
        document.getElementById("projectsAnchor").classList.remove("currentNavbarAnchorWhite");
    } // Projects anchor
    else if (window.pageYOffset >= projectsThreshold && window.pageYOffset < contactThreshold) {
        document.getElementById("navbarProjects").classList.add("navbarUnderline");
        document.getElementById("projectsAnchor").classList.add("currentNavbarAnchor");
        document.getElementById("projectsAnchor").classList.add("currentNavbarAnchorWhite");
        document.getElementById("navbarAbout").classList.remove("navbarUnderline");
        document.getElementById("aboutAnchor").classList.remove("currentNavbarAnchor");
        document.getElementById("navbarContact").classList.remove("navbarUnderline");
        document.getElementById("contactAnchor").classList.remove("currentNavbarAnchor");
    } // Contact anchor
    else if (window.pageYOffset >= contactThreshold) {
        document.getElementById("navbarContact").classList.add("navbarUnderline");
        document.getElementById("contactAnchor").classList.add("currentNavbarAnchor");
        document.getElementById("navbarProjects").classList.remove("navbarUnderline");
        document.getElementById("projectsAnchor").classList.remove("currentNavbarAnchor");
    } // Landing page 
    else {
        document.getElementById("navbarAbout").classList.remove("navbarUnderline");
        document.getElementById("aboutAnchor").classList.remove("currentNavbarAnchor");
    }
}
