import React from 'react';
import {connect} from 'react-redux';

const arrayOfCards = [];

class AddCards extends React.Component {

    constructor(props){
        super(props);
        this.state = { link: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    }

    // on change send value to state
    handleChange(event) {
        this.setState({link: event.target.value})
    }

    // on submit take value from state
    handleLinkSubmit(event) {
        event.preventDefault();

        // const arrayOfCards = [];
 
        // set a page for parsing (need to make validation here)
        const link = this.state.link || 'https://repl.it/@polevoyd';

        var xhr = new XMLHttpRequest();
        xhr.onload = function() {

            const doc = this.responseXML;
            doc.querySelectorAll('.repl-item-title').forEach(element => {
               
                const cardObject = { 
                    name: element.innerText,
                    tags: []
                }
                arrayOfCards.push(cardObject);

                // showCard: !this.state.showCard,
                // showCardName: name,
                // arrayOfCards: []
            })
        }
        xhr.open("GET", link);
        xhr.responseType = "document";
        xhr.send();
    }

    render(){
        this.props.dispatch({
            type: 'ADD_CARDS',
            arrayOfCards
        })

        return(
            <div className="add-card">
                <form onSubmit={this.handleLinkSubmit}>
                    <label>
                        Profile Link:
                        <input type="text" value={this.state.link} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

// connect gives access to dispatch as a prop
export default connect()(AddCards);