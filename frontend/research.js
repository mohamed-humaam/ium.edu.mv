const authors = [
    { name: 'Author 1', birthYear: 1980 },
    { name: 'Author 2', birthYear: 1990 },
    { name: 'Author 3', birthYear: 1975 },
];

const authorContainer = document.getElementById('authorContainer');

const bookData = {
    'Author 1': [
        { title: 'Book 1', genre: 'Fiction', imageUrl: './Images/Research/image1.jpg' },
        { title: 'Book 2', genre: 'Mystery', imageUrl: './Images/Research/image1.jpg' },
    ],
    'Author 2': [
        { title: 'Book 3', genre: 'Science Fiction', imageUrl: './Images/Research/image1.jpg' },
        { title: 'Book 4', genre: 'Fantasy', imageUrl: './Images/Research/image1.jpg' },
    ],
    'Author 3': [
        { title: 'Book 5', genre: 'Thriller', imageUrl: './Images/Research/image1.jpg' },
        { title: 'Book 6', genre: 'Romance', imageUrl: './Images/Research/image1.jpg' },
    ],
};

authors.forEach((author) => {
    const authorCard = document.createElement('div');
    authorCard.classList.add('author-card');

    const authorTitle = document.createElement('h2');
    authorTitle.innerText = author.name;

    authorCard.appendChild(authorTitle);

    const booksContainer = document.createElement('div');
    booksContainer.classList.add('book-card-container');
    booksContainer.style.display = 'none'; // Initially hide books container

    authorCard.appendChild(booksContainer);

    authorTitle.addEventListener('click', () => {
        const books = bookData[author.name];
        const bookGrid = booksContainer.querySelector('.book-card-grid');

        if (booksContainer.style.display === 'none') {
            booksContainer.style.display = 'block';

            // If book grid doesn't exist, create it
            if (!bookGrid) {
                const bookGrid = document.createElement('div');
                bookGrid.classList.add('book-card-grid');

                books.forEach((book) => {
                    const bookCard = document.createElement('div');
                    bookCard.classList.add('book-card');
                    bookCard.innerHTML = `
                        <img src="${book.imageUrl}" alt="${book.title}">
                        <div>
                            <h3>${book.title}</h3>
                            <p>${book.genre}</p>
                        `;

                    bookCard.addEventListener('click', (e) => {
                        e.stopPropagation();
                        // Open the PDF file in a new tab when the book card is clicked
                        window.open('./path-to-your-pdf-file.pdf', '_blank');
                    });

                    bookGrid.appendChild(bookCard);
                });

                booksContainer.appendChild(bookGrid);
            }
        } else {
            booksContainer.style.display = 'none';
        }
    });

    authorContainer.appendChild(authorCard);
});