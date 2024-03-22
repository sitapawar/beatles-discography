import "./App.css";
import { useState } from "react";
import albumData from "./assets/albumData.json";
import AlbumItem from "./components/AlbumItem";

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [favorites, setFavs] = useState([]);
  const [itemCounts, setItemCounts] = useState({}); // State to keep track of item counts
  const cartItems = Object.keys(itemCounts).filter(itemName => itemCounts[itemName] > 0);

  const addToFavs = (item) => {
    setFavs([...favorites, item]);
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [item.album]: (prevCounts[item.album] || 0) + 1 // Increment count for the item
    }));
  };


  const removeFromCart = (item) => {
    setFavs(favorites.filter(cartItem => cartItem !== item));  // Remove the item from the cart
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [item.album]: (prevCounts[item.album] || 0) - 1 // Decrement count for the item
    }));
  };
  const totalFavorites = favorites.length;


  return (
    <div className="App">
      <h1>Beatles Discography</h1>
    <div class ="pageContents">
    <div class ="albumList">
      {albumData.map((item, index) => ( 
         <AlbumItem item={item} addToCart={addToFavs} remove = {removeFromCart} /> 
      ))}
      </div>
      <div className="Favorites">
        <h2>Favorites</h2>
        <ul>
          {cartItems.map((itemName, index) => (
            <li key={index}>{itemName}
            </li>
          ))}
        </ul>
        <p>{totalFavorites} Liked Albums</p>
      </div>
    </div>
      
    </div>
  );
}

export default App;
