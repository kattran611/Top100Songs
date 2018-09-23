import React from 'react'
import { Item } from 'semantic-ui-react'

const Song = ({ artist, title, rank, updateSong, deleteSong }) => (
<div>


<Item>

  <Item.Content verticalAlign='middle'>
    <Item.Meta>{rank}</Item.Meta>
    <Item.Header as='a'>{title}</Item.Header>
    <Item.Meta>by: {artist}</Item.Meta>

  </Item.Content>


</Item>

</div>
)

export default Song;
