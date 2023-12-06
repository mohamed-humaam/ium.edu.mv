const authorContainer = document.getElementById('authorContainer');

const bookData = [
    { title: 'Book 1', genre: 'Fiction', imageUrl: './Images/Research/image1.jpg' },
    { title: 'Book 2', genre: 'Mystery', imageUrl: './Images/Research/image1.jpg' },
    { title: 'Book 3', genre: 'Science Fiction', imageUrl: './Images/Research/image1.jpg' },
    { title: 'Book 4', genre: 'Fantasy', imageUrl: './Images/Research/image1.jpg' },
    { title: 'Book 5', genre: 'Thriller', imageUrl: './Images/Research/image1.jpg' },
    { title: 'Book 6', genre: 'Romance', imageUrl: './Images/Research/image1.jpg' },
    { title: 'Book 7', genre: 'Thriller', imageUrl: './Images/Research/image1.jpg' },
    { title: 'Book 8', genre: 'Romance', imageUrl: './Images/Research/image1.jpg' },
];

const booksContainer = document.createElement('div');
booksContainer.classList.add('book-card-container');

const bookGrid = document.createElement('div');
bookGrid.classList.add('book-card-grid');

bookData.forEach((book) => {
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
authorContainer.appendChild(booksContainer);
