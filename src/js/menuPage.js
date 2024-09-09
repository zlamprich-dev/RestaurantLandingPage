import foodImage from '../assets/images/food.jpg';
import drinksImage from '../assets/images/drinks.jpg';
import partyImage from '../assets/images/party.jpg';
import '../css/styles.css'; // Always import base styles
import '../css/menuPageCSS.css'; // Page-specific styles

document.addEventListener('DOMContentLoaded', () => {
    function setHeroImage() {
        let img = document.getElementById("heroImg");
        let homeLink = document.getElementById("homeLink");
        let menuLink = document.getElementById("menuLink");
        let contactLink = document.getElementById("contactLink");

        if (img && homeLink && menuLink && contactLink) {
            homeLink.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                img.style.backgroundImage = `url(${foodImage})`;
                window.location.href = homeLink.getAttribute('href'); // Navigate to home.html
                console.log(`${foodImage}`)
            });

            menuLink.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                img.style.backgroundImage = `url(${drinksImage})`;
                window.location.href = menuLink.getAttribute('href'); // Navigate to menu.html
                console.log(`${drinksImage}`)
            });

            contactLink.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                img.style.backgroundImage = `url(${partyImage})`;
                window.location.href = contactLink.getAttribute('href'); // Navigate to contact.html
                console.log(`${partyImage}`)
            });
        }
    }
    setHeroImage();
});
