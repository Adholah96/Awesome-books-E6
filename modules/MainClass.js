const libraryBooks = document.querySelector('[data-book]');
const titleName = document.getElementById('titleName');
const authorName = document.getElementById('authorName');

class Library {
  constructor(id, author, title) {
    this.id = id;
    this.author = author;
    this.title = title;
  }

  // Local Storage
  static addLocalStorage = (libraryContainer) => {
    const storage = localStorage.setItem(
      'books',
      JSON.stringify(libraryContainer),
    );
    return storage;
  }

  static getLocalStorage = () => {
    const storage = localStorage.getItem('books') === null
      ? []
      : JSON.parse(localStorage.getItem('books'));
    return storage;
  }

  // display in the DOM
  static displayBooks = () => {
    /* eslint-disable no-use-before-define */
    const displayData = libraryContainer.map(
      (item) => `
        <div class='books'>
        <p> "${item.title}" by ${item.author} </p>
        <button class="delete-btn" data-id= ${item.id}>Remove</button>
        </div>
        `,
    );
    libraryBooks.innerHTML = displayData.join(' ');
  }

  // clear input once submited
  static clearInput = () => {
    titleName.value = '';
    authorName.value = '';
  }

  // delete book from DOM and arraylibrar
  static deleteBook = () => {
    libraryBooks.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
      }
      const btnId = e.target.dataset.id;
      Library.removeLibraryArray(btnId);
    });
  }

  static removeLibraryArray = (id) => {
    const libraryContainer = libraryContainer.filter((item) => item.id !== +id);
    Library.addLocalStorage(libraryContainer);
  }
}

// store values in a container referrenced by local storag
const libraryContainer = Library.getLocalStorage();

export { Library, libraryContainer };
