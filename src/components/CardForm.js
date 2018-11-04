import React from 'react';
import {connect} from 'react-redux';

class CardForm extends React.Component{
 
    // make body unscrollable when form is open
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    // make body scrollable when form is closed
    componentWillUnmount() {
        document.body.removeAttribute('style');
    }

    render(){
        
        // creating a link from username + taking card name from a state
        const link = `https://repl.it/@${this.props.user}/${this.props.cardToShow.split(' ').join('')}?lite=true`;
        const embeddedCodeEl = <iframe title="currentCard" height="700px" width="100%" src={link} scrolling="no" frameBorder="no" allowtransparency="yes" allowFullScreen="yes" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>;

        // LINK TO REQUEST NAMES AND LINKS: https://to-know.herokuapp.com/

        return(
            <div className="card-edit-form">
                <div className="card-edit-form-header">
                    <h4>{this.props.cardToShow}</h4>
                    <div className="card-form button close" onClick={this.props.handlePanelClicks}></div>
                </div>
                {embeddedCodeEl}
            </div>
        );
    }
}

// connect to access store (this.props.cardToShow)
export default connect()(CardForm);
