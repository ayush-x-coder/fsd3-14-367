// <> </> fragment can be used to wrap multiple elements as one  
//Component can be called as html tag 
//The Tag must be closed 
//Component's First Character must be Capitalized

function Hello(args){
  return (
    <>
    <h2>Book Name: {args.name}</h2>
    <h2>Book Price: ${args.price}</h2>
    <h2>Book Author: {args.author}</h2>
    <h2> Book Rating : {args.rating}</h2>
    <center><img src={args.imageUrl} alt={args.name} style={{width:'auto',height:'auto'}}/></center>
    <h1>------------------------------</h1>
    <br></br>
    <br></br>
    </>
  )

}

export default function App(){
  const books = [
  {
    name: "To Kill a Mockingbird",
    price: 14.99,
    author: "Harper Lee",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    rating: 4.8
  },
  {
    name: "1984",
    price: 12.50,
    author: "George Orwell",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    rating: 4.7
  },
  {
    name: "The Great Gatsby",
    price: 10.99,
    author: "F. Scott Fitzgerald",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
    rating: 4.4
  },
  {
    name: "Atomic Habits",
    price: 18.00,
    author: "James Clear",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    rating: 4.9
  },
  {
    name: "Dune",
    price: 16.75,
    author: "Frank Herbert",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
    rating: 4.6
  }
];
  return (
    <>
      <h1> Hello, React!</h1>
      <br></br>
      <br></br>
      {books.map((book) => (
        <Hello key={book.name} name={book.name} price={book.price} author={book.author} imageUrl={book.imageUrl} rating={book.rating} />
      ))}
      <Hello {...books[0]}/>
    </>
  );
};