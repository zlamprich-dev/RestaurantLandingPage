import '../css/menuPageCSS.css'; // Page-specific styles


export function createMenuContentOverlay() {
    let menuContentDiv = document.createElement('div')
    menuContentDiv.setAttribute('id', 'menuContentDiv')
    let heroImgDiv = document.getElementById('heroImg')
    heroImgDiv.append(menuContentDiv)

    let menuContentImg = document.createElement('div')
    menuContentImg.setAttribute('id', 'homeContentImage')
    menuContentDiv.append(menuContentImg)


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


    menuContentDiv.append(textHeader)
    menuContentDiv.append(sloganContent)
    menuContentDiv.append(textContent)
}
