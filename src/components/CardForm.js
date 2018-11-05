import React from 'react';
import {connect} from 'react-redux';
import {setCodeData} from '../actions/actions';

// TODO
// add button to copy whole code
// add link to complier environment (https://repl.it/languages/javascript) for JS

class CardForm extends React.Component{
 
    // get textcode from link
    componentWillMount() {
        
        // setting up request
        const request = new XMLHttpRequest();
        request.open('GET', this.props.link, true);
        request.responseType = 'blob';
        
        request.onload = () => {
            const reader = new FileReader();
            reader.readAsText(request.response);

            reader.onload =  (e) => {
                this.props.dispatch(setCodeData(e.target.result))
            };
        };
        request.send();
    }

    // make body unscrollable when form is open
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    // make body scrollable when form is closed
    componentWillUnmount() {
        document.body.removeAttribute('style');
    }

    // copy code to a clipboard
    handleCopyClick() {
        
        const text = document.querySelector('code').innerText;
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        console.log('Text copied to clipboard!');
    }

    // copy to clipboard and go to repl.it to try
    handleTryitClick() {
        console.log('Try it clicked!');
        //  https://repl.it/languages/javascript
    }

    render(){
        
        const codeTextData = 
            <figure>
                <pre>
                    <code contentEditable={true} spellCheck={false} suppressContentEditableWarning={true}>
                        {this.props.cards.showCardData}
                    </code>
                </pre>
            </figure>;

        return(
            <div className="card-edit-form">
                <div className="card-edit-form-header">
                    <h4>{this.props.cardToShow}</h4>
                    <div className="card-form button close" onClick={this.props.handlePanelClicks}></div>
                    <div className="card-form button copy" onClick={this.handleCopyClick}></div>
                    <div className="card-form button try-it" onClick={this.handleTryitClick}></div>
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
