console.log("Hey fellow developer & visitor! Welcome to my portfolio.");
console.log("Source code (licensed under Apache 2.0): https://github.com/bandirevanth/bandirevanth.github.io");

window.addEventListener("load", () => {
    const main = document.querySelector(".main");
    const homeSection = document.querySelector(".home-section");
    const loader = document.querySelector(".page-loader");

    main.classList.remove("hidden");
    homeSection.classList.add("active");

    setTimeout(() => loader.style.display = "none", 600);
});

// Elements cached once
const navToggler = document.querySelector(".nav-toggler");
const homeBtn = document.querySelector(".home-btn");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");

// Navbar toggling
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

homeBtn.addEventListener("click", () => {
    document.querySelector("section.active").classList.remove("active", "fade-out");
    document.querySelector("#home").classList.add("active");

    requestAnimationFrame(() => window.scrollTo(0, 0));

    if (header.classList.contains("active")) {
        toggleNavbar();
        document.body.classList.remove("hide-scrolling");
    }
});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
    header.classList.toggle("active");
}

// Navigation click handling
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        overlay.classList.add("active");
        navToggler.classList.add("hide");
        homeBtn.classList.add("hide");

        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }

        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");

            requestAnimationFrame(() => window.scrollTo(0, 0));

            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            homeBtn.classList.remove("hide");
            overlay.classList.remove("active");
        }, 500);
    }
});

// About section tab switching
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-items") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// Blog search
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("blogSearch");
    const blogPosts = document.querySelectorAll(".blog-post");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = this.value.toLowerCase();
            blogPosts.forEach(post => {
                const text = post.innerText.toLowerCase();
                post.style.display = text.includes(query) ? "block" : "none";
            });
        });
    }
});

// Portfolio popup
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        requestAnimationFrame(() => document.querySelector(".portfolio-popup").scrollTo(0, 0));
        portfolioItemDetails(e.target.closest(".portfolio-item"));
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.querySelector(".portfolio-popup.open")) {
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// Typed.js animation
new Typed(".typing-text", {
    strings: ["Student", "Nerd", "Future Tech/AI professional"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 64,
    backDelay: 550,
});
