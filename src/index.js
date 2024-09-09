import foodImage from './assets/images/food.jpg';
import drinksImage from './assets/images/drinks.jpg';
import partyImage from './assets/images/party.jpg';
import './css/styles.css'; // Always import base styles
import './css/homePageCSS.css'

(function createHeroImage() {
    let contentHeroImg = document.getElementById("content");

    contentHeroImg.style.backgroundImage = `url(${foodImage})`;
    contentHeroImg.style.backgroundSize = 'cover';
    contentHeroImg.style.width = '100%';
    contentHeroImg.style.height = '100vh';
    contentHeroImg.style.margin = '0px';
    contentHeroImg.style.padding = '0px';
    contentHeroImg.style.overflow = 'hidden';
    contentHeroImg.setAttribute('id', 'heroImg')

}());

(function setHeroImage() {
    let img = document.getElementById("heroImg");
    let homeLink = document.getElementById("homeLink");
    let menuLink = document.getElementById("menuLink");
    let contactLink = document.getElementById("contactLink");

    homeLink.addEventListener('click', () => {
        img.style.backgroundImage = `url(${foodImage})`;
    });

    menuLink.addEventListener('click', () => {
        img.style.backgroundImage = `url(${drinksImage})`;
    });

    contactLink.addEventListener('click', () => {
        img.style.backgroundImage = `url(${partyImage})`;
    });

}());