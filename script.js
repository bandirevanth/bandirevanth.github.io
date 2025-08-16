console.log("Hey fellow developer & visitor! Welcome to my portfolio.");
console.log("Source code (licensed under Apache 2.0) : https://github.com/bandirevanth/bandirevanth.github.io | Feel free to explore! Don't forget to star my repo & give me a follow :)");

window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /*---------Page Loader------------*/
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";;
    }, 600)
})

/*------------------------Toggle Navbar--------------------------*/

const navToggler = document.querySelector(".nav-toggler");
const homeBtn = document.querySelector(".home-btn");

navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
})

homeBtn.addEventListener("click", () => {
    // Go directly to home section
    document.querySelector("section.active").classList.remove("active", "fade-out");
    document.querySelector("#home").classList.add("active");
    requestAnimationFrame(() => window.scrollTo(0, 0));
    
    // If navbar is open, close it
    if(document.querySelector(".header").classList.contains("active")) {
        toggleNavbar();
        document.body.classList.remove("hide-scrolling");
    }
})

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active")
}

/*------------------ Active Section ------------------*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        //activate overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        homeBtn.classList.add("hide");
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        }
        else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            homeBtn.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500)
    }
})

/*------------- About Tabs ---------------*/

const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-items") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})

/* Blog Search Functionality */
document.addEventListener("DOMContentLoaded", function () {
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

/*---------------------Portfolio Item Details Popup-------------------------------*/

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.closest(".portfolio-item"));
    }
})
function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup()
    }
})

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

/* Typing animation - using Typed.js (Credit: https://mattboldt.github.io/typed.js/) */
var typed = new Typed(".typing-text", {
    strings: ["Student", "Nerd", "Future AI Full-stack engineer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 64,
    backDelay: 550,
});
