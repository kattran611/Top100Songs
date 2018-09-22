import React from 'react'
import Song from './Song'
import { Item } from 'semantic-ui-react'


const SongList = ({songs, updateSong, deleteSong}) => (
 <div className="row">
  <Item.Group>

   { songs.map( single =>
     <Song
       key={single.id}
       {...single}
       updateSong={updateSong}
       deleteSong={deleteSong}
     />
   )}
  </Item.Group>
 </div>
)

export default SongList;
