import React, { Component } from 'react';
import logo from './logo.svg';
import SongForm from './components/SongForm';
import './App.css';
import { Button, Icon, Grid, Container } from 'semantic-ui-react';
import SongList from './components/SongList';


class App extends Component {

 state = { songs: [
   // {id: 1, title: "Despacito", artist: "Justin Bieber", rank: 9},
   // {id: 2, title: "A Team", artist: "Ed Sheeran", rank: 8},
   // {id: 3, title: "Heartbreaker", artist: "Mariah Carey", rank: 7 },
   // {id: 4, title: "Hands", artist: "Jewel", rank: 6},
   // {id: 5, title: "Zombie", artist: "The Cranberries", rank: 5},
   // {id: 6, title: "Chandelier", artist: "Sia", rank: 4},
   // {id: 7, title: "Hunger", artist: "Florence and the Machine", rank: 3},
   // {id: 8, title: "End Game", artist: "Taylor Swift", rank: 2},
   // {id: 9, title: "Hello", artist: "Adele", rank: 1}
 ]}

 componentDidMount() {
   //TODO make a call to our rails server to get Items
   fetch('/api/songs')
   .then(res=>res.json())
   .then(songs => {
      this.setState({ songs })
   })
 }


 addSong = (title, artist, rank) => {

   const song = {title, artist, rank};
   fetch('/api/songs', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify(song)
   }).then(res => res.json())
     .then(song => {
       const {songs} = this.state;
       this.setState({songs: [...songs, song]});
   })
 }

 deleteSong = (title) => {

   fetch(`/api/songs/${title}`, {method: 'DELETE'})
    .then( () => {
      const{songs} = this.state;
      this.setState({songs: songs.filter(t => t.title !== title)})
    })

 }

 updateSong = (title) => {

   fetch(`/api/songs/${title}`, {method: 'PUT'})
    .then(res => res.json())
    .then(item => {
      let songs = this.state.songs.map(t => {
        if (t.title === title)
          return title
        return t;
      });
      this.setState({songs});
    })
 }

 render() {
   return (
     <div>
       <Container>
       <Grid divided='vertically'>
       <Grid.Row columns={6}>
         <Grid.Column>
           < SongForm
             addSong={this.addSong}
           />
         </Grid.Column>
         <Grid.Column>

         </Grid.Column>
       </Grid.Row>

       <Grid.Row columns={3}>
         <Grid.Column>
           <SongList
             songs={this.state.songs}
             updateSong={this.updateSong}
             deleteSong={this.deleteSong}
           />
         </Grid.Column>
       </Grid.Row>
     </Grid>
     </Container>
   </div>


   );
 }
}

export default App;
