import "./App.css";
import { useState } from "react";
import albumData from "./assets/albumData.json";
import AlbumItem from "./components/AlbumItem";


function App() {
  //State Variables
  const [favorites, setFavs] = useState([]);
  const [itemCounts, setItemCounts] = useState({}); // State to keep track of item counts
  const cartItems = Object.keys(itemCounts).filter(itemName => itemCounts[itemName] > 0);
  const [sortBy, setSortBy] = useState("date"); // State variable to keep track of sorting option
  const [filterLabel, setFilterBy] = useState("none"); // State variable to keep track of filter option


  const addToFavs = (item) => {
    setFavs([...favorites, item]);
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [item.album]: (prevCounts[item.album] || 0) + 1 // Increment count for the item
    }));
  };

  // Remove the item from the cart
  const removeFromCart = (item) => {
    setFavs(favorites.filter(cartItem => cartItem !== item));  
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [item.album]: (prevCounts[item.album] || 0) - 1 // decrease count for the item
    }));
  };
  const totalFavorites = favorites.length;

   // Function to handle sorting
   const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  // Function to handle filtering
  const handleFilter = (event) => {
    setFilterBy(event.target.value);
  };

  // Sort the albumData based on the selected sort option
  const sortedAlbumData = [...albumData].sort((a, b) => {
    if (sortBy === "title") {
      return a.album.localeCompare(b.album); // Sort alphabetically by album title
    } else {
      // Add more sorting options if needed
      return 0;
    }
  });

  return (
    <div className="App">
      <div>
      <h1>the&nbsp;&nbsp;&nbsp;Beatles</h1>
      <hr></hr>
      {/* <h1>Discography</h1> */}
      </div>
    <div class ="pageContents">
    <div class ="albumList">
    <div className="HeaderButtons">
    <select onChange={handleSort}>
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
            </select>
        <select>
          <option value="label">Filter by Label</option>
          <option value="albumType">Filter by Album Type</option>
          <option value="albumType">View All</option>
        </select>
        <button>Default</button>
      </div>
      {sortedAlbumData.map((item, index) => ( 
         <AlbumItem item={item} addToCart={addToFavs} remove = {removeFromCart} /> 
      ))}
      </div>
      <div className="Favorites">
        <h2>FAVORITES</h2>
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
