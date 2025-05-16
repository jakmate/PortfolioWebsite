document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(navLink => {
            const navBox = navLink.closest('.nav-box');
            navBox.classList.remove("active");
            if (navLink.getAttribute("href").includes(current)) {
                navBox.classList.add("active");
            }
        });
    });
});