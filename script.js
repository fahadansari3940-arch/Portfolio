
// =====================================================
// MOBILE MENU
// =====================================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// Close mobile menu when clicking a link

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.textContent = "☰";

    });

});


// =====================================================
// ACTIVE NAVIGATION
// =====================================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// =====================================================
// BACK TO TOP
// =====================================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================================
// FOOTER YEAR
// =====================================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealElements = document.querySelectorAll(
    ".section-title, .about-text, .stat-card, .skill-card, .project-card, .timeline-item, .contact-box"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


// =====================================================
// TYPING EFFECT
// =====================================================

const roles = [
    "Full Stack Developer",
    "Web Developer",
    "Linux Learner",
    "DevOps Enthusiast",
    "AI Explorer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

const roleElement =
    document.querySelector(".hero h2 strong");


function typeRole() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1800);

            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    const speed = deleting ? 50 : 90;

    setTimeout(typeRole, speed);
}


typeRole();