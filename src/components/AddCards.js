import React from 'react';
import {connect} from 'react-redux';
import {addCards} from '../actions/actions';

/***********************************************************/

class AddCards extends React.Component {

    constructor(props){
        super(props);
        this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    }

    /***********************************************************/
    // on submit 

    handleLinkSubmit(event) {
        event.preventDefault();
        event.persist();

        // validation
        const valid = new RegExp(/^\https:\/\/github.com\/\w{1,15}\/.{1,70}/);

        if (valid.test(event.target[0].value.trim())){
            
            const link = `https://to-know.herokuapp.com?repo=${event.target[0].value}`;
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
                this.props.dispatch(addCards(event.target[0].value, arrayOfCards));
            })
        } else {
            console.log('Wrong link format!')
        }
    }
    
    /***********************************************************/
    
    render(){
        return(
            <div className="add-card">
                <form onSubmit={this.handleLinkSubmit}>
                    <label>
                        Profile Link:
                        <input type="text" defaultValue="https://github.com/polevoyd/to-know-content"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {cards: state}
}

// connect gives access to dispatch as a prop
export default connect(mapStateToProps)(AddCards);