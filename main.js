const btn = document.querySelector(".btn-nav");
const header = document.querySelector(".header");
btn.addEventListener("click", function () {
    header.classList.toggle("nav-open");
});

// Smooth scrolling
const btnMore = document.querySelector(".btn--more");
const sectionHow = document.querySelector(".section-how");
btnMore.addEventListener("click", function (e) {
    e.preventDefault();
    sectionHow.scrollIntoView({ behavior: "smooth" });
});

// Delegation event
const navContainer = document.querySelector(".header__nav-list");
navContainer.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("header__nav-link")) {
        const id = e.target.getAttribute("href");
        console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});
// Sticky header
const sectionHero = document.querySelector(".section-hero");
const stickyNav = function (entries, observe) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
};
const headerObs = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: "-96px",
});
headerObs.observe(sectionHero);
