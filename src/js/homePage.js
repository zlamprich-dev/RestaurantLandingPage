import '../css/homePageCSS.css'
import foodImage from '../assets/images/food.jpg'

let content = document.getElementById('content');

export function setHomeTabContent() {
    let link = document.getElementById('homeLink');



    link.addEventListener('click', () => {
        setHeroImage();
        createContentOverlay()

    })


}
export function createContentOverlay() {
    let homeContentDiv = document.createElement('div')
    homeContentDiv.setAttribute('id', 'homeContentDiv')
    let heroImgDiv = document.getElementById('heroImg')
    heroImgDiv.append(homeContentDiv)

    homeContentDiv.style.display = 'flex';
    homeContentDiv.style.width = '80%';
    homeContentDiv.style.height = '75%';
    homeContentDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.863)';
    homeContentDiv.style.margin = 'auto'
    homeContentDiv.style.marginTop = '10%'
    homeContentDiv.style.borderRadius = '10px'
    homeContentDiv.style.justifyContent = 'center'

    let textHeader = document.createElement('p');
    textHeader.setAttribute('id', 'textHeader');
    textHeader.textContent = 'THIS IS A TEST'
    textHeader.style.fontSize = '40px'
    textHeader.style.color = 'white'

    homeContentDiv.append(textHeader)
}