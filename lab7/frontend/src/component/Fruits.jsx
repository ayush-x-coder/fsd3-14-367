const products = [
  { title: "cabbage", id: 1, isFruit: false },
  { title: "potato", id: 2, isFruit: false },
  { title: "Banana", id: 3, isFruit: true },
  { title: "apple", id: 4, isFruit: true },
];

const Fruit = () => {
  const listItems = products.map((item) => (
    <li key={item.id}  style={{color:"red"}}>{item.title}</li>
  ));

  return <ul>{listItems}</ul>;
};

export default Fruit;