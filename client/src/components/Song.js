import React from 'react'
import { Item, Container } from 'semantic-ui-react'

const Song = ({ artist, title, rank, updateSong, deleteSong }) => (
<div>

<Container>
<Item>

  <Item.Content verticalAlign='middle'>
    <Item.Meta>{rank}</Item.Meta>
    <Item.Header as='a'>{title}</Item.Header>
    <Item.Meta>by: {artist}</Item.Meta>

  </Item.Content>


</Item>
</Container>

</div>
)

export default Song;
