(function() {

    window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 3000,
        origin: 'bottom'
    });

    sr.reveal('.header-content-left', {
        duration: 4000,
        origin: 'top',
        distance: '300px'
    });

    sr.reveal('.header-content-right', {
        duration: 3000,
        origin: 'right',
        distance: '300px'
    });

    sr.reveal('.header-btn', {
        duration: 3000,
        origin: 'bottom',
        delay: 1500
    });

    sr.reveal('#testimonial', {
        duration: 5000,
        origin: 'left',
        distance: '300px',
        viewFactor: 0.2
    });

    //Smoth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

}());