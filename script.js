
// =====================================================
// MOBILE NAVBAR
// =====================================================

const menuBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

}


// =====================================================
// CLOSE MOBILE MENU
// =====================================================

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }

    });

});


// =====================================================
// EMAILJS
// =====================================================
// =====================================================
// EMAILJS CONTACT FORM
// =====================================================

// =====================================================
// EMAILJS CONTACT FORM
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("CLOUTÉ: Contact form initializing...");

    if (typeof emailjs === "undefined") {
        console.error("EmailJS library NOT loaded!");
        return;
    }

    // Initialize EmailJS
    emailjs.init({
        publicKey: "u1DFJjHdmcgdLS_rY"
    });

    const contactForm = document.getElementById("contactForm");
    const sendButton = document.getElementById("sendMessageBtn");
    const formStatus = document.getElementById("formStatus");

    if (!contactForm) {
        console.error("Contact form NOT found!");
        return;
    }

    if (!sendButton) {
        console.error("Send button NOT found!");
        return;
    }

    console.log("CLOUTÉ: Contact form ready");


    // =================================================
    // FORM SUBMIT
    // =================================================

    contactForm.addEventListener("submit", function (event) {

        // VERY IMPORTANT
        event.preventDefault();
        event.stopPropagation();

        console.log("CONTACT FORM SUBMITTED");


        // ---------------------------------------------
        // GET VALUES
        // ---------------------------------------------

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();


        // ---------------------------------------------
        // VALIDATION
        // ---------------------------------------------

        if (!name || !email || !message) {

            if (formStatus) {
                formStatus.textContent =
                    "Please fill in all fields.";

                formStatus.className =
                    "form-status error";
            }

            return;
        }


        // ---------------------------------------------
        // EMAIL VALIDATION
        // ---------------------------------------------

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            if (formStatus) {
                formStatus.textContent =
                    "Please enter a valid email address.";

                formStatus.className =
                    "form-status error";
            }

            return;
        }


        // ---------------------------------------------
        // SENDING
        // ---------------------------------------------

        if (formStatus) {

            formStatus.textContent =
                "Sending...";

            formStatus.className =
                "form-status";
        }

        sendButton.disabled = true;


        // ---------------------------------------------
        // EMAILJS SEND
        // ---------------------------------------------

        emailjs.sendForm(
            "service_fxh2m0m",
            "template_l37c1xb",
            contactForm
        )

        .then(function (response) {

            console.log(
                "EMAIL SENT SUCCESSFULLY:",
                response
            );

            if (formStatus) {

                formStatus.textContent =
                    "Message sent successfully! We'll get back to you soon.";

                formStatus.className =
                    "form-status success";
            }

            contactForm.reset();

        })

        .catch(function (error) {

            console.error(
                "EMAILJS ERROR:",
                error
            );

            if (formStatus) {

                formStatus.textContent =
                    "Failed to send message. Please try again.";

                formStatus.className =
                    "form-status error";
            }

        })

        .finally(function () {

            sendButton.disabled = false;

        });

    });

});

// =====================================================
// SMOOTH SCROLL
// =====================================================

function go(sectionId) {

    const target = document.getElementById(sectionId);

    if (!target) {

        console.log("Section not found:", sectionId);

        return;

    }


    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

