import '../css/homePageCSS.css'
import aboutPicture from '../assets/images/relax.jpg'

export function createHomeContentOverlay() {
    let homeContentDiv = document.createElement('div')
    homeContentDiv.setAttribute('id', 'homeContentDiv')
    let heroImgDiv = document.getElementById('heroImg')
    heroImgDiv.append(homeContentDiv)

    let homeContentImg = document.createElement('div')
    homeContentImg.setAttribute('id', 'homeContentImage')
    homeContentDiv.append(homeContentImg)


    let textHeader = document.createElement('p');
    textHeader.setAttribute('id', 'textHeader');
    textHeader.textContent = 'About Us'


    let sloganContent = document.createElement('p');
    sloganContent.setAttribute('id', 'sloganContent');
    sloganContent.textContent = 'Where Every Bite Feels Like Home. Period.'


    let textContent = document.createElement('p');
    textContent.setAttribute('id', 'textContent');
    textContent.textContent = `
At Sapore Di Casa, we believe that the heart of Italian cuisine is more than just food—it's about 
family, tradition, and the warmth of home. Founded in 2010 by the Rossi family, Sapore Di Casa was 
born out of a desire to share the rich culinary heritage of Italy with our community. Inspired by 
the simple yet flavorful dishes passed down through generations, we bring you authentic recipes 
made with love, fresh ingredients, and a passion for craftsmanship. Every meal at Sapore Di Casa 
is an invitation to experience the tastes, aromas, and traditions of Italy, just like at a family 
dinner table back home. We invite you to join us, where every bite feels like a homecoming.`


    homeContentDiv.append(textHeader)
    homeContentDiv.append(sloganContent)
    homeContentDiv.append(textContent)
}