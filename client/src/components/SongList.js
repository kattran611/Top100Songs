import React from 'react'
import Song from './Song'


const SongList = ({songs, updateSong, deleteSong}) => (
 <div className="row">
   { songs.map( single =>
     <Song
       key={single.id}
       {...single}
       updateSong={updateSong}
       deleteSong={deleteSong}
     />
   )}
 </div>
)

export default SongList;
