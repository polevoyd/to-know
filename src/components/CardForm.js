import React from 'react';
import {connect} from 'react-redux';
import {setCodeData} from '../actions/actions';

///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////

class CardForm extends React.Component {
 
    /***********************************************************/
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

    /***********************************************************/
    // input: format, output: language
    formatToLanguage() {
        const format = this.props.cardToShow.split('.')[this.props.cardToShow.split('.').length-1];
        switch (format) {
            case 'js': return 'javascript';
            case 'py': return 'python3';
            case 'rb': return 'ruby';
            case 'html': return 'html';
            case 'css': return 'html';
            case 'java': return 'java';
            case 'cpp': return 'cpp';
            case 'cs': return 'csharp';
            default: return '';
        }
    }

    /***********************************************************/
    // make body unscrollable when form is open
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    /***********************************************************/
    // make body scrollable when form is closed
    componentWillUnmount() {
        document.body.removeAttribute('style');
    }

    /***********************************************************/
    // copy code to a clipboard
    handleCopyClick() {
        const text = document.querySelector('code').innerText;
        const tempEl = document.createElement('textarea');
        tempEl.value = text;
        document.body.appendChild(tempEl);
        tempEl.select();
        document.execCommand('copy');
        document.body.removeChild(tempEl);
        console.log('Text copied to clipboard!');     
    }

    /***********************************************************/
    // copy to clipboard and go to repl.it to try
    // arrow cause we need access to global 'this'
    handleTryitClick = () => {
        // copy content before going to external link
        this.handleCopyClick();
        const win = window.open(`https://repl.it/languages/${this.formatToLanguage()}`, `_blank`);
        win.focus();
    }

    /***********************************************************/
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
