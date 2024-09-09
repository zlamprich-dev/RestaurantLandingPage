import foodImage from './assets/images/food.jpg';
import drinksImage from './assets/images/drinks.jpg';
import partyImage from './assets/images/party.jpg';
import './css/styles.css';

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
    let img = document.getElementById("heroImg")
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

function loadCSS(file) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;
    document.head.appendChild(link)

}

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path === '/' || path === '/index.html') {
        loadCSS('homePageCSS.css');
    } else if (path === '/menu.html') {
        loadCSS('menuPageCSS.css');
    } else if (path === '/contact.html') {
        loadCSS('contactPageCSS.css')
    }
});