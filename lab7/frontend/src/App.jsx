const b1={
  picurl:"https://m.media-amazon.com/images/I/41JqamfsnJL._SX342_SY445_FMwebp_.jpg",
  bname:"React Design Pattern",
  price:1200,
  quantity:10,
  rating:5.0,
};

const b2={
  picurl:"https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"THE ROAD TO REACT",
  price:2619,
  quantity:10,
  rating:5.0,
};

function Book(props){
  console.log(props)
  return(
    <div>
      <img 
        src={props.Book.picurl}
        alt={props.Book.name}
      />
      <h1>let us React</h1>
      <h2>Price:{props.Book.orice}</h2>
      <h3>Quantity:{props.Book.quantity}</h3>
      <h4>Rating:{props.Book.rating}</h4>
    </div>
  )
}
export default function App(){
  return(
  <>
    <Book Book={b1} />
    <h1>Hello React</h1>
    <Book Book={b2}/>
    <Book Book={b1} />
    <Book book={b1}/>
  </>
  )
}

