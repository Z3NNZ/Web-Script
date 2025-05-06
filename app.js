const books = [
    {
        title: "The Great Escape",
        author: "John Smith",
        genre: "Fiction",
        price: 14.99,
        language: "English",
        format: "Paperback",
        year: 2020,
        description: "A thrilling journey of resilience and survival."
    },
    {
        title: "Mystic Realms",
        author: "Anna Clarke",
        genre: "Fantasy",
        price: 18.50,
        language: "English",
        format: "Hardcover",
        year: 2018,
        description: "A magical tale of heroes and dragons."
    },
    {
        title: "The Science of Everything",
        author: "Dr. Elena Ruiz",
        genre: "Non-Fiction",
        price: 25.00,
        language: "English",
        format: "eBook",
        year: 2021,
        description: "An insightful look into the fundamentals of science."
    },
    {
        title: "Secret Shadows",
        author: "Michael Thompson",
        genre: "Mystery",
        price: 12.75,
        language: "English",
        format: "Paperback",
        year: 2017,
        description: "A detective unravels a twisted web of secrets."
    },
    {
        title: "Viaje al Misterio",
        author: "Lucía Ortega",
        genre: "Mystery",
        price: 10.99,
        language: "Spanish",
        format: "Paperback",
        year: 2016,
        description: "Un misterio apasionante lleno de giros inesperados."
    }
];

document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const genre = formData.get('genre');
    const author = formData.get('author').toLowerCase();
    const minPrice = parseFloat(formData.get('minPrice')) || 0;
    const maxPrice = parseFloat(formData.get('maxPrice')) || Infinity;
    const language = formData.get('language');
    const format = formData.get('format');
    const year = parseInt(formData.get('year')) || 0;

    const filtered = books.filter(book => {
        return (!genre || book.genre === genre) &&
            (!author || book.author.toLowerCase().includes(author)) &&
            (book.price >= minPrice && book.price <= maxPrice) &&
            (!language || book.language === language) &&
            (!format || book.format === format) &&
            (book.year >= year);
    });

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (filtered.length === 0) {
        resultsDiv.innerHTML = '<p>No books found matching your criteria.</p>';
        return;
    }

    filtered.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `<strong>${book.title}</strong> by ${book.author}<br>
                           Price: £${book.price.toFixed(2)}<br>
                           ${book.description}`;
        resultsDiv.appendChild(bookDiv);
    });
});
...
// Add event listeners for the filter buttons