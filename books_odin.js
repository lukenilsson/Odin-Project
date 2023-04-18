function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      " with " +
      this.pages +
      " pages. I have " +
      this.read
    );
  };
}

const book1 = new Book("To Kill A Mockingbird", "Harper Lee", "300", "Read");
const book2 = new Book("Harry Potter 4", "JK Rowling", "800", "Not Read");

console.log(book2.info());
