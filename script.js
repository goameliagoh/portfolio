document.addEventListener('DOMContentLoaded', () => {
    // Burger menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero's parallex effect
    document.addEventListener('scroll', function() {
        const hero = document.getElementById('hero');
        const scrollPosition = window.scrollY;
        
        // Apply a parallax effect by adjusting the background position
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
    
    
    // Hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
