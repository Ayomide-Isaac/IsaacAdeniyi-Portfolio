/* ==========================================
   PROJECT LEGACY
   MODULE 2.1C
   Scroll Reveal & UI Interactions
========================================== */

// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";
        nav.style.flexDirection = "column";

    }

});


// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({

            behavior: "smooth"

        });

        if (window.innerWidth < 900) {

            nav.style.display = "none";

        }

    });

});



/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < triggerBottom) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);



/* ==========================================
   TIMELINE STAGGER EFFECT
========================================== */

const timelineCards = document.querySelectorAll(".timeline-item");

timelineCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.15}s`;

});



/* ==========================================
   NAVBAR BACKGROUND
========================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(8,28,58,.95)";
        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.20)";

    } else {

        navbar.style.background = "rgba(8,28,58,.75)";
        navbar.style.boxShadow = "none";

    }

});



/* ==========================================
   HERO BUTTON ANIMATION
========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});



/* ==========================================
   SCROLL INDICATOR
========================================== */

const indicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {

    if (window.scrollY > 120) {

        indicator.style.opacity = "0";

    } else {

        indicator.style.opacity = "1";

    }

});

/* ==========================================
   FADE-UP SCROLL ANIMATION
========================================== */

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

fadeElements.forEach((element) => {

    observer.observe(element);

});