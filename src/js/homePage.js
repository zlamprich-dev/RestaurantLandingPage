import '../css/homePageCSS.css'
import foodImage from '../assets/images/food.jpg'

let content = document.getElementById('content');

export function setHomeTabContent() {
    let link = document.getElementById('homeLink');



    link.addEventListener('click', () => {

    })

    setHeroImage();
    setNewContent();
}

export function setHeroImage() {
    let imgElement = document.createElement('div');
    imgElement.setAttribute('id', 'heroImg');
    content.append(imgElement);

    let heroImgDiv = document.getElementById('heroImg');

    heroImgDiv.style.backgroundImage = `url(${foodImage})`;
    heroImgDiv.style.backgroundSize = 'cover';
    heroImgDiv.style.width = '100%';
    heroImgDiv.style.height = '100vh';
    heroImgDiv.style.margin = '0px';
    heroImgDiv.style.padding = '0px';
    heroImgDiv.style.overflow = 'hidden';

    
}

function setNewContent() {
    let homeContentDiv = document.createElement('div')
    homeContentDiv.setAttribute('id', 'homeContentDiv')
    content.append(homeContentDiv)

    let textHeader = document.createElement('p');
    textHeader.setAttribute('id', 'textHeader');

}