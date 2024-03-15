import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from './components/BakeryItem'; // Adjust the import path


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [itemCounts, setItemCounts] = useState({}); // State to keep track of item counts
  
  const addToCart = (item) => {
    setCart([...cart, item]);
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [item.name]: (prevCounts[item.name] || 0) + 1 // Increment count for the item
    }));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem !== item)); // Remove the item from the cart
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [item.name]: (prevCounts[item.name] || 0) - 1 // Decrement count for the item
    }));
  };

  return (
    <div className="App">
      <h1>Sita's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
    <div class ="pageContents">
    <div class ="bakeryItems">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
         <BakeryItem item={item} addToCart={addToCart} /> // replace with BakeryItem component
      ))}
      </div>
      <div className="Cart">
        <h2>Cart</h2>
        <ul>
          {Object.keys(itemCounts).map((itemName, index) => (
            <li key={index}>{itemCounts[itemName]} x {itemName}
            <button onClick={() => removeFromCart(bakeryData.find(item => item.name === itemName))}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
      
    </div>
  );
}

export default App;
