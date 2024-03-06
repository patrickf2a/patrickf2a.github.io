document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.fade-in').forEach((element) => {
        observer.observe(element);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    var menu = document.querySelector('nav ul');
    if (menu.classList.contains('menu-hidden')) {
        menu.classList.remove('menu-hidden');
        menu.classList.add('menu-visible');
    } else {
        menu.classList.remove('menu-visible');
        menu.classList.add('menu-hidden');
    }
});