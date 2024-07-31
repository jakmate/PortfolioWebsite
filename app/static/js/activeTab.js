document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const navBrands = document.querySelectorAll(".navbar-brand");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
            if (navLink.getAttribute("href").includes(current)) {
                navLink.classList.add("active");
            }
        })
    });
});
