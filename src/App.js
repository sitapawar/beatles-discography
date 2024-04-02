import "./App.css";
import { useState } from "react";
import albumData from "./assets/albumData.json";
import AlbumItem from "./components/AlbumItem";
import FavItem from "./components/favItem";



function App() {
  //State Variables
  const [favorites, setFavs] = useState([]);
  const [sortBy, setSortBy] = useState("date"); // State variable to keep track of sorting option
  const [filterBy, setFilterBy] = useState("none"); // State variable to keep track of filter option
  const [filter2By, setFilter2By] = useState("none"); // State variable to keep track of filter option


  const addToFavs = (item) => {
    setFavs([...favorites, item]);
  };

  // Remove the item from the cart
  const removeFromCart = (item) => {
    setFavs(favorites.filter(cartItem => cartItem !== item));  
  };
  const totalFavorites = favorites.length;

  // Function to handle filtering
  const handleFilter = (event) => {
    setFilterBy(event.target.value);
  };

  const handleFilter2 = (event) => {
    setFilter2By(event.target.value);
  };

   // Filter the albumData based on the selected filter option
   const filteredAlbumData = albumData.filter(item => {
    if (filterBy === "studio") {
      return item.type === "Studio";
    } else if (filterBy === "compil") {
      return item.type === "Compilation";
    } else if (filterBy === "anthology") {
      return item.type === "Anthology";
    } else if (filterBy === "UStudio") {
      return item.type === "US";
    } else if (filterBy === "deluxe") {
      return item.type === "Deluxe";
    } else if (filterBy === "Parlephone") {
      return item.label === "Parlephone";
    }else if (filterBy === "Apple") {
      return item.label === "Apple";
    }else if (filterBy === "none") {
      return true;
    } else {
      return true;
    }
  });

  const filtered2AlbumData = filteredAlbumData.filter(item => {
    if (filter2By === "Parlephone") {
      return item.label === "Parlephone";
    }else if (filter2By === "Apple") {
      return item.label === "Apple";
    }else if (filter2By === "none") {
      return true;
    } else {
      return true;
    }
  });

  // Sort the albumData based on the selected sort option
  const sortedAlbumData = [...filtered2AlbumData].sort((a, b) => {
    if (sortBy === "title") {
      return a.album.localeCompare(b.album); // Sort alphabetically by title
    } else {
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
    <button onClick={() => {setSortBy("date"); setFilterBy('none'); setFilter2By('none');}}>Default</button>
    <button onClick={() => setSortBy("title")}>Sort by Title</button>
    <div class='filterButton'>
    <label htmlFor="typeFilter">Filter by Type: </label>
          <select id="typeFilter" value={filterBy} onChange={handleFilter}>
          <option value="none">All</option>
          <option value="studio">Studio</option>
          <option value="compil">Compilation</option>
          <option value="deluxe">Deluxe</option>
          <option value="anthology">Anthology</option>
          <option value="UStudio">US Studio</option>
        </select>
    </div>
    <div class='filterButton'>
    <label htmlFor="labelFilter">Filter by Label: </label>
          <select id="labelFilter" value={filter2By} onChange={handleFilter2}>
          <option value="none">All</option>
          <option value="Apple">Apple</option>
          <option value="Parlephone">Parlephone</option>
        </select>
    </div>
      </div>
      {sortedAlbumData.map((item, index) => ( 
         <AlbumItem item={item} addToCart={addToFavs} remove = {removeFromCart} /> 
      ))}
      </div>
      <div className="Favorites">
        <h2>FAVORITES</h2>
          {favorites.map((item, index) => (
           <FavItem item={item}/>
          ))}         
          <br></br>
        <p>{totalFavorites} Liked Albums</p>
      </div>
    </div>
    </div>
  );
}

export default App;
