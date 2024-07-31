window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    var home = document.getElementById('home');

    if (window.scrollY >= home.offsetHeight) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
};