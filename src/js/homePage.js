import '../css/homePageCSS.css'

export function setHomeTabContent() {
    let link = document.getElementById('homeLink');



    link.addEventListener('click', () => {
        setHeroImage();
        createHomeContentOverlay()

    })


}
export function createHomeContentOverlay() {
    let homeContentDiv = document.createElement('div')
    homeContentDiv.setAttribute('id', 'homeContentDiv')
    let heroImgDiv = document.getElementById('heroImg')
    heroImgDiv.append(homeContentDiv)


    let textHeader = document.createElement('p');
    textHeader.setAttribute('id', 'textHeader');
    textHeader.textContent = 'About Sapore Di Casa'


    let sloganContent = document.createElement('p');
    sloganContent.setAttribute('id', 'sloganContent');
    sloganContent.textContent = 'Placeholder Homepage Text'


    let textContent = document.createElement('p');
    textContent.setAttribute('id', 'textContent');
    textContent.textContent = 'Placeholder Homepage Text'


    homeContentDiv.append(textHeader)
    homeContentDiv.append(sloganContent)
    homeContentDiv.append(textContent)
}