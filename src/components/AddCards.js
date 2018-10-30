import React from 'react';

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

        // console.log(this.state.link)
        // set a page for parsing (need to make validation here)
        const link = this.state.link || 'https://repl.it/@polevoyd';

        /////////////////////////////////////////////////

        
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {

            const doc = this.responseXML;
            const arrayOfCards = [];
            doc.querySelectorAll('.repl-item-title').forEach(element => {
                arrayOfCards.push(element.innerText);
            })

            console.log(arrayOfCards)
        }
        xhr.open("GET", link);
        xhr.responseType = "document";
        xhr.send();

    }

    render(){
        return(
            <div>
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

export default AddCards;