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