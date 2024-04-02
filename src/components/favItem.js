import React from 'react';

function FavItem({item}) {
        
  return (
    <div class = "FavAlb">
      <img class='favImg' src={item.cover} alt={item.album}></img>
      <p class='favTitle'><b>{item.album}</b></p>
    </div>
  );
}

export default FavItem;