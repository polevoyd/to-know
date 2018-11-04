import React from 'react';
import {connect} from 'react-redux';
import {setCodeData} from '../actions/actions';

class CardForm extends React.Component{
 
    // get textcode from link
    componentWillMount() {
        var request = new XMLHttpRequest();
        request.open('GET', "https://raw.githubusercontent.com/polevoyd/js-challenges/master/Misc:%20Candies.js", true);
        request.responseType = 'blob';
        request.onload = () => {
            var reader = new FileReader();
            reader.readAsText(request.response);
            reader.onload =  (e) => {
                // console.log('DataURL:', e.target.result);
                this.props.dispatch(setCodeData(e.target.result))
            };
        };
        request.send();

        // console.log(this)
    }

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
        // https://raw.githubusercontent.com/polevoyd/js-challenges/master/Misc:%20Candies.js
        
        // src="https://raw.githubusercontent.com/polevoyd/js-challenges/master/Misc:%20Candies.js"

        
        

        const codeTextData = 
            <figure>
                <pre>
                    <code>
                        {this.props.cards.showCardData}
                    </code>
                </pre>
            </figure>;

        return(
            <div className="card-edit-form">
                <div className="card-edit-form-header">
                    <h4>{this.props.cardToShow}</h4>
                    <div className="card-form button close" onClick={this.props.handlePanelClicks}></div>
                </div>
                {codeTextData}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state };
}

// connect to access store (this.props.cardToShow)
export default connect(mapStateToProps)(CardForm);
