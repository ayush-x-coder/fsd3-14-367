import Book from "./component/Book"
import Pen from "./component/Pen"
import Fruit from "./component/Fruit"
import { books } from "./data/books"
import { pens } from "./data/Pens"
import { fruits } from "./data/fruits"

export default function App()
{
  
  return(
    <>
    <h1>Online Book Store</h1>
    <div className="container">
     <h1>Hello react</h1>
     <Book book={books[0]}/>
     <Book book={books[1]}/>
     <Pen Pen={pens[0]}/>
     <Pen Pen={pens[1]}/>
     <Fruit Fruit={fruits[0]}/>
     </div>
     </>
  )
}