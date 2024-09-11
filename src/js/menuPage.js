import '../css/menuPageCSS.css'; // Page-specific styles

export function createMenuContentOverlay() {
    let menuContentDiv = document.createElement('div');
    menuContentDiv.setAttribute('id', 'menuContentDiv');
    let heroImgDiv = document.getElementById('heroImg');
    heroImgDiv.append(menuContentDiv);

    let textHeader = document.createElement('p');
    textHeader.setAttribute('id', 'textHeader');
    textHeader.textContent = 'Our Menu';


    let textContent = document.createElement('p');
    textContent.setAttribute('id', 'textContent');
    textContent.textContent = `
    Indulge in our carefully curated menu, filled with timeless flavors that bring the warmth of home to your table. Buon Appetito!`;

    menuContentDiv.append(textHeader);
    menuContentDiv.append(textContent);


    generateRestaurantMenu(menuContentDiv);
}

// Restaurant menu data 
const restaurantMenu = {
    appetizers: [
        { name: 'Bruschetta', description: 'Grilled bread with tomatoes, garlic, and basil', price: '$7.50' },
        { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with olive oil', price: '$8.00' },
    ],
    mainCourses: [
        { name: 'Spaghetti Carbonara', description: 'Pasta with pancetta, egg, and Parmesan cheese', price: '$15.00' },
        { name: 'Lasagna Bolognese', description: 'Layers of pasta, Bolognese sauce, and creamy béchamel', price: '$16.50' },
        { name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella, and basil', price: '$12.00' },
    ],
    desserts: [
        { name: 'Tiramisu', description: 'Espresso-soaked ladyfingers layered with mascarpone cream', price: '$6.50' },
        { name: 'Panna Cotta', description: 'Creamy vanilla custard with fresh berries', price: '$6.00' },
    ]
};

function generateRestaurantMenu(container) {
    const categories = Object.keys(restaurantMenu);

    categories.forEach(category => {
        // Create a category title
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryTitle.style.fontFamily = 'Georgia, serif';
        categoryTitle.style.color = '#8B0000';  // Dark red 
        container.appendChild(categoryTitle);

        // Create a 'ul' for menu items
        const ul = document.createElement('ul');
        ul.style.color = 'white'
        ul.style.listStyle = 'none';
        ul.style.padding = '0';

        // Add each item in the category
        restaurantMenu[category].forEach(item => {
            const li = document.createElement('li');
            li.style.marginBottom = '15px';

            // Create the name of the dish
            const name = document.createElement('h3');
            name.textContent = item.name;
            name.style.fontFamily = 'Arial, sans-serif';
            name.style.color = 'white';
            li.appendChild(name);

            // Create the description
            const description = document.createElement('p');
            description.textContent = item.description;
            description.style.fontStyle = 'italic';
            description.style.margin = '5px 0';
            li.appendChild(description);

            // Create the price
            const price = document.createElement('span');
            price.textContent = item.price;
            price.style.fontWeight = 'bold';
            li.appendChild(price);

            ul.appendChild(li);
        });

        container.appendChild(ul);
    });
}
