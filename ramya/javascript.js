// Typed.js dynamic text effect
var typed = new Typed(".text", {
    strings: ["Student", "Machine Learning Enthusiast", "NCC Cadet"],
    typeSpeed: 100,  // Speed of typing each letter (in milliseconds)
    backSpeed: 50,   // Speed of deleting each letter (in milliseconds)
    loop: true       // Loop the animation
});

// Log clicks on social media links
function logClick(platform) {
    console.log('Clicked on ' + platform);

    // Send event data to Google Analytics (example)
    gtag('event', 'click', {
        'event_category': 'Social Media',
        'event_label': platform
    });
}

// Typed.js dynamic text effect
var typed = new Typed(".text", {
    strings: ["Student", "Web Developer", "Machine Learning Enthusiast", "NCC Cadet"],
    typeSpeed: 100,  // Speed of typing each letter (in milliseconds)
    backSpeed: 50,   // Speed of deleting each letter (in milliseconds)
    loop: true       // Loop the animation
});

// Log clicks on social media links
function logClick(platform) {
    console.log('Clicked on ' + platform);

    // Send event data to Google Analytics (example)
    gtag('event', 'click', {
        'event_category': 'Social Media',
        'event_label': platform
    });
}

// Project Carousel
document.querySelector('.left-arrow').addEventListener('click', function() {
    let carousel = document.querySelector('.project-content');
    let firstItem = document.querySelector('.project-item');
    carousel.insertBefore(firstItem, null);
    carousel.style.transform = 'translateX(-250px)';
});

document.querySelector('.right-arrow').addEventListener('click', function() {
    let carousel = document.querySelector('.project-content');
    let lastItem = document.querySelector('.project-item:last-child');
    carousel.insertBefore(lastItem, carousel.firstChild);
    carousel.style.transform = 'translateX(250px)';
});
