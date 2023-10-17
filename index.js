function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')  // Make a fetch request to the API
    .then(response => response.json())  // Convert the response to JSON
    .then(data => renderBooks(data));   // Pass the JSON data to renderBooks
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});