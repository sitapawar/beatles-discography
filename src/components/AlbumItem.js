// TODO: create a component that displays a single bakery item
import React from 'react';
import { useState } from "react";
import Heart from "./Heart"

function AlbumItem({item, addToCart, remove}) {
    const [active, setActive] = useState(false)

    const handleHeartClick = () => {
        setActive(!active);
        if (!active) {
          addToCart(item);
        } else {
          remove(item);
        }
      };
        
  return (
    <div class = "AlbumItem">
        <img src={item.cover} alt={item.album}></img>
        <br></br>
        <div class="topAlbum">
        <p class="AlbTitle"><b>{item.album}</b></p>
        <div id="heart">
          <Heart isActive={active} onClick={handleHeartClick} animationScale = {1.25} />
        </div>
        </div>
        <p>{item.date}
        <br></br>
        <br></br>
        </p>  
    </div>
  );
}

export default AlbumItem;