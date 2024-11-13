document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer pour les animations d'apparition
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Observer pour tous les éléments fade-in et cards
    document.querySelectorAll('.fade-in, .card').forEach((element) => {
        observer.observe(element);
    });

    // Gestion du menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav a');

    // Toggle menu
    menuToggle.addEventListener('click', function() {
        if (nav.classList.contains('menu-hidden')) {
            nav.classList.remove('menu-hidden');
            nav.classList.add('menu-visible');
            menuToggle.classList.add('menu-open');
        } else {
            nav.classList.remove('menu-visible');
            nav.classList.add('menu-hidden');
            menuToggle.classList.remove('menu-open');
        }
    });

    // Fermer le menu après clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('menu-visible');
            nav.classList.add('menu-hidden');
            menuToggle.classList.remove('menu-open');
        });
    });

    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', function(event) {
        const isClickInside = nav.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInside && nav.classList.contains('menu-visible')) {
            nav.classList.remove('menu-visible');
            nav.classList.add('menu-hidden');
            menuToggle.classList.remove('menu-open');
        }
    });

    // Gestion du bouton CV
    const cvButton = document.getElementById('cvButton');
    if (cvButton) {
        cvButton.addEventListener('click', function() {
            window.open('../Fernandes_Patrick.pdf');
        });
    }
});

// Fonction pour le smooth scroll (optionnel)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});