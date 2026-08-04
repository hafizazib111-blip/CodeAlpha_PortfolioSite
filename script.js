// ======================================
// Portfolio JavaScript
// Muhammad Aazib Shahbaz
// ======================================

// Preloader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => { loader.style.display = "none"; }, 600);
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 0";
        navbar.style.background = "rgba(2,6,23,.95)";
    } else {
        navbar.style.padding = "15px 0";
        navbar.style.background = "rgba(15,23,42,.65)";
    }
});

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (pageYOffset >= top) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") == "#" + current) link.classList.add("active");
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// Counter Animation
const counters = document.querySelectorAll(".counter");
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.innerText);
            let count = 0;
            const update = () => {
                const increment = target / 80;
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count) + "+";
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target + "+";
                }
            };
            update();
            counterObserver.unobserve(counter);
        }
    });
});
counters.forEach(counter => counterObserver.observe(counter));

// Dark / Light Mode
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const icon = themeBtn.querySelector("i");
    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// Back To Top Button
const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Progress Bar Animation
const progressBars = document.querySelectorAll(".progress-bar");
const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const value = bar.style.width;
            bar.style.width = "0";
            setTimeout(() => { bar.style.width = value; }, 300);
            progressObserver.unobserve(bar);
        }
    });
});
progressBars.forEach(bar => progressObserver.observe(bar));

// Project Card Hover
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.02)";
        card.style.transition = ".4s";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// Contact Form Validation
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll("input, textarea");
        let valid = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "2px solid #38bdf8";
            }
        });
        if (valid) {
            alert("✅ Thank you! Your message has been received.");
            form.reset();
        }
    });
}

// Mobile Navbar Close
const navItems = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");
navItems.forEach(item => {
    item.addEventListener("click", () => {
        if (navCollapse.classList.contains("show")) new bootstrap.Collapse(navCollapse).hide();
    });
});

// Scroll Progress Bar
const progress = document.createElement("div");
progress.id = "scroll-progress";
document.body.appendChild(progress);

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progress.style.width = (scrollTop / scrollHeight) * 100 + "%";
});

// Scroll Reveal
const reveals = document.querySelectorAll(".skill-card,.project-card,.experience-card,.timeline-item,.contact-box");
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: .2 });
reveals.forEach(item => revealObserver.observe(item));

// Current Year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Typed.js Hero Animation
new Typed("#typing", {
    strings: ["Frontend Developer", "Software Engineering Student", "Problem Solver"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// Console Message
console.log("%cPortfolio Developed by Muhammad Aazib Shahbaz", "color:#38bdf8;font-size:20px;font-weight:bold;");

