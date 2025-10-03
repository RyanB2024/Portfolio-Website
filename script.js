document.addEventListener('DOMContentLoaded', () => {

    // Function to easily add a portfolio item to a specific grid
    function addPortfolioItem(gridSelector, imageUrl, title, description) {
        const grid = document.querySelector(gridSelector);
        if (grid) {
            const item = document.createElement('div');
            item.classList.add('portfolio-item');

            const image = document.createElement('img');
            image.src = imageUrl;
            item.appendChild(image);

            const itemTitle = document.createElement('h3');
            itemTitle.textContent = title;
            item.appendChild(itemTitle);

            const itemDescription = document.createElement('p');
            itemDescription.textContent = description;
            item.appendChild(itemDescription);

            grid.appendChild(item);
        }
    }

    // --- ADD YOUR PORTFOLIO ITEMS HERE ---

    // Add items to the "Games" page
    addPortfolioItem('#games .portfolio-grid', 'path/to/your/game-image1.jpg', 'My First Awesome Game', 'A short description of the game.');
    addPortfolioItem('#games .portfolio-grid', 'path/to/your/game-image2.jpg', 'My Second Awesome Game', 'Another short description of another game.');


    // Add items to the "3D Modeling" page
    addPortfolioItem('#modeling .portfolio-grid', 'path/to/your/model-image1.jpg', 'My First Cool 3D Model', 'A short description of the model.');
    addPortfolioItem('#modeling .portfolio-grid', 'path/to/your/model-image2.jpg', 'My Second Cool 3D Model', 'Another short description of another model.');

});