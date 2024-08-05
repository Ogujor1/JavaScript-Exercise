var library = [ ];

function addBook(title, author, yearPublished,  available){
   library.push({title, author, yearPublished,  available});
};

addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, true);
addBook('To Kill a Mockingbird', 'Harper Lee', 1960, true);
addBook('1984', 'George Orwell', 1949, false);
addBook('Pride and Prejudice', 'Jane Austen', 1813, true);



// Update the Availability of a Book:
library[2].available = true 
console.log(library)



// Remove a Book from the Library:
library.splice(3, 1);




// Check if a Book is in the Library:
function checkTitle(bookTitle){
  for (let i = 0; i < library.length; i++){
    if (library[i].title.includes(bookTitle)){
      return true
    };
  }
  return false
};

console.log(checkTitle('The Great Gatsby'));




// Borrow the First Book:
library[0].available = false;
console.log(library);
library.shift();



// Add a New Book to the Start of the Library:
let newBook = {
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  yearPublished: 1951 ,  
  available:true
};

library.unshift(newBook)
console.log(library)



// Get a List of All Book Titles:
let allTitle = []
for (let i = 0; i < library.length; i++){
  allTitle.push(library[i].title)
}
let joinedTitle = allTitle.join(',')
console.log(joinedTitle)


 
// Create a New Library Section:
let newArrival = library.slice(-2)
console.log(newArrival)