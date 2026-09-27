// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


// =========================
// CURRENT YEAR
// =========================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formMessage =
            document.getElementById("formMessage");

        formMessage.textContent =
            "Thanks! Your inquiry has been received. We'll get back to you soon.";

        formMessage.style.color = "#087e9e";

        contactForm.reset();

    });

}
