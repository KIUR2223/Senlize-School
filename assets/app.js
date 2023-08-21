/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`#home, #about, #program, #cards, #texts, footer, #contact`, {
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


document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    contactMessage = document.getElementById("contact-message")
  
    emailjs.init("01p3TuyY4jDH7U8Bk"); // Replace with your User ID from EmailJS
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Collect form data
      const formData = new FormData(contactForm);
  
      // Send email
      emailjs.sendForm("service_et1qean", "template_r67smws", "#contact-form")
        .then(() =>{
          contactMessage.textContent = "Message sent succesfully"
          
            setTimeout(() =>{
                contactMessage.textContent = ""
            }, 5000)
        })

        contactForm.reset()

        .catch(function(error) {
          console.error("Email failed to send:", error);
          // Add code to show an error message to the user
        });
    });
    contactForm.reset()
  });
  