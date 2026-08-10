
// =========================================================
// CLOUTÉ — PREMIUM ANIMATION ENGINE
// Built specifically for the current CLOUTÉ HTML structure
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    // =====================================================
    // 01. GLOBAL SETTINGS
    // =====================================================

    const body = document.body;
    const header = document.querySelector(".header");

    const navLinks = document.querySelectorAll(
        ".nav-links .nav-link"
    );

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    // =====================================================
    // 02. INJECT PREMIUM ANIMATION STYLES
    // This keeps animation.js self-contained.
    // =====================================================

    const animationStyle =
        document.createElement("style");

    animationStyle.id =
        "cloute-premium-animation-styles";

    animationStyle.textContent = `

        /* ===============================================
           REVEAL SYSTEM
        =============================================== */

        .js-reveal {
            opacity: 0;
            transform: translateY(45px);
            transition:
                opacity 0.9s cubic-bezier(.22,1,.36,1),
                transform 0.9s cubic-bezier(.22,1,.36,1);
            will-change: opacity, transform;
        }

        .js-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }


        .js-reveal-left {
            opacity: 0;
            transform: translateX(-55px);
            transition:
                opacity 0.9s cubic-bezier(.22,1,.36,1),
                transform 0.9s cubic-bezier(.22,1,.36,1);
        }

        .js-reveal-left.revealed {
            opacity: 1;
            transform: translateX(0);
        }


        .js-reveal-right {
            opacity: 0;
            transform: translateX(55px);
            transition:
                opacity 0.9s cubic-bezier(.22,1,.36,1),
                transform 0.9s cubic-bezier(.22,1,.36,1);
        }

        .js-reveal-right.revealed {
            opacity: 1;
            transform: translateX(0);
        }


        /* ===============================================
           HERO ENTRANCE
        =============================================== */

        .hero-loaded .hero-kicker {
            animation:
                clouteFadeUp 0.9s cubic-bezier(.22,1,.36,1)
                0.15s both;
        }

        .hero-loaded .hero-title-line:nth-child(1) {
            animation:
                clouteHeroLine 1s cubic-bezier(.22,1,.36,1)
                0.25s both;
        }

        .hero-loaded .hero-title-line:nth-child(2) {
            animation:
                clouteHeroLine 1s cubic-bezier(.22,1,.36,1)
                0.38s both;
        }

        .hero-loaded .hero-title-line:nth-child(3) {
            animation:
                clouteHeroLine 1s cubic-bezier(.22,1,.36,1)
                0.51s both;
        }

        .hero-loaded .hero-description {
            animation:
                clouteFadeUp 0.9s cubic-bezier(.22,1,.36,1)
                0.68s both;
        }

        .hero-loaded .hero-actions {
            animation:
                clouteFadeUp 0.9s cubic-bezier(.22,1,.36,1)
                0.8s both;
        }

        .hero-loaded .hero-visual {
            animation:
                clouteHeroVisual 1.4s cubic-bezier(.22,1,.36,1)
                0.35s both;
        }


        @keyframes clouteFadeUp {

            from {
                opacity: 0;
                transform: translateY(28px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }

        }


        @keyframes clouteHeroLine {

            from {
                opacity: 0;
                transform:
                    translateY(70px)
                    skewY(3deg);
                filter: blur(8px);
            }

            to {
                opacity: 1;
                transform:
                    translateY(0)
                    skewY(0);
                filter: blur(0);
            }

        }


        @keyframes clouteHeroVisual {

            from {
                opacity: 0;
                transform:
                    scale(.82)
                    rotate(-8deg);
                filter: blur(12px);
            }

            to {
                opacity: 1;
                transform:
                    scale(1)
                    rotate(0);
                filter: blur(0);
            }

        }


        /* ===============================================
           PREMIUM ACTIVE NAVIGATION
        =============================================== */

        .nav-link {
            position: relative;
            transition:
                color .35s ease,
                font-weight .35s ease,
                opacity .35s ease,
                transform .35s ease;
        }


        .nav-link::after {
            content: "";
            position: absolute;

            left: 50%;
            bottom: -9px;

            width: 0;
            height: 2px;

            border-radius: 999px;

            transform:
                translateX(-50%)
                scaleX(.3);

            opacity: 0;

            background:
                linear-gradient(
                    90deg,
                    #8b5cf6,
                    #ec4899
                );

            box-shadow:
                0 0 10px rgba(139,92,246,.55),
                0 0 20px rgba(236,72,153,.25);

            transition:
                width .45s cubic-bezier(.22,1,.36,1),
                transform .45s cubic-bezier(.22,1,.36,1),
                opacity .35s ease;
        }


        .nav-link.active {
            font-weight: 800 !important;
            opacity: 1 !important;

            transform:
                translateY(-1px);

            color: #ffffff !important;

            text-shadow:
                0 0 14px rgba(255,255,255,.14);
        }


        .nav-link.active::after {
            width: 100%;
            opacity: 1;

            transform:
                translateX(-50%)
                scaleX(1);

            animation:
                clouteNavPulse 2.2s ease-in-out infinite;
        }


        @keyframes clouteNavPulse {

            0%,
            100% {
                box-shadow:
                    0 0 8px rgba(139,92,246,.45),
                    0 0 15px rgba(236,72,153,.18);
            }

            50% {
                box-shadow:
                    0 0 14px rgba(139,92,246,.8),
                    0 0 28px rgba(236,72,153,.35);
            }

        }


        /* ===============================================
           ACTIVE NAV TEXT MICRO ANIMATION
        =============================================== */

        .nav-link.active {
            animation:
                clouteNavText .65s
                cubic-bezier(.22,1,.36,1);
        }


        @keyframes clouteNavText {

            0% {
                opacity: .55;
                letter-spacing: .02em;
                transform:
                    translateY(4px)
                    scale(.97);
            }

            60% {
                opacity: 1;
                transform:
                    translateY(-2px)
                    scale(1.035);
            }

            100% {
                opacity: 1;
                transform:
                    translateY(-1px)
                    scale(1);
            }

        }


        /* ===============================================
           APP CARD HOVER
        =============================================== */

        .app-showcase-card {
            transform-style: preserve-3d;
            will-change: transform;
        }


        .app-image-wrap img {
            transition:
                transform .7s cubic-bezier(.22,1,.36,1),
                filter .7s ease;
        }


        .app-showcase-card:hover
        .app-image-wrap img {
            transform:
                scale(1.045)
                translateY(-5px);
        }


        /* ===============================================
           VALUE ROW
        =============================================== */

        .value-row {
            will-change: transform;
            transition:
                transform .45s cubic-bezier(.22,1,.36,1),
                opacity .7s ease;
        }


        .value-row:hover {
            transform:
                translateX(8px);
        }


        /* ===============================================
           FUTURE TIMELINE
        =============================================== */

        .future-item {
            will-change: transform;
            transition:
                transform .45s cubic-bezier(.22,1,.36,1),
                opacity .7s ease;
        }


        .future-item:hover {
            transform:
                translateX(10px);
        }


        /* ===============================================
           BUTTON EFFECT
        =============================================== */

        .primary-btn,
        .nav-cta {
            will-change: transform;
        }


        /* ===============================================
           SCROLL PROGRESS
        =============================================== */

        .cloute-scroll-progress {
            position: fixed;

            top: 0;
            left: 0;

            width: 0;
            height: 3px;

            z-index: 999999;

            pointer-events: none;

            transform-origin: left center;

            background:
                linear-gradient(
                    90deg,
                    #8b5cf6,
                    #ec4899,
                    #8b5cf6
                );

            box-shadow:
                0 0 10px rgba(139,92,246,.65),
                0 0 20px rgba(236,72,153,.25);
        }


        /* ===============================================
           MOBILE ACTIVE NAV
        =============================================== */

        @media (max-width: 900px) {

            .nav-link.active::after {
                display: none;
            }

        }


        /* ===============================================
           REDUCED MOTION
        =============================================== */

        @media (prefers-reduced-motion: reduce) {

            *,
            *::before,
            *::after {
                animation-duration: .01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: .01ms !important;
                scroll-behavior: auto !important;
            }

        }

    `;

    document.head.appendChild(animationStyle);


    // =====================================================
    // 03. PAGE LOADER
    // =====================================================

    const pageLoader =
        document.querySelector("#pageLoader");


    function hidePageLoader() {

        if (!pageLoader) return;

        pageLoader.classList.add("loaded");

        setTimeout(() => {

            pageLoader.style.opacity = "0";
            pageLoader.style.visibility = "hidden";
            pageLoader.style.pointerEvents = "none";

        }, 700);

    }


    window.addEventListener(
        "load",
        () => {

            setTimeout(
                hidePageLoader,
                prefersReducedMotion ? 0 : 500
            );

        }
    );


    // Fallback
    setTimeout(
        hidePageLoader,
        2500
    );


    // =====================================================
    // 04. HERO LOAD ANIMATION
    // =====================================================

    const hero =
        document.querySelector(".hero");


    if (hero) {

        requestAnimationFrame(() => {

            setTimeout(() => {

                hero.classList.add(
                    "hero-loaded"
                );

            }, prefersReducedMotion ? 0 : 150);

        });

    }


    // =====================================================
    // 05. SCROLL REVEAL
    // =====================================================

    const revealElements =
        document.querySelectorAll(`
            .reveal,
            .reveal-text,
            .section-intro,
            .about-heading,
            .stats-grid,
            .safety-heading,
            .safety-item,
            .founder-visual,
            .founder-content,
            .apps-heading,
            .app-showcase-card,
            .mission-heading,
            .mission-card,
            .values-heading,
            .value-row,
            .future-heading,
            .future-item,
            .future-cta,
            .contact-content,
            .contact-form-wrapper
        `);


    revealElements.forEach((element) => {

        if (
            !element.classList.contains(
                "js-reveal"
            )
        ) {

            element.classList.add(
                "js-reveal"
            );

        }

    });


    if (prefersReducedMotion) {

        revealElements.forEach((element) => {

            element.classList.add(
                "revealed"
            );

        });

    } else {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting)
                            return;


                        const element =
                            entry.target;


                        const delay =
                            element.dataset.delay ||
                            "0";


                        element.style.transitionDelay =
                            `${delay}ms`;


                        element.classList.add(
                            "revealed"
                        );


                        observer.unobserve(
                            element
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -70px 0px"
                }
            );


        revealElements.forEach(
            (element, index) => {

                /*
                 * Small stagger effect.
                 * It prevents the entire section
                 * from appearing at once.
                 */

                const parent =
                    element.parentElement;


                if (
                    parent &&
                    (
                        parent.classList.contains(
                            "app-showcase"
                        ) ||
                        parent.classList.contains(
                            "values-list"
                        ) ||
                        parent.classList.contains(
                            "future-timeline"
                        ) ||
                        parent.classList.contains(
                            "safety-list"
                        ) ||
                        parent.classList.contains(
                            "mission-grid"
                        )
                    )
                ) {

                    element.dataset.delay =
                        Math.min(
                            index * 80,
                            420
                        );

                }


                revealObserver.observe(
                    element
                );

            }
        );

    }


    // =====================================================
    // 06. SPECIAL LEFT / RIGHT REVEALS
    // =====================================================

    const leftElements =
        document.querySelectorAll(`
            .reveal-left,
            .founder-visual,
            .contact-content,
            .safety-heading
        `);


    const rightElements =
        document.querySelectorAll(`
            .reveal-right,
            .founder-content,
            .contact-form-wrapper,
            .safety-item
        `);


    leftElements.forEach((element) => {

        element.classList.add(
            "js-reveal-left"
        );

        element.classList.remove(
            "js-reveal"
        );

    });


    rightElements.forEach((element) => {

        element.classList.add(
            "js-reveal-right"
        );

        element.classList.remove(
            "js-reveal"
        );

    });


    if (!prefersReducedMotion) {

        const directionalObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting)
                            return;


                        entry.target.classList.add(
                            "revealed"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -60px 0px"
                }
            );


        leftElements.forEach(
            element =>
                directionalObserver.observe(
                    element
                )
        );


        rightElements.forEach(
            element =>
                directionalObserver.observe(
                    element
                )
        );

    } else {

        leftElements.forEach(
            element =>
                element.classList.add(
                    "revealed"
                )
        );

        rightElements.forEach(
            element =>
                element.classList.add(
                    "revealed"
                )
        );

    }


    // =====================================================
    // 07. ACTIVE NAVIGATION
    // =====================================================

    function setActiveNav(sectionId) {

        if (!sectionId) return;


        navLinks.forEach((link) => {

            const target =
                link.getAttribute("href");


            const isActive =
                target === `#${sectionId}`;


            link.classList.toggle(
                "active",
                isActive
            );


            if (isActive) {

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            } else {

                link.removeAttribute(
                    "aria-current"
                );

            }

        });

    }


    function updateActiveNavigation() {

        if (!sections.length) return;


        const headerHeight =
            header
                ? header.offsetHeight
                : 90;


        /*
         * This point represents the area
         * where the user is currently reading.
         */

        const activationPoint =
            window.scrollY +
            headerHeight +
            (window.innerHeight * 0.25);


        let currentSection =
            sections[0].id;


        sections.forEach((section) => {

            const top =
                section.offsetTop;

            const bottom =
                top +
                section.offsetHeight;


            if (
                activationPoint >= top &&
                activationPoint < bottom
            ) {

                currentSection =
                    section.id;

            }

        });


        setActiveNav(
            currentSection
        );

    }


    let navTicking = false;


    function requestNavUpdate() {

        if (navTicking) return;

        navTicking = true;


        requestAnimationFrame(() => {

            updateActiveNavigation();

            navTicking = false;

        });

    }


    window.addEventListener(
        "scroll",
        requestNavUpdate,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        requestNavUpdate
    );


    updateActiveNavigation();


    // =====================================================
    // 08. SMOOTH SCROLL
    // =====================================================

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const id =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !id ||
                        id === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            id
                        );


                    if (!target) return;


                    event.preventDefault();


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 80;


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerHeight +
                        2;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            prefersReducedMotion
                                ? "auto"
                                : "smooth"

                    });


                    /*
                     * Immediately update active
                     * navigation for better UX.
                     */

                    setActiveNav(
                        target.id
                    );

                }
            );

        });


    // =====================================================
    // 09. NAVBAR SCROLL EFFECT
    // =====================================================

    function updateHeader() {

        if (!header) return;


        header.classList.toggle(
            "scrolled",
            window.scrollY > 40
        );

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();


    // =====================================================
    // 10. APP CARD 3D HOVER
    // =====================================================

    const appCards =
        document.querySelectorAll(
            ".app-showcase-card"
        );


    if (!prefersReducedMotion) {

        appCards.forEach((card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    if (
                        window.innerWidth < 900
                    ) return;


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        ((y - centerY) /
                            centerY) * -2.5;


                    const rotateY =
                        ((x - centerX) /
                            centerX) * 2.5;


                    card.style.transform =
                        `
                        perspective(1200px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-7px)
                        scale(1.008)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

    }


    // =====================================================
    // 11. MISSION CARD 3D HOVER
    // =====================================================

    const missionCards =
        document.querySelectorAll(
            ".mission-card"
        );


    if (!prefersReducedMotion) {

        missionCards.forEach((card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    if (
                        window.innerWidth < 900
                    ) return;


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateY =
                        (
                            (x -
                                rect.width / 2) /
                            rect.width
                        ) * 4;


                    const rotateX =
                        (
                            (y -
                                rect.height / 2) /
                            rect.height
                        ) * -4;


                    card.style.transform =
                        `
                        perspective(1200px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-7px)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

    }


    // =====================================================
    // 12. FOUNDER IMAGE PARALLAX
    // =====================================================

    const founderSection =
        document.querySelector(
            ".founder-section"
        );


    const founderImage =
        document.querySelector(
            ".founder-image img"
        );


    if (
        founderSection &&
        founderImage &&
        !prefersReducedMotion
    ) {

        let founderTicking = false;


        function updateFounderParallax() {

            if (founderTicking)
                return;


            founderTicking = true;


            requestAnimationFrame(() => {

                const rect =
                    founderSection
                        .getBoundingClientRect();


                if (
                    rect.bottom > 0 &&
                    rect.top <
                    window.innerHeight
                ) {

                    const progress =
                        (
                            window.innerHeight -
                            rect.top
                        ) /
                        (
                            window.innerHeight +
                            rect.height
                        );


                    const movement =
                        (
                            progress -
                            0.5
                        ) * -25;


                    founderImage.style.transform =
                        `
                        translateY(
                            ${movement}px
                        )
                        `;

                }


                founderTicking = false;

            });

        }


        window.addEventListener(
            "scroll",
            updateFounderParallax,
            {
                passive: true
            }
        );

    }


    // =====================================================
    // 13. HERO MOUSE PARALLAX
    // =====================================================

    if (
        hero &&
        window.innerWidth > 1000 &&
        !prefersReducedMotion
    ) {

        const heroTitle =
            hero.querySelector(
                ".hero-title"
            );


        const heroDescription =
            hero.querySelector(
                ".hero-description"
            );


        const heroVisual =
            hero.querySelector(
                ".hero-visual"
            );


        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;


        document.addEventListener(
            "mousemove",
            (event) => {

                mouseX =
                    (
                        event.clientX /
                        window.innerWidth -
                        0.5
                    );


                mouseY =
                    (
                        event.clientY /
                        window.innerHeight -
                        0.5
                    );

            }
        );


        function animateHeroParallax() {

            currentX +=
                (
                    mouseX * 1.2 -
                    currentX
                ) * 0.06;


            currentY +=
                (
                    mouseY * 1.2 -
                    currentY
                ) * 0.06;


            if (heroTitle) {

                heroTitle.style.transform =
                    `
                    translate(
                        ${currentX * 7}px,
                        ${currentY * 7}px
                    )
                    `;

            }


            if (heroDescription) {

                heroDescription.style.transform =
                    `
                    translate(
                        ${currentX * 3}px,
                        ${currentY * 3}px
                    )
                    `;

            }


            if (heroVisual) {

                heroVisual.style.transform =
                    `
                    translate(
                        ${currentX * -10}px,
                        ${currentY * -10}px
                    )
                    `;

            }


            requestAnimationFrame(
                animateHeroParallax
            );

        }


        animateHeroParallax();

    }


    // =====================================================
    // 14. MAGNETIC BUTTONS
    // =====================================================

    const magneticElements =
        document.querySelectorAll(
            ".primary-btn, .nav-cta, .text-btn"
        );


    if (!prefersReducedMotion) {

        magneticElements.forEach(
            (element) => {

                element.addEventListener(
                    "mousemove",
                    (event) => {

                        if (
                            window.innerWidth < 900
                        ) return;


                        const rect =
                            element
                                .getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left -
                            rect.width / 2;


                        const y =
                            event.clientY -
                            rect.top -
                            rect.height / 2;


                        element.style.transform =
                            `
                            translate(
                                ${x * 0.10}px,
                                ${y * 0.10}px
                            )
                            `;

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        element.style.transform =
                            "";

                    }
                );

            }
        );

    }


    // =====================================================
    // 15. APP STAGGER
    // =====================================================

    document
        .querySelectorAll(
            ".app-showcase-card"
        )
        .forEach(
            (card, index) => {

                card.dataset.delay =
                    index * 100;

            }
        );


    // =====================================================
    // 16. VALUE ROW STAGGER
    // =====================================================

    document
        .querySelectorAll(
            ".value-row"
        )
        .forEach(
            (row, index) => {

                row.dataset.delay =
                    index * 100;

            }
        );


    // =====================================================
    // 17. FUTURE ITEM STAGGER
    // =====================================================

    document
        .querySelectorAll(
            ".future-item"
        )
        .forEach(
            (item, index) => {

                item.dataset.delay =
                    index * 80;

            }
        );


    // =====================================================
    // 18. STATS COUNTER
    // =====================================================

    const statNumbers =
        document.querySelectorAll(
            ".stat-number[data-count]"
        );


    if (!prefersReducedMotion) {

        const statsObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) return;


                            const element =
                                entry.target;


                            const target =
                                parseInt(
                                    element.dataset.count,
                                    10
                                );


                            if (
                                Number.isNaN(
                                    target
                                )
                            ) {

                                observer.unobserve(
                                    element
                                );

                                return;

                            }


                            const duration =
                                1300;


                            const startTime =
                                performance.now();


                            function animateCounter(
                                currentTime
                            ) {

                                const progress =
                                    Math.min(
                                        (
                                            currentTime -
                                            startTime
                                        ) /
                                        duration,
                                        1
                                    );


                                const eased =
                                    1 -
                                    Math.pow(
                                        1 -
                                        progress,
                                        3
                                    );


                                const current =
                                    Math.floor(
                                        target *
                                        eased
                                    );


                                element.textContent =
                                    current;


                                if (
                                    progress < 1
                                ) {

                                    requestAnimationFrame(
                                        animateCounter
                                    );

                                } else {

                                    element.textContent =
                                        target;

                                }

                            }


                            requestAnimationFrame(
                                animateCounter
                            );


                            observer.unobserve(
                                element
                            );

                        }
                    );

                },
                {
                    threshold: 0.6
                }
            );


        statNumbers.forEach(
            number =>
                statsObserver.observe(
                    number
                )
        );

    }


    // =====================================================
    // 19. SCROLL PROGRESS BAR
    // =====================================================

    const progressBar =
        document.createElement(
            "div"
        );


    progressBar.className =
        "cloute-scroll-progress";


    body.appendChild(
        progressBar
    );


    function updateScrollProgress() {

        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight;


        const viewportHeight =
            window.innerHeight;


        const totalScrollable =
            documentHeight -
            viewportHeight;


        const progress =
            totalScrollable > 0
                ? (
                    scrollTop /
                    totalScrollable
                ) * 100
                : 0;


        progressBar.style.width =
            `${progress}%`;

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        {
            passive: true
        }
    );


    updateScrollProgress();


    // =====================================================
    // 20. MOBILE MENU
    // =====================================================

    const menuToggle =
        document.querySelector(
            "#menuToggle"
        );


    const mobileMenu =
        document.querySelector(
            "#mobileMenu"
        );


    if (
        menuToggle &&
        mobileMenu
    ) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.classList.toggle(
                        "open"
                    );


                menuToggle.classList.toggle(
                    "active",
                    isOpen
                );


                body.classList.toggle(
                    "no-scroll",
                    isOpen
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "open"
                        );


                        menuToggle.classList.remove(
                            "active"
                        );


                        body.classList.remove(
                            "no-scroll"
                        );


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    // =====================================================
    // 21. ESCAPE KEY
    // =====================================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                mobileMenu &&
                menuToggle
            ) {

                mobileMenu.classList.remove(
                    "open"
                );


                menuToggle.classList.remove(
                    "active"
                );


                body.classList.remove(
                    "no-scroll"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    // =====================================================
    // 22. NOTIFY ME
    // =====================================================

    window.notifyMe = function () {

        const emailInput =
            document.getElementById(
                "csEmail"
            );


        const success =
            document.getElementById(
                "csSuccess"
            );


        if (
            !emailInput ||
            !success
        ) {

            return;

        }


        const email =
            emailInput.value.trim();


        if (!email) {

            emailInput.focus();

            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(
                email
            )
        ) {

            emailInput.focus();

            return;

        }


        success.style.display =
            "block";


        success.style.opacity =
            "0";


        success.style.transform =
            "translateY(10px)";


        requestAnimationFrame(() => {

            success.style.transition =
                "all .4s cubic-bezier(.22,1,.36,1)";


            success.style.opacity =
                "1";


            success.style.transform =
                "translateY(0)";

        });


        emailInput.value = "";


        setTimeout(() => {

            success.style.opacity =
                "0";


            success.style.transform =
                "translateY(-10px)";


            setTimeout(() => {

                success.style.display =
                    "none";

            }, 400);

        }, 4000);

    };


    // =====================================================
    // 23. REFRESH / LOAD ACTIVE NAV
    // =====================================================

    window.addEventListener(
        "load",
        () => {

            setTimeout(
                updateActiveNavigation,
                100
            );

        }
    );


    // =====================================================
    // 24. FINAL INITIALIZATION
    // =====================================================

    console.log(
        "CLOUTÉ — Premium animation system initialized."
    );

});

