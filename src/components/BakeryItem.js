// TODO: create a component that displays a single bakery item
import React from 'react';


function BakeryItem({item, addToCart }) {
  return (
    <div class = "BakeryItem">
        <img src={item.image} alt={item.image}></img>
      
        <p><b>{item.name} - ${item.price}</b></p>
        <p>
        {item.description}
        <br></br>
        <br></br>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </p>
    </div>
  );
}

export default BakeryItem;