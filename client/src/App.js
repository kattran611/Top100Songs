import React, { Component } from 'react';
import logo from './logo.svg';
import SongForm from './components/SongForm';
import './App.css';
import { Button, Icon, Grid } from 'semantic-ui-react';
import SongList from './components/SongList';


class App extends Component {

 state = { songs: [
   {id: 1, title: "Hello", artist: "Adele", rank: 1},
   {id: 2, title: "End Game", artist: "Taylor Swift", rank: 2},
   {id: 3, title: "Hunger", artist: "Florence and the Machine", rank: 3 },
   {id: 4, title: "Chandelier", artist: "Sia", rank: 4},
   {id: 5, title: "Zombie", artist: "The Cranberries", rank: 5},
   {id: 6, title: "Hands", artist: "Jewel", rank: 6},
   {id: 7, title: "Hearbreaker", artist: "Mariah Carey", rank: 7},
   {id: 8, title: "A Team", artist: "Ed Sheeran", rank: 8}
 ]}

 componentDidMount() {
   //TODO make a call to our rails server to get Items

 }


 addSong = (title, artist, rank) => {
   //TODO make api call to rails server to add itemle
   let song = {title, artist, rank};
   fetch(`/api/songs`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify(song)
   }).then(res => res.json())
     .then(song => {
       const {songs} = this.state;
       this.setState({songs: [...songs, song]})
   })
 }

 deleteSong = (title) => {
   //TODO make api call to delete todo
   //TODO remove it from state
   fetch(`/api/songs/${title}`, {method: 'DELETE'})
    .then( () => {
      const{songs} = this.state;
      this.setState({songs: songs.filter(t => t.title !== title)})
    })

 }

 updateSong = (title) => {
   //TODO make api call to update todo
   //TODO update state
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
       <Grid divided='vertically'>
       <Grid.Row columns={6}>
         <Grid.Column>
           < SongForm
             addSong={this.addSong}
           />
         </Grid.Column>
         <Grid.Column>
           <Button color='blue' size='mini' fluid >Add Artist</Button>
         </Grid.Column>
       </Grid.Row>

       <Grid.Row columns={1}>
         <Grid.Column>
           <SongList
             songs={this.state.songs}
             updateSong={this.updateSong}
             deleteSong={this.deleteSong}
           />
         </Grid.Column>
       </Grid.Row>
     </Grid>
   </div>


   );
 }
}

export default App;























// import React, { Component } from 'react';
// import SongForm from './components/SongForm';
// import SongList from './components/SongList';
// import { Button } from 'semantic-ui-react'
//
// class App extends Component {
//
//   state = { Songs: [] }
//
//   componentDidMount() {
//
//   }
//
//   addSong = (name) => {
//     const {songs} = this.state;
//     const id = Math.floor((1 + Math.random()) * 0x1000).toString()
//     this.setState({songs: [...songs, {id, name}]});
//   }
//
//   updateSong = (id) => {
//     let songs = this.state.songs.map(t => {
//       if (t.id === id)
//         return {...t, complete: !t.complete}
//       return t;
//     });
//     this.setState({songs});
//   }
//
//   deleteSong = (id) => {
//     const {songs} = this.state;
//     this.setState({songs: songs.filter(t => t.id !== id)})
//   }
//
//
//   render() {
//     return (
//       <div className="container">
//         <SongForm addSong={this.addSong}/>
//         <SongList
//            songs={this.state.songs}
//            updateSong={this.updateSong}
//            deleteSong={this.deleteSong}
//         />
//         <Button>Click Here</Button>
//       </div>
//     );
//   }
// }
//
// export default App;
