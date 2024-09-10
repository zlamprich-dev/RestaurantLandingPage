import { createContentOverlay } from './js/homePage';
import foodImage from './assets/images/food.jpg'
import partyImage from './assets/images/party.jpg'
import drinksImage from './assets/images/drinks.jpg'
import menuTab from './js/menuPage';
import contactTab from './js/contactPage';
import './css/styles.css';
import './css/homePageCSS.css';

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const homeLink = document.getElementById('homeLink');
    const menuLink = document.getElementById('menuLink');
    const contactLink = document.getElementById('contactLink');

    // Function to clear the current tab content
    function clearContent() {
        contentDiv.innerHTML = ''; // Removes existing content
    }

    // Event listeners for tab switching
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent default anchor behavior
        clearContent();
        setHeroImage(foodImage);
    });

    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        setHeroImage(drinksImage);

    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        setHeroImage(partyImage);

    });


    setHeroImage(foodImage);
    createContentOverlay()

});


function setHeroImage(img) {
    let imgElement = document.createElement('div');
    imgElement.setAttribute('id', 'heroImg');
    content.append(imgElement);

    let heroImgDiv = document.getElementById('heroImg');

    heroImgDiv.style.backgroundImage = `url(${img})`;
    heroImgDiv.style.backgroundSize = 'cover';
    heroImgDiv.style.width = '100%';
    heroImgDiv.style.height = '100%';
    heroImgDiv.style.margin = '0px';
    heroImgDiv.style.padding = '0px';
    heroImgDiv.style.overflow = 'hidden';

}


