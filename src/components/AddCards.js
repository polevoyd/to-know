import React from 'react';
import {connect} from 'react-redux';

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

        // set a page for parsing (need to make validation here)
        const link = event.target[0].value ? `https://repl.it/@${event.target[0].value}` : 'https://repl.it/@polevoyd';
        const userName = event.target[0].value;

        // prepare request to scrape cards from page
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            const doc = this.responseXML;

            // select all cards and push them into array
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
        
        // after request sent, wait 2sec and dispatch array to state
        setTimeout(() => {
            this.props.dispatch({
                type: 'ADD_CARDS',
                user: userName,
                arrayOfCards
            })
            arrayOfCards = [];
        }, 2000)
    }
    
    /***********************************************************/
    // rendering
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

// connect gives access to dispatch as a prop
export default connect()(AddCards);