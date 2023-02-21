const books = document.querySelector('.listone');
const addNew = document.querySelector('.listtwo');
const contact = document.querySelector('.listthree');
const booksContainer = document.getElementById('booksContainer');
const contactContainer = document.getElementById('contact');
const form = document.getElementById('myForm');

const singlePage = () => {
  books.addEventListener('click', () => {
    booksContainer.style.display = 'block';
    form.style.display = 'none';
    contactContainer.style.display = 'none';
  });
  addNew.addEventListener('click', () => {
    booksContainer.style.display = 'none';
    form.style.display = 'block';
    contactContainer.style.display = 'none';
  });
  contact.addEventListener('click', () => {
    contactContainer.style.display = 'block';
    booksContainer.style.display = 'none';
    form.style.display = 'none';
  });
};

export default singlePage;
