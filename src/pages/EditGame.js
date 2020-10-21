import React from 'react';
import GameModel from '../models/GameModel';

class EditGame extends React.Component {
    state = {
        title: '',
        publisher: '',
        coverArtUrl: '',
        completed: false,
        formTitle: '',
    }

    componentDidMount() {
        this.fetchGame();
    }

    fetchGame = () => {
        GameModel.show(this.props.match.params.id)
            .then(json => {
                this.setState({
                    ...json.game,
                    formTitle: json.game.title
                })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        GameModel.edit(this.props.match.params.id, this.state)
            .then(json => {
                this.props.history.push(`/games/${this.props.match.params.id}`)
            })
    }

    handleChange = (event) => {
        if(event.target.type !== 'text') {
            this.setState(prevState => ({
                completed: !prevState.completed
            }))
        } else {   
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Edit {this.state.formTitle}</h2>
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
                    <input type='submit' value='Update Game' />
                </form>
            </div>
        )
    }
}

export default EditGame;