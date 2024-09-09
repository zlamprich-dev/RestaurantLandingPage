import './css/styles.css'

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content'); // The container where tab content will go
    const homeLink = document.getElementById('homeLink');
    const menuLink = document.getElementById('menuLink');
    const contactLink = document.getElementById('contactLink');

    // Function clears the current tab content
    function clearContent() {
        contentDiv.innerHTML = ''; // Removes existing content
    }

    // Event Listeners for tab switching
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();  // Prevents default anchor behavior
        clearContent();  // Clears current content
        contentDiv.appendChild(homeTab());  // Loads Home content
    });

    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        contentDiv.appendChild(menuTab());  // Loads Menu content
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        contentDiv.appendChild(contactTab());  // Loads Contact content
    });

    // Loads the home page tab by default
    clearContent();
    contentDiv.appendChild(homeTab());
});

