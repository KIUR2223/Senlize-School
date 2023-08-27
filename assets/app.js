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
    document.querySelector('#preloader').style.display = 'none';

    document.getElementById('mainContent').style.display = 'block';
  }, 3000);


document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    contactMessage = document.getElementById("contact-message")
  
    emailjs.init("01p3TuyY4jDH7U8Bk");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
  
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
        });
    });
    contactForm.reset()
  });
  
var icon = document.getElementById("dark-icon");
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src = "./assets/img/sun.png";
    }
    else
    {
      icon.src = "./assets/img/moon.png";
    }
  }
