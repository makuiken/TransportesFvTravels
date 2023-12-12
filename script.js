function toggleLanguage() {
    var languageToggle = document.querySelector('.language-toggle a');
    var contactLink = document.getElementById('contact-translate');
    var info = document.querySelector('#info');

    if (languageToggle.textContent === 'ES') {
        languageToggle.textContent = 'EN';
        // Code to switch to English version of the website

        info.innerHTML = '<p>Offering special trips, educational tours, and excursions throughout Chile</p>';
        contactLink.textContent = 'Contact Us';

    } else {
        languageToggle.textContent = 'ES';
        // Code to switch to Spanish version of the website
        info.innerHTML = '<p>Se realizan viajes especiales, viajes de estudios, turismo, paseos a todo Chile</p>';
        contactLink.textContent = 'Contáctenos';
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });