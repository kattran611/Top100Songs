import React from 'react';
import { form } from 'semantic-ui-react';

class SongForm extends React.Component {
  state = {title: ''}

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleArtistChange = (e) => {
    this.setState({artist: e.target.value});
  }

  handleRankChange = (e) => {
    this.setState({rank: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, artist, rank } = this.state
    this.props.addSong({ title, artist, rank })
    this.props.addSong(title, artist, rank)
    this.setState({title: '', artist: '', rank: ''})
  }

  render () {
    const {title, artist, rank} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          value={title}
          onChange={this.handleTitleChange}
          required
          placeholder="Add a Song Title"
          // value={this.state.title}
          // onChange={this.handleChange}
        />
        <input
          name='artist'
          value={artist}
          onChange={this.handleArtistChange}
          required
          placeholder="Who wrote this crap?"
          // value={this.state.title}
          // onChange={this.handleChange}
        />

        <input
          name='rank'
          value={rank}
          onChange={this.handleRankChange}
          required
          placeholder="Rank"
          // value={this.state.title}
          // onChange={this.handleChange}
        />


        <button>Submit</button>
      </form>
    )
  }
}

export default SongForm;
