import React from 'react';
import GameModel from '../models/GameModel';

class NewGame extends React.Component {
    state = {
        title: '',
        publisher: '',
        coverArtUrl: '',
        completed: false,
    }

    handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        console.log(this.state[event.target.name])

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>New Game</h2>
                <form>
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
        )
    }
}

export default NewGame;