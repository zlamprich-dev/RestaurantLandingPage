import { setHeroImage, setHomeTabContent } from './js/homePage';
import menuTab from './js/menuPage';
import contactTab from './js/contactPage';
import './css/styles.css';
import './css/homePageCSS.css';

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content'); // The container for tab content
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
        clearContent();  // Clears current content
        setHeroImage();  // Load hero image for Home tab
        setHomeTabContent();  // Load Home tab content
    });

    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        //menuTab();  // Loads Menu content
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        //contactTab();  // Loads Contact content
    });

    // Load the Home page tab by default on initial page load
    clearContent();
    setHeroImage();  // Ensure hero image shows on page load
    setHomeTabContent();  // Load the Home content by default
});
