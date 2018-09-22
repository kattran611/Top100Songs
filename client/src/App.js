import React, { Component } from 'react';
import logo from './logo.svg';
import SongForm from './components/SongForm';
import './App.css';
import { Button, Icon, Grid } from 'semantic-ui-react';
import SongList from './components/SongList';


class App extends Component {

 state = { songs: [
   {id: 1, title: "Despacito", artist: "Justin Beiber", rank: 3},
   {id: 2, title: "End Game", artist: "Taylor Swift", rank: 2},
   {id: 3, title: "Hunger", artist: "Florence and the Machine", rank: 1},
 ]}

 componentDidMount() {
   //TODO make a call to our rails server to get Items

 }


 addSong = (name) => {
   //TODO make api call to rails server to add item
   const { songs } = this.state;
   //Generate random id
   const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
   this.setState({ songs: [...songs, { id, name }] });
 }

 deleteSong = (name) => {
   //TODO make api call to delete todo
   //TODO remove it from state
 }

 updateSong = (song) => {
   //TODO make api call to update todo
   //TODO update state
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
           <Button color='blue' size='mini' fluid >Click Click</Button>
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
