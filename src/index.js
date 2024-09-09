import foodImage from './assets/images/food.jpg';
import drinksImage from './assets/images/drinks.jpg';
import partyImage from './assets/images/party.jpg';
import './styles.css'; 

(function createHeroImage() {
    let contentPane = document.getElementById("content");
    let heroImgDiv = document.createElement("div");

    heroImgDiv.style.backgroundImage = `url(${foodImage})`;
    heroImgDiv.style.backgroundSize = 'cover';
    heroImgDiv.style.width = '100%';
    heroImgDiv.style.height = '100vh';
    heroImgDiv.style.margin = '0px';
    heroImgDiv.style.padding = '0px';
    heroImgDiv.style.overflow = 'hidden';
    heroImgDiv.setAttribute('id', 'heroImg')

    contentPane.append(heroImgDiv);
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
