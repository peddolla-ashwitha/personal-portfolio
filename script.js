// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

        if (navLinks) {
            navLinks.classList.remove("show");
        }
    });
});

// Contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you! Your message has been submitted.");

        contactForm.reset();
    });
}

// Current year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}