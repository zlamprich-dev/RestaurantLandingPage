import foodImage from './assets/images/food.jpg';
import drinksImage from './assets/images/drinks.jpg';
import partyImage from './assets/images/party.jpg';
import './styles.css';  // Only import the CSS file

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


/*(function setDefaultHeroImage() {
    let heroImgDiv = document.getElementById("pageImg");


    heroImgDiv.style.backgroundImage = `url(${foodImage})`;
    heroImgDiv.style.backgroundSize = 'cover';
    heroImgDiv.style.width = '100%';
    heroImgDiv.style.height = '100vh';
    heroImgDiv.style.margin = '0px';
    heroImgDiv.style.padding = '0px';
    heroImgDiv.style.overflow = 'hidden';


    return heroImgDiv;
}())*/
