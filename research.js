const authors = [
    { name: 'Author 1', birthYear: 1980 },
    { name: 'Author 2', birthYear: 1990 },
    { name: 'Author 3', birthYear: 1975 },
];

const authorContainer = document.getElementById('authorContainer');

const bookData = {
    'Author 1': [
        { title: 'Book 1', genre: 'Fiction', imageUrl: 'book1.jpg' },
        { title: 'Book 2', genre: 'Mystery', imageUrl: 'book2.jpg' },
    ],
    'Author 2': [
        { title: 'Book 3', genre: 'Science Fiction', imageUrl: 'book3.jpg' },
        { title: 'Book 4', genre: 'Fantasy', imageUrl: 'book4.jpg' },
    ],
    'Author 3': [
        { title: 'Book 5', genre: 'Thriller', imageUrl: 'book5.jpg' },
        { title: 'Book 6', genre: 'Romance', imageUrl: 'book6.jpg' },
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

    authorCard.appendChild(booksContainer);

    authorCard.addEventListener('click', () => {
        const books = bookData[author.name];
        booksContainer.innerHTML = '';

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
                </div>
            `;

            // Prevent the click event on book cards from propagating to the author card
            bookCard.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            bookGrid.appendChild(bookCard);
        });

        booksContainer.appendChild(bookGrid);

        // Toggle the "expanded" class to show or hide additional information
        authorCard.classList.toggle('expanded');
    });

    authorContainer.appendChild(authorCard);
});
