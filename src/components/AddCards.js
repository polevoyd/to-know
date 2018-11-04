import React from 'react';
import {connect} from 'react-redux';
import {addCards} from '../actions/actions';

/***********************************************************/
// global array to push card elements from website

let arrayOfCards = [];

class AddCards extends React.Component {

    constructor(props){
        super(props);
        this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    }

    /***********************************************************/
    // on submit 

    handleLinkSubmit(event) {
        event.preventDefault();

        const link = `https://to-know.herokuapp.com/`;

        fetch(link)
        .then(res => res.json())
        .then(res => {
            
            // get array of cards and dispatch it
            const arrayOfCards = res.map(card => {
                return {
                    name: card.name,
                    link: card.link,
                    category: 'new'
                }
            })
            this.props.dispatch(addCards('polevoyd', arrayOfCards));
        })
    }
    
    /***********************************************************/
    
    render(){
        return(
            <div className="add-card">
                <form onSubmit={this.handleLinkSubmit}>
                    <label>
                        Profile Link:
                        <input type="text" defaultValue="polevoyd"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

// connect gives access to dispatch as a prop
export default connect()(AddCards);