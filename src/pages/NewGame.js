import React from "react";
import GameModel from "../models/GameModel";

class NewGame extends React.Component {
  state = {
    title: "",
    publisher: "",
    coverArtUrl: "",
    completed: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    GameModel.create(this.state).then((json) => {
      this.props.history.push("/games");
    });
  };

  handleChange = (event) => {
    if (event.target.type !== "text") {
      this.setState((prevState) => ({
        completed: !prevState.completed,
      }));
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <h2>New Game</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-input'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='publisher'>Publisher</label>
            <input
              type='text'
              name='publisher'
              onChange={this.handleChange}
              value={this.state.publisher}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='coverArtUrl'>Image URL</label>
            <input
              type='text'
              name='coverArtUrl'
              onChange={this.handleChange}
              value={this.state.coverArtUrl}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='completed'>Completed</label>
            <input
              type='checkbox'
              name='completed'
              onChange={this.handleChange}
              value={this.state.completed}
            />
          </div>
          <input type='submit' value='Save Game' />
        </form>
      </div>
    );
  }
}

export default NewGame;
