import React from 'react';
import {connect} from 'react-redux';
import {setCodeData} from '../actions/actions';

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

        /**
         * TODO: change tooltip text to "Copied!"
         */

        

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
    handleReplClick = () => {
        // copy content before going to external link
        this.handleCopyClick();
        const win = window.open(`https://repl.it/languages/${this.formatToLanguage()}`, `_blank`);
        win.focus();
    }

    /***********************************************************/
    // go to original github page
    handleGithubClick = () => {
        let rawLink = this.props.cards.showCardLink.split('/');
        let name = rawLink[rawLink.length-4];
        let repo = rawLink[rawLink.length-3];
        let file = rawLink[rawLink.length-1];
        let link = ['https://github.com'].concat(name).concat(repo).concat(['blob/master']).concat(file).join('/');

        const win = window.open(link, `_blank`);
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
                <div className="text-wrapper">
                    <h4>{this.props.cardToShow}</h4>
                </div>
                <div className="buttons-wrapper">
                    <div className="icon-wrap" onClick={this.handleCopyClick} tooltip="Copy code to clipboard"><i  className="far fa-clone card-form button copy"></i></div>
                    <div className="icon-wrap" onClick={this.handleReplClick} tooltip="Copy and run at Repl.it"><i className="fas fa-terminal card-form button repl"></i></div>
                    <div className="icon-wrap" onClick={this.handleGithubClick} tooltip="Open at GitHub"><i className="fab fa-github-square card-form button github"></i></div>
                    <div className="icon-wrap" onClick={this.props.handlePanelClicks} tooltip="Close"><i className="far fa-window-close card-form button close"></i></div>
                </div>
                </div>
                <div className="code-block">
                    {codeTextData}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state };
}

// connect to access store (this.props.cardToShow)
export default connect(mapStateToProps)(CardForm);


// TODO :

// 1 Add cards panel + info button 
// 2 color randomizer through React state