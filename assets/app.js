/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`#home, #about, #program, #cards, #texts, footer`, {
    interval: 200
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
});
}
//Preloader
setTimeout(function() {
    // Hide the preloader
    document.querySelector('#preloader').style.display = 'none';

    // Show the main content
    document.getElementById('mainContent').style.display = 'block';
  }, 3000); // Delay in milliseconds (e.g., 3000ms = 3 seconds)