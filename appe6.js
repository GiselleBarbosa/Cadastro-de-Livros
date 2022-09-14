class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  addBookToList(book){
    const list = document.getElementById('book-list');
    // Create tr element
        const row = document.createElement('tr');
    // Insert Cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
        `;
        
       list.appendChild(row);     
  }

  showAlert(message, className){
         // Create div
         const div = document.createElement('div');
         //Add Classes
         div.className = `alert ${className}`;
         //Add text
         div.appendChild(document.createTextNode(message));
         // Get Parents
         const container = document.querySelector('.container');
         // Get form
         const form = document.querySelector('#book-form');
         // Insert alert
         container.insertBefore(div, form);
 
         // Timeout after 3 sec
         setTimeout(function(){
             document.querySelector('.alert').remove();
         }, 3000);
  }

  deleteBook(target){
    if (target.className === 'delete') {
    target.parentElement.parentElement.remove()
    ;
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}


// Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get forms values
      const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value
      
  // Instantiate Book
      const book = new Book(title, author, isbn);
  
  // Instantiate UI
      const ui = new UI();

      // Validate
      if(title === '' || author === '' || isbn === ''){
          // Error Alert
          ui.showAlert('Por favor verifique se todos os campos estão preenchidos', 'error') ;               
          } else {
  // Add book to list
          ui.addBookToList(book);
  
        // Show sucess
        ui.showAlert('Livro adicionado com sucesso!','sucess')
    
  // Clear Fields
          ui.clearFields();
          }    
                      
      e.preventDefault();
  });
  
  // Event Listener for Delete
  document.getElementById('book-list').addEventListener('click', function(e){
      // Instantiate UI
      const ui = new UI();
     
      // Delete book
      ui.deleteBook(e.target);
  
      // Show message
      ui.showAlert('Livro Removido!', 'sucess')
      e.preventDefault();
  })