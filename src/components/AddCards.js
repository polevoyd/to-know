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
            console.log(res);
            const arrayOfCards = res.map(card => {
                const cardObject = {
                    name: card.name,
                    link: card.link,
                    category: 'new'
                }
            })
            this.props.dispatch(addCards('polevoyd', arrayOfCards));
        })





















        ///////////////////////////////////////////////////////////////////////////
        // // set a page for parsing (need to make validation here)
        // const link = event.target[0].value ? `https://repl.it/@${event.target[0].value}` : 'https://repl.it/@polevoyd';
        // const userName = event.target[0].value || 'polevoyd';

        // // prepare request to scrape cards from page
        // let xhr = new XMLHttpRequest();
        // xhr.onload = function(){
        //     const doc = this.responseXML;

        //     // select all cards and push them into array
        //     doc.querySelectorAll('.repl-item-title').forEach(element => {
        //         const cardObject = { 
        //             name: element.innerText,
        //             category: 'new'
        //         }
        //         arrayOfCards.push(cardObject);
        //     })
        // }
        // xhr.open("GET", link);
        // xhr.responseType = "document";
        // xhr.send();
        
        // // after request sent, wait 2 sec and dispatch array to state
        // setTimeout(() => {
        //     this.props.dispatch(addCards(userName, arrayOfCards));
        //     arrayOfCards = [];
        // }, 2000)
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