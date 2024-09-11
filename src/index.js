import { createHomeContentOverlay } from './js/homePage';
import { createMenuContentOverlay } from './js/menuPage';
import foodImage from './assets/images/food.jpg'
import partyImage from './assets/images/party.jpg'
import drinksImage from './assets/images/drinks.jpg'
import ambitiousImage from './assets/images/ambitious-studio.jpg'
import framesImage from './assets/images/frames-for-your-heart.jpg'
import './css/styles.css';
import './css/homePageCSS.css';

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const homeLink = document.getElementById('homeLink');
    const menuLink = document.getElementById('menuLink');
    const aboutLink = document.getElementById('aboutLink')

    // Function to clear the current tab content
    function clearContent() {
        contentDiv.innerHTML = ''; // Removes existing content
    }

    // Event listeners for tab switching
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent default anchor behavior
        clearContent();
        setHeroImage(foodImage);
        createHomePage();
    });

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent default anchor behavior
        clearContent();
        setHeroImage(partyImage);
        createHomeContentOverlay()
    });

    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        setHeroImage(drinksImage);
        createMenuContentOverlay();

    });

    setHeroImage(foodImage);
    createHomePage()
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


function createHomePage() {
    let homeOverlay = document.createElement('div')
    homeOverlay.setAttribute('id', 'homeOverlay')

    let heroImgDiv = document.getElementById('heroImg')
    heroImgDiv.append(homeOverlay);


    let textHeader = document.createElement('p');
    textHeader.setAttribute('id', 'textHeader');
    textHeader.textContent = 'Welcome Home.'


    let textContent = document.createElement('p');
    textContent.setAttribute('id', 'textContent');
    textContent.textContent = `

Welcome to Sapore Di Casa, where modern flair meets Italian tradition. Nestled in the heart of Denver's vibrant RiNo Arts District, our restaurant offers a vibrant, 
contemporary twist on classic Italian cuisine. At Sapore Di Case, every dish is crafted with passion and creativity, blending fresh, locally-sourced 
ingredients with bold flavors and innovative techniques. Whether you're here for a casual night out or a special celebration, our stylish ambiance, 
curated cocktails, and exceptional menu promise a dining experience that's as lively and dynamic as you are. Join us and savor the taste of Italy reimagined!`


    let overlayImageContainer = document.createElement('div');
    overlayImageContainer.setAttribute('id', 'overlayImageContainer');

    let overlayImageOne = document.createElement('div')
    overlayImageOne.setAttribute('id', 'imageOne');

    let overlayImageTwo = document.createElement('div')
    overlayImageTwo.setAttribute('id', 'imageTwo');

    overlayImageContainer.append(overlayImageOne)
    overlayImageContainer.append(overlayImageTwo)

    homeOverlay.append(textHeader)
    homeOverlay.append(textContent)
    homeOverlay.append(overlayImageContainer)
}
