import React, { useState } from 'react';
import GameModel from '../models/GameModel';

function NewGame(props) {

    const [title, setTitle] = useState('');
    const [publisher, setPublisher] = useState('');
    const [coverArtUrl, setCoverArtUrl] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const state = {
            title: title,
            publisher: publisher,
            coverArtUrl: coverArtUrl,
            completed: completed,
        }

        GameModel.create(state)
        .then(json => {
            props.history.push('/games')
        })
    }

    const handleChange = (event) => {
        const value = event.target.value;
        if(event.target.name === 'completed'){
            const updateVal = !completed;
            setCompleted(updateVal);
            console.log('completed:', completed);
        }
        else if(event.target.name === 'title'){
            setTitle(value);
        }
        else if(event.target.name === 'publisher'){
            setPublisher(value);
        }
        else if(event.target.name === 'coverArtUrl'){
            setCoverArtUrl(value);
        }
    }

    return (
        <div>
            <h2>New Game</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        name='title'
                        onChange={handleChange}
                        value={title}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='publisher'>Publisher</label>
                    <input
                        type='text'
                        name='publisher'
                        onChange={handleChange}
                        value={publisher}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='coverArtUrl'>Image URL</label>
                    <input
                        type='text'
                        name='coverArtUrl'
                        onChange={handleChange}
                        value={coverArtUrl}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='completed'>Completed</label>
                    <input
                        type='checkbox'
                        name='completed'
                        onChange={handleChange}
                        checked={completed}
                        // value={completed}
                    />
                </div>
                <input type='submit' value='Save Game' />
            </form>
        </div>
    )
}

export default NewGame;


// class NewGame extends React.Component {
//     state = {
//         title: '',
//         publisher: '',
//         coverArtUrl: '',
//         completed: false,
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();

//         GameModel.create(this.state)
//             .then(json => {
//                 this.props.history.push('/games')
//             })
//     }

//     handleChange = (event) => {
//         if(event.target.type !== 'text') {
//             this.setState(prevState => ({
//                 completed: !prevState.completed
//             }))
//         } else {   
//             this.setState({
//                 [event.target.name]: event.target.value
//             })
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h2>New Game</h2>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className='form-input'>
//                         <label htmlFor='title'>Title</label>
//                         <input
//                             type='text'
//                             name='title'
//                             onChange={this.handleChange}
//                             value={this.state.title}
//                         />
//                     </div>
//                     <div className='form-input'>
//                         <label htmlFor='publisher'>Publisher</label>
//                         <input
//                             type='text'
//                             name='publisher'
//                             onChange={this.handleChange}
//                             value={this.state.publisher}
//                         />
//                     </div>
//                     <div className='form-input'>
//                         <label htmlFor='coverArtUrl'>Image URL</label>
//                         <input
//                             type='text'
//                             name='coverArtUrl'
//                             onChange={this.handleChange}
//                             value={this.state.coverArtUrl}
//                         />
//                     </div>
//                     <div className='form-input'>
//                         <label htmlFor='completed'>Completed</label>
//                         <input
//                             type='checkbox'
//                             name='completed'
//                             onChange={this.handleChange}
//                             value={this.state.completed}
//                         />
//                     </div>
//                     <input type='submit' value='Save Game' />
//                 </form>
//             </div>
//         )
//     }
// }


// function holder() {
//     return (
//         <div>
//             <h2>New Game</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='form-input'>
//                     <label htmlFor='title'>Title</label>
//                     <input
//                         type='text'
//                         name='title'
//                         onChange={handleChange}
//                         value={title}
//                     />
//                 </div>
//                 <div className='form-input'>
//                     <label htmlFor='publisher'>Publisher</label>
//                     <input
//                         type='text'
//                         name='publisher'
//                         onChange={handleChange}
//                         value={publisher}
//                     />
//                 </div>
//                 <div className='form-input'>
//                     <label htmlFor='coverArtUrl'>Image URL</label>
//                     <input
//                         type='text'
//                         name='coverArtUrl'
//                         onChange={handleChange}
//                         value={coverArtUrl}
//                     />
//                 </div>
//                 <div className='form-input'>
//                     <label htmlFor='completed'>Completed</label>
//                     <input
//                         type='checkbox'
//                         name='completed'
//                         onChange={handleChange}
//                         value={completed}
//                     />
//                 </div>
//                 <input type='submit' value='Save Game' />
//             </form>
//         </div>
//     )
// }