import React, { useContext } from 'react'
import { FavoritesContext, FavoritesContextType } from './FavoritesContext';
import { Button } from '@mui/material';

function Favorites() {

  const { favorites, setfavorites } = useContext(FavoritesContext) as FavoritesContextType;

  const removeToFav = (id:number) => {
    var filteredFavorites = favorites.filter(q => q.id != id);
    setfavorites([...filteredFavorites]);
  }

  return (<>
    <Button onClick={() => setfavorites([])} style={{margin:10}} variant='contained' color='error'>Remove All</Button>
    <ul>
      {
        favorites && favorites.map((item:any) => <li key={item.id}>
          {item.name}
          <Button onClick={() => removeToFav(item.id)} style={{margin:10}} variant='contained' color='error'>Remove</Button>
        </li>)
      }
    </ul>
  </>
  )
}

export default Favorites