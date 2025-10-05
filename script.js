document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const portfolioItems = {
        games: [{
            imageUrl: 'https://placehold.co/600x400/2a2a2a/f4f4f4?text=Game+Project+1',
            title: 'My First Awesome Game',
            description: 'A detailed description of the game. Talk about the genre, platforms, and your role in its development.'
        }, {
            imageUrl: 'https://placehold.co/600x400/2a2a2a/f4f4f4?text=Game+Project+2',
            title: 'My Second Awesome Game',
            description: 'Another detailed description. What technologies did you use? What were the challenges?'
        },],
        modeling: [{
            imageUrl: 'https://placehold.co/600x400/2a2a2a/f4f4f4?text=3D+Model+1',
            title: 'My First Cool 3D Model',
            description: 'A detailed description of the model. What software did you use? What was the polycount?'
        }, {
            imageUrl: 'path/to/your/image.jpg',
            title: 'My Second Cool 3D Model',
            description: 'Another detailed description. What was the inspiration for this model? How long did it take to create?'
        },],
        web: [{
            imageUrl: '',
            title: 'Pashto Learning Website',
            description: 'A detailed description of the web project. What was the goal and what technologies were used?'
        }, {
            imageUrl: 'https://placehold.co/600x400/2a2a2a/f4f4f4?text=Web+Project+2',
            title: 'Second Web Project',
            description: 'Another detailed description of a web project.'
        },],
    };

    function populatePortfolio(page) {
        const grid = document.querySelector(`#${page} .portfolio-grid`);
        if (grid) {
            portfolioItems[page].forEach(item => {
                const portfolioItem = document.createElement('div');
                portfolioItem.classList.add('portfolio-item');

                const image = document.createElement('img');
                image.src = item.imageUrl;
                portfolioItem.appendChild(image);

                const title = document.createElement('h3');
                title.textContent = item.title;
                portfolioItem.appendChild(title);

                portfolioItem.addEventListener('click', () => openModal(item));
                grid.appendChild(portfolioItem);
            });
        }
    }

    // Modal functionality
    const modal = document.getElementById('portfolio-modal');
    const closeButton = document.querySelector('.close-button');

    function openModal(item) {
        if (modal) {
            document.getElementById('modal-img').src = item.imageUrl;
            document.getElementById('modal-title').textContent = item.title;
            document.getElementById('modal-description').textContent = item.description;
            modal.style.display = 'block';
        }
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Populate portfolio based on the current page
    if (document.querySelector('#games')) {
        populatePortfolio('games');
    }
    if (document.querySelector('#modeling')) {
        populatePortfolio('modeling');
    }
    // FIXED: Added this block to populate the web projects page
    if (document.querySelector('#web')) {
        populatePortfolio('web');
    }
});