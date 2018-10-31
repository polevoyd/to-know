import React from 'react';
import {connect} from 'react-redux';

let arrayOfCards = [];

class AddCards extends React.Component {

    constructor(props){
        super(props);
        this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    }

    // on submit take value from state
    handleLinkSubmit(event) {
        event.preventDefault();

        // set a page for parsing (need to make validation here)
        const link = `https://repl.it/@${event.target[0].value}` || 'https://repl.it/@polevoyd';

        var xhr = new XMLHttpRequest();
        xhr.onload = function() {

            const doc = this.responseXML;
            doc.querySelectorAll('.repl-item-title').forEach(element => {
               
                const cardObject = { 
                    name: element.innerText,
                    tags: []
                }
                arrayOfCards.push(cardObject);
            })

            
        }
        xhr.open("GET", link);
        xhr.responseType = "document";
        xhr.send();

        // TODO: CHAIN DISPATCH ASYNC

        // dispatching an array
        this.props.dispatch({
            type: 'ADD_CARDS',
            user: event.target[0].value,
            arrayOfCards
        })
        arrayOfCards = [];
    }

    render(){
        return(
            <div className="add-card">
                <form onSubmit={this.handleLinkSubmit}>
                    <label>
                        Profile Link:
                        <input type="text"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state
    }
}

// connect gives access to dispatch as a prop
export default connect(mapStateToProps)(AddCards);