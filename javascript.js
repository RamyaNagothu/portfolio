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
document.querySelector('.left-arrow').addEventListener('click', function () {
    let carousel = document.querySelector('.project-content');
    let firstItem = document.querySelector('.project-item');

    // Move first item to the end
    carousel.appendChild(firstItem);

    // Reset transition to prevent glitches
    carousel.style.transition = "none";
    carousel.style.transform = "translateX(-250px)";

    // Allow animation after a small delay
    setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = "translateX(0)";
    }, 10);
});

document.querySelector('.right-arrow').addEventListener('click', function () {
    let carousel = document.querySelector('.project-content');
    let lastItem = document.querySelector('.project-item:last-child');

    // Move last item to the beginning
    carousel.insertBefore(lastItem, carousel.firstChild);

    // Reset transition
    carousel.style.transition = "none";
    carousel.style.transform = "translateX(250px)";

    // Allow animation after a small delay
    setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = "translateX(0)";
    }, 10);
});

