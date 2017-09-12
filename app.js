const bookList = document.querySelector('#to-read ul');

bookList.addEventListener('click', function(e){

  if(e.target.classList.contains('delete')){

    const li = e.target.parentElement;

    bookList.removeChild(li);
  }
});

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){

  e.preventDefault();

  const bookName = addForm.querySelector('input[type="text"]').value;

  if (bookName !== '') {
    //this is working method

    // bookList.innerHTML += '<li><span class="book">'+bookName+'</span><i class="fa fa-trash delete" aria-hidden="true"></i></li>';
    //
    // addForm.querySelector('input[type="text"]').value = '';


    // This is another working method
    const li = document.createElement('li');
    const span = document.createElement('span');
    const i = document.createElement('i');

    span.setAttribute('class', 'book');
    span.textContent = bookName;
    i.setAttribute('class', 'fa fa-trash delete');
    i.setAttribute('aria-hidden', 'true');

    li.appendChild(span);
    li.appendChild(i);

    bookList.appendChild(li);

    addForm.querySelector('input[type="text"]').value = '';
  }

});


const searchInput = document.forms['search-form'].querySelector('#search');

searchInput.addEventListener('keyup', function(e){
  const searchKey = e.target.value.toLowerCase();
  const books = bookList.getElementsByTagName('li');

  Array.from(books).forEach(function(book){
    var bookTitle = book.querySelector('.book').textContent;

    if(searchKey != ''){
      if(bookTitle.toLowerCase().indexOf(searchKey) != -1){
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    } else {
      Array.from(books).forEach(function(book){
        book.style.display = "block";
    });
  }
  });
});
