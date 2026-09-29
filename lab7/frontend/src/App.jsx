const b1={
  picurl:"https://m.media-amazon.com/images/I/41JqamfsnJL._SX342_SY445_FMwebp_.jpg",
  bname:"React Design Pattern",
  price:1200,
  quantity:10,
  rating:5.0,
};

function Book(){
  return(
    <div>
      <img 
        src={b1.picurl}
        alt={b1.name}
      />
      <h1></h1>
      <h2>Price:{b1.orice}</h2>
      <h3>Quantity:{b1.quantity}</h3>
      <h4>Rating:{b1.rating}</h4>
    </div>
  )
}
export default function App(){
  return(
  <>
    <Book />
    <h1>Hello React</h1>
    <Book />
    <Book />
    <Book />
  </>
  )
}

