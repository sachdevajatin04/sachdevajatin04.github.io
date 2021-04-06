function Book(name, author, category) {
    this.name = name;
    this.author = author;
    this.category = category;
}

function Display() {
    
}

Display.prototype.add = function(book){
    tableBody = document.getElementById('tableBody')
    if(book.name !== null && book.name !== "" &&
    book.author !== null && book.author !== "" &&
    book.category !== null && book.category !== ""){
        let uiString = `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
            </tr>`
    tableBody.innerHTML += uiString
    alert("Book added")
    } else {
        alert("All fields are mandatory")
    }
    
}

Display.prototype.clear = function(){
    let bookAdditionForm = document.getElementById("bookAdditionForm")
    bookAdditionForm.reset();
}

let bookAdditionForm = document.getElementById("bookAdditionForm")
bookAdditionForm.addEventListener('submit', (e)=> {
    let name = document.getElementById('book_name').value;
    let author = document.getElementById('book_author').value;
    let category = document.getElementById('book_category').value;
    let book = new Book(name, author, category);
    console.log(book)

    let display = new Display();
    display.add(book);
    display.clear();
    e.preventDefault();
})

let contactForm = document.getElementById("contactForm")
contactForm.addEventListener('submit',(e) => {
    alert("Your response has been recorded");
    e.preventDefault();
})