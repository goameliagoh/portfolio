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

    // Scrolling slideshow for project cards
    const projectImages = {
        "project-image-1": [
            "images/jewelleryWebImage1.jpg",
            "images/jewelleryWebImage2.jpg",
            "images/jewelleryWebImage3.jpg",
            "images/jewelleryWebImage4.jpg"
        ],
        "project-image-2": [
            "images/clothingWebImage1.jpg",
            "images/clothingWebImage2.jpg",
            "images/clothingWebImage3.jpg",
            "images/clothingWebImage4.jpg",
            "images/clothingWebImage5.jpg",
            "images/clothingWebImage6.jpg",
            "images/clothingWebImage7.jpg",
            "images/clothingWebImage8.jpg",
            "images/clothingWebImage9.jpg",
            "images/clothingWebImage10.jpg"
        ],
        "project-image-3": [
            "images/educationWebImage1.jpg",
            "images/educationWebImage2.jpg",
            "images/educationWebImage3.jpg",
            "images/educationWebImage4.jpg",
            "images/educationWebImage5.jpg",
            "images/educationWebImage6.jpg",
            "images/educationWebImage7.jpg",
            "images/educationWebImage8.jpg"        
        ], 
        "project-image-4": [
            "images/buildingGameImage1.jpg",
            "images/buildingGameImage2.jpg",
            "images/buildingGameImage3.jpg",
            "images/buildingGameImage4.jpg",
            "images/buildingGameImage5.jpg",    
            "images/buildingGameImage6.jpg",     
            "images/buildingGameImage7.jpg",
            "images/buildingGameImage8.jpg",
            "images/buildingGameImage9.jpg",
            "images/buildingGameImage10.jpg",
            "images/buildingGameImage11.jpg",    
            "images/buildingGameImage12.jpg",   
            "images/buildingGameImage13.jpg",
            "images/buildingGameImage14.jpg",
            "images/buildingGameImage15.jpg",    
            "images/buildingGameImage16.jpg",   
            "images/buildingGameImage17.jpg"
        ]
    };

    document.querySelectorAll('.project-card').forEach(card => {
        let currentIndex = 0;
        const imgElement = card.querySelector('img');
        const prevBtn = card.querySelector('.prev-btn');
        const nextBtn = card.querySelector('.next-btn');
        const imgId = imgElement.id;

        prevBtn.addEventListener('click', function () {
            currentIndex = (currentIndex === 0) ? projectImages[imgId].length - 1 : currentIndex - 1;
            imgElement.src = projectImages[imgId][currentIndex];
        });

        nextBtn.addEventListener('click', function () {
            currentIndex = (currentIndex === projectImages[imgId].length - 1) ? 0 : currentIndex + 1;
            imgElement.src = projectImages[imgId][currentIndex];
        });
    });    
});
