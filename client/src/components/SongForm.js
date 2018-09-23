import React from 'react';
import { form } from 'semantic-ui-react';

class SongForm extends React.Component {
  state = {title: ''}

  handleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.title)
    this.setState({title: ''})
  }

  render () {
    const {title} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          value={title}
          onChange={this.handleChange}
          required
          placeholder="Add a Song Title"
          // value={this.state.title}
          // onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default SongForm;
