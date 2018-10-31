import React from 'react';

class CardForm extends React.Component{
 
    render(){

        // creating a link from name
        const link = `https://repl.it/@polevoyd/${this.props.cardToShow.split(' ').join('')}?lite=true`;
        const embeddedCodeEl = <iframe height="700px" width="100%" src={link} scrolling="no" frameBorder="no" allowtransparency="yes" allowFullScreen="yes" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
        
        </iframe>;
 
        return(
            <div className="card-edit-form">
                <div className="card-edit-form-header">
                    <h4>{this.props.cardToShow}</h4>
                    <div className="card-form button close" onClick={this.props.handlePanelClicks}></div>
                    <div className="card-form button delete" onClick={this.props.handlePanelClicks}></div>
                </div>
                {embeddedCodeEl}
            </div>
        );
    }
}

export default CardForm;
